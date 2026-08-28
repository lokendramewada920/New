# Cloud Run and Firestore setup

This project deploys the React site and FastAPI API together as one Cloud Run service. Leads are stored in Cloud Firestore, so no VM, static IP, MongoDB server, or public database port is required.

## Free-tier guardrails

- Do not create a VM external IP.
- Keep Cloud Run minimum instances at zero and maximum instances at one, as configured in the workflow.
- Create only the default Firestore database; it is the one eligible for the free quota.
- In the Google Cloud Billing console, create a monthly budget alert for ₹1. A billing account is required for Cloud Run even when usage stays within the free allowance.

## 1. Create Firestore

Google Cloud Console → Firestore → Create database:

- Edition: Standard
- Database ID: (default)
- Location: us-central1
- Security mode: Production mode

The Cloud Run service account must later have the Cloud Datastore User role.

## 2. Enable APIs

Run the following from Cloud Shell after replacing PROJECT_ID:

    gcloud config set project PROJECT_ID
    gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com firestore.googleapis.com iamcredentials.googleapis.com sts.googleapis.com

## 3. Create the GitHub deploy identity

    export PROJECT_ID=PROJECT_ID
    export PROJECT_NUMBER=$(gcloud projects describe $PROJECT_ID --format='value(projectNumber)')
    gcloud iam service-accounts create github-cloud-run --display-name="GitHub Cloud Run deployer"
    gcloud projects add-iam-policy-binding $PROJECT_ID --member="serviceAccount:github-cloud-run@$PROJECT_ID.iam.gserviceaccount.com" --role="roles/run.admin"
    gcloud projects add-iam-policy-binding $PROJECT_ID --member="serviceAccount:github-cloud-run@$PROJECT_ID.iam.gserviceaccount.com" --role="roles/iam.serviceAccountUser"
    gcloud projects add-iam-policy-binding $PROJECT_ID --member="serviceAccount:github-cloud-run@$PROJECT_ID.iam.gserviceaccount.com" --role="roles/cloudbuild.builds.editor"
    gcloud projects add-iam-policy-binding $PROJECT_ID --member="serviceAccount:github-cloud-run@$PROJECT_ID.iam.gserviceaccount.com" --role="roles/artifactregistry.writer"

Create a runtime service account and grant it Firestore access:

    gcloud iam service-accounts create arts-of-finance-runtime --display-name="Arts Of Finance runtime"
    gcloud projects add-iam-policy-binding $PROJECT_ID --member="serviceAccount:arts-of-finance-runtime@$PROJECT_ID.iam.gserviceaccount.com" --role="roles/datastore.user"

## 4. Trust this GitHub repository with OIDC

    gcloud iam workload-identity-pools create github --location=global --display-name="GitHub Actions"
    gcloud iam workload-identity-pools providers create-oidc github --location=global --workload-identity-pool=github --display-name="GitHub" --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository" --attribute-condition="assertion.repository=='lokendramewada920/New'" --issuer-uri="https://token.actions.githubusercontent.com"
    gcloud iam service-accounts add-iam-policy-binding github-cloud-run@$PROJECT_ID.iam.gserviceaccount.com --role="roles/iam.workloadIdentityUser" --member="principalSet://iam.googleapis.com/projects/$PROJECT_NUMBER/locations/global/workloadIdentityPools/github/attribute.repository/lokendramewada920/New"

## 5. Add GitHub Actions secrets

Repository → Settings → Secrets and variables → Actions:

| Secret | Value |
| --- | --- |
| GCP_PROJECT_ID | Your GCP project ID |
| GCP_DEPLOYER_SERVICE_ACCOUNT | github-cloud-run@PROJECT_ID.iam.gserviceaccount.com |
| GCP_WORKLOAD_IDENTITY_PROVIDER | projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/github/providers/github |

No JSON service-account key is needed. A push to main will build and deploy the service.
