from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends

from database.database import get_db
from models.user import User

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)

@router.get("/")
def dashboard(db: Session = Depends(get_db)):

    total_users = db.query(User).count()

    return {
        "platform": "NyayaSetu",
        "total_users": total_users,
        "total_cases": 150,
        "total_news": 20,
        "total_rights": 4,
        "uploaded_documents": 0,
        "ai_queries": 0
    }