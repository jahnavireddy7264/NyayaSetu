from fastapi import APIRouter

router = APIRouter(
    prefix="/news",
    tags=["Legal News"]
)

news = [

    {
        "id":1,
        "title":"Supreme Court issues new guidelines",
        "date":"2026-06-26",
        "description":"Supreme Court released new procedural guidelines."
    },

    {
        "id":2,
        "title":"Parliament passes Digital Evidence Bill",
        "date":"2026-06-25",
        "description":"New rules regarding admissibility of digital evidence."
    },

    {
        "id":3,
        "title":"Cyber Crime Awareness Campaign",
        "date":"2026-06-24",
        "description":"Government launches nationwide cyber awareness initiative."
    }

]

@router.get("/")
def get_news():
    return news