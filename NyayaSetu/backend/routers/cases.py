from fastapi import APIRouter

router = APIRouter(
    prefix="/cases",
    tags=["Case Reference Engine"]
)

cases = [

    {
        "id":1,
        "title":"Mobile Theft",
        "court":"Supreme Court",
        "law":"BNS Section 303",
        "summary":"Mobile phone stolen from public place.",
        "outcome":"Accused convicted."
    },

    {
        "id":2,
        "title":"Cyber Fraud",
        "court":"Delhi High Court",
        "law":"IT Act",
        "summary":"Online banking fraud.",
        "outcome":"Investigation ordered."
    },

    {
        "id":3,
        "title":"Property Dispute",
        "court":"High Court",
        "law":"Transfer of Property Act",
        "summary":"Ownership conflict.",
        "outcome":"Civil decree passed."
    }

]

@router.get("/")
def get_cases():
    return cases