from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(
    prefix="/chat",
    tags=["AI Legal Assistant"],
)


class ChatRequest(BaseModel):
    message: str


@router.post("/")
def chat(request: ChatRequest):
    user_message = request.message.strip().lower()

    if "bike" in user_message or "theft" in user_message:
        return {
            "response": """
Incident: Vehicle Theft

Steps to Follow:
1. Call 112 immediately.
2. Visit the nearest police station.
3. File an FIR.
4. Collect a copy of the FIR.
5. Inform your insurance company.

Applicable Law:
- BNS Section 303 - Theft

Your Rights:
- Right to receive a copy of the FIR.
- Right to investigation updates.
"""
        }

    if "cyber" in user_message:
        return {
            "response": """
Incident: Cyber Crime

Steps to Follow:
1. Visit https://cybercrime.gov.in
2. Report the incident immediately.
3. Save screenshots and evidence.
4. Contact your bank if money is involved.

Applicable Law:
- Information Technology Act, 2000

Your Rights:
- Right to file a cyber crime complaint.
- Right to receive acknowledgement of your complaint.
"""
        }

    if "women" in user_message or "woman" in user_message:
        return {
            "response": """
Women's Legal Rights in India

Right to Equality
- Equal protection under the Constitution.

Right Against Domestic Violence
- Protected under the Protection of Women from Domestic Violence Act, 2005.

Right at Workplace
- Protection against sexual harassment under the POSH Act, 2013.

Right to Equal Pay
- Equal wages for equal work.

Emergency Helplines
- Women Helpline: 181
- Police: 112
"""
        }

    return {
        "response": """
I couldn't identify your legal issue.

Please provide more details.

Example:
- My bike was stolen.
- I am facing cyber fraud.
- What are women's legal rights?
- How do I file an FIR?
"""
    }
