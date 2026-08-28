"""Production SEO middleware loaded automatically by Python at startup."""

from fastapi import FastAPI
from starlette.responses import RedirectResponse


CANONICAL_HOST = "artsoffinance.in"
WWW_HOST = "www.artsoffinance.in"
OLD_DESCRIPTION = (
    "Arts Of Finance — Bhopal's premier stock market training institute. "
    "Mentor-led courses in Technical Analysis, Fundamental Analysis, Options, "
    "Crypto, Forex and NISM-oriented learning. Book a free demo."
)
NEW_DESCRIPTION = (
    "Arts of Finance in Bhopal offers mentor-led stock market courses in "
    "technical analysis, options, forex, crypto, fundamental analysis and NISM."
)


class CanonicalSEOMiddleware:
    """Enforce one public URL and add canonical markup before JS loads."""

    def __init__(self, app):
        self.app = app

    async def __call__(self, scope, receive, send):
        if scope["type"] != "http":
            await self.app(scope, receive, send)
            return

        headers = {
            key.decode("latin-1").lower(): value.decode("latin-1")
            for key, value in scope.get("headers", [])
        }
        host = headers.get("host", "").split(":", 1)[0].lower()
        proto = headers.get("x-forwarded-proto", scope.get("scheme", "https")).split(",", 1)[0]
        path = scope.get("path", "/")
        query = scope.get("query_string", b"").decode("latin-1")

        if host == WWW_HOST or (host == CANONICAL_HOST and proto == "http"):
            location = f"https://{CANONICAL_HOST}{path}"
            if query:
                location = f"{location}?{query}"
            await RedirectResponse(location, status_code=301)(scope, receive, send)
            return

        start_message = None
        body_parts = []

        async def capture(message):
            nonlocal start_message
            if message["type"] == "http.response.start":
                start_message = message
                return
            if message["type"] == "http.response.body":
                body_parts.append(message.get("body", b""))
                if message.get("more_body", False):
                    return

                headers_out = start_message.get("headers", [])
                content_type = next(
                    (
                        value.decode("latin-1").lower()
                        for key, value in headers_out
                        if key.lower() == b"content-type"
                    ),
                    "",
                )
                body = b"".join(body_parts)
                if "text/html" in content_type:
                    canonical = f"https://{CANONICAL_HOST}{path}"
                    html = body.decode("utf-8")
                    html = html.replace(OLD_DESCRIPTION, NEW_DESCRIPTION)
                    html = html.replace(
                        "</head>",
                        f'<link rel="canonical" href="{canonical}" /></head>',
                        1,
                    )
                    body = html.encode("utf-8")
                    headers_out = [
                        (key, value)
                        for key, value in headers_out
                        if key.lower() not in {b"content-length", b"etag"}
                    ]
                    start_message = {**start_message, "headers": headers_out}

                await send(start_message)
                await send({"type": "http.response.body", "body": body})

        await self.app(scope, receive, capture)


_original_fastapi_init = FastAPI.__init__


def _fastapi_init_with_canonical_seo(self, *args, **kwargs):
    _original_fastapi_init(self, *args, **kwargs)
    self.add_middleware(CanonicalSEOMiddleware)


FastAPI.__init__ = _fastapi_init_with_canonical_seo
