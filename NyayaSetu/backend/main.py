from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database.database import Base, engine
from models.user import User
from routers import auth, cases, chat, dashboard, news, rights, summarizer, upload

app = FastAPI(
    title="NyayaSetu API",
    version="1.0.0",
    description="AI Powered Judicial Intelligence Platform",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://nyaya-setu-snowy.vercel.app/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(auth.router)
app.include_router(chat.router)
app.include_router(cases.router)
app.include_router(summarizer.router)
app.include_router(rights.router)
app.include_router(news.router)
app.include_router(upload.router)
app.include_router(dashboard.router)


@app.get("/")
def home():
    return {
        "status": "success",
        "message": "NyayaSetu Backend Running",
    }
