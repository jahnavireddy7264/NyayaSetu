"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Upload,
  FileText,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function DocumentsPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const uploadDocument = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://nyayasetu-8lon.onrender.com/upload/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);
    } catch {
      alert("Unable to upload document.");
    }

    setLoading(false);
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-white mb-2">
          📄 Document Upload
        </h1>

        <p className="text-slate-400 mb-8">
          Upload FIRs, Judgments and Legal Documents for AI Analysis.
        </p>

        <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-8">

          <div className="border-2 border-dashed border-blue-500 rounded-3xl p-10 text-center">

            <Upload
              size={70}
              className="mx-auto text-blue-500 mb-4"
            />

            <h2 className="text-2xl font-bold text-white">
              Select a Document
            </h2>

            <p className="text-slate-400 mt-2">
              Supports PDF, DOCX and TXT
            </p>

            <input
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              className="mt-8 block w-full text-slate-300
              file:rounded-xl
              file:border-0
              file:bg-blue-600
              file:px-5
              file:py-3
              file:text-white
              file:font-semibold
              hover:file:bg-blue-700"
              onChange={(e) => {
                if (e.target.files?.length) {
                  setFile(e.target.files[0]);
                }
              }}
            />

          </div>

          {file && (

            <div className="mt-6 rounded-2xl bg-slate-800 border border-slate-700 p-5 flex items-center gap-3">

              <FileText className="text-blue-400" />

              <div>

                <p className="text-white font-semibold">
                  {file.name}
                </p>

                <p className="text-slate-400 text-sm">
                  Ready for upload
                </p>

              </div>

            </div>

          )}

          <button
            onClick={uploadDocument}
            className="mt-8 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 py-4 text-lg font-bold text-white transition"
          >
            {loading ? "Uploading..." : "📤 Upload Document"}
          </button>

        </div>

        {result && (

          <div className="mt-8 rounded-3xl bg-slate-900 border border-slate-700 p-8 shadow-2xl">

            <div className="flex items-center gap-3 mb-6">

              <CheckCircle
                className="text-green-400"
                size={28}
              />

              <h2 className="text-2xl font-bold text-white">
                Upload Successful
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-slate-800 rounded-2xl p-5">

                <p className="text-slate-400 text-sm">
                  Filename
                </p>

                <p className="text-white font-semibold mt-1 break-all">
                  {result.filename}
                </p>

              </div>

              <div className="bg-slate-800 rounded-2xl p-5">

                <p className="text-slate-400 text-sm">
                  File Type
                </p>

                <p className="text-white font-semibold mt-1">
                  {result.content_type}
                </p>

              </div>

            </div>

            <div className="mt-8 rounded-2xl border border-blue-600 bg-blue-950/40 p-6">

              <div className="flex items-center gap-3 mb-4">

                <Sparkles className="text-yellow-400" />

                <h3 className="text-xl font-bold text-white">
                  AI Summary
                </h3>

              </div>

              <p className="text-slate-300 leading-8">
                {result.summary || "AI summary will be generated here."}
              </p>

            </div>

          </div>

        )}

      </div>
    </DashboardLayout>
  );
}