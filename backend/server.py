from fastapi import FastAPI, APIRouter
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from google.cloud import firestore
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

STATIC_DIR = ROOT_DIR.parent / "frontend-build"
db = firestore.AsyncClient()

app = FastAPI(title="Arts Of Finance API")
api_router = APIRouter(prefix="/api")


class Lead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    course: Optional[str] = None
    mode: Optional[str] = None
    experience: Optional[str] = None
    callbackTime: Optional[str] = None
    message: Optional[str] = None
    source: str = "website"
    status: str = "new"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class LeadCreate(BaseModel):
    name: str
    phone: str
    email: Optional[str] = None
    course: Optional[str] = None
    mode: Optional[str] = None
    experience: Optional[str] = None
    callbackTime: Optional[str] = None
    message: Optional[str] = None
    source: str = "website"


@api_router.get("/")
async def root():
    return {"message": "Arts Of Finance API", "status": "ok"}


@api_router.get("/health")
async def health():
    return {"status": "healthy"}


@api_router.post("/leads", response_model=Lead)
async def create_lead(input: LeadCreate):
    lead = Lead(**input.model_dump())
    await db.collection("leads").document(lead.id).set(lead.model_dump())
    # CRM / email-service webhook can be triggered here once credentials are provided
    # (see CONTACT_FORM_ENDPOINT / CRM_API_KEY / EMAIL_SERVICE_API_KEY in .env)
    return lead


@api_router.get("/leads", response_model=List[Lead])
async def list_leads():
    query = db.collection("leads").order_by(
        "created_at", direction=firestore.Query.DESCENDING
    ).limit(500)
    leads = [Lead(**snapshot.to_dict()) async for snapshot in query.stream()]
    return leads


@api_router.get("/config/status")
async def integration_status():
    """Reports which integrations are configured — no secrets returned."""
    keys = [
        "MARKET_DATA_API_KEY", "CONTACT_FORM_ENDPOINT", "CRM_API_KEY",
        "EMAIL_SERVICE_API_KEY", "WHATSAPP_NUMBER", "BUSINESS_PHONE",
    ]
    return {k.lower(): bool(os.environ.get(k)) for k in keys}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.get("/{full_path:path}", include_in_schema=False)
async def serve_frontend(full_path: str):
    """Serve the React build and fall back to index.html for client-side routes."""
    requested_file = (STATIC_DIR / full_path).resolve()
    static_root = STATIC_DIR.resolve()
    if requested_file.is_relative_to(static_root) and requested_file.is_file():
        return FileResponse(requested_file)
    return FileResponse(static_root / "index.html")
