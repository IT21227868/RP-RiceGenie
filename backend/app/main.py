from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.rice_details_route import router as rice_details_route
from app.routes.user_route import router as user_route
from app.routes.rice_varieties_route import router as rice_varieties_router
from app.utils.database import engine, Base

# Initialize database tables
Base.metadata.create_all(bind=engine)

# Create FastAPI app
app = FastAPI()

# Add CORSMiddleware to allow requests from the Vite dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite dev server running on this port
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Add routes
app.include_router(rice_details_route, prefix="/rice-details", tags=["rice Details"])
app.include_router(rice_varieties_router, prefix="/api", tags=["rice-varieties"])

app.include_router(user_route, prefix="/auth", tags=["auth"])

# Run app on port 8000
# Command: `uvicorn app.main:app --reload`

