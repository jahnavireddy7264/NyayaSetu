from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(
    prefix="/summarizer",
    tags=["AI Judgment Summarizer"]
)

class Judgment(BaseModel):
    text: str

@router.post("/")
def summarize(judgment: Judgment):

    return {
        "facts":
            "This is a brief summary of the case facts.",

        "issues":
            "Legal issues involved in the judgment.",

        "arguments":
            "Arguments presented by both parties.",

        "reasoning":
            "Court reasoning summarized.",

        "verdict":
            "Final judgment delivered by the court."
    }