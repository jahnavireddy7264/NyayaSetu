from fastapi import APIRouter

router = APIRouter(
    prefix="/rights",
    tags=["Legal Rights"]
)

rights = [

    {
        "title": "Women's Rights",
        "description": "Protection against domestic violence, workplace harassment, equal pay and legal aid."
    },

    {
        "title": "Consumer Rights",
        "description": "Right to safety, information, choice, and grievance redressal."
    },

    {
        "title": "Cyber Rights",
        "description": "Protection against cyber fraud, identity theft and online harassment."
    },

    {
        "title": "Property Rights",
        "description": "Legal ownership, inheritance and transfer of property."
    }

]

@router.get("/")
def get_rights():
    return rights