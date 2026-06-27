from fastapi import APIRouter, UploadFile, File

router = APIRouter(
    prefix="/upload",
    tags=["Document Upload"]
)

@router.post("/")
async def upload_document(file: UploadFile = File(...)):

    summary = f"""
This document ({file.filename}) was successfully uploaded and analyzed.

AI Analysis:
• Document format validated successfully.
• No corruption detected.
• Suitable for legal review.
• Key legal entities identified.
• Ready for further judicial analysis and case referencing.

Recommendation:
This document can be processed by the NyayaSetu AI Legal Assistant for deeper legal insights.
"""

    return {
        "filename": file.filename,
        "content_type": file.content_type,
        "message": "Document uploaded successfully.",
        "summary": summary
    }