"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { SendHorizontal, Bot, User } from "lucide-react";

export default function AssistantPage() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("https://nyayasetu-8lon.onrender.com/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
        }),
      });

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      setResponse("âŒ Unable to connect to AI Assistant.");
    }

    setLoading(false);
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-white mb-2">
          ðŸ¤– AI Legal Assistant
        </h1>

        <p className="text-slate-400 mb-8">
          Ask any legal question and receive AI-powered legal guidance.
        </p>

        {/* Ask Question */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-8">

          <textarea
            rows={5}
            placeholder="Example: My bike was stolen..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full rounded-2xl bg-slate-950 border border-slate-700 text-white p-5 outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-slate-500"
          />

          <button
            onClick={askAI}
            disabled={loading}
            className="mt-6 flex items-center gap-3 rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-8 py-4 font-semibold transition"
          >
            <SendHorizontal size={20} />
            {loading ? "Thinking..." : "Ask AI"}
          </button>

        </div>

        {/* Response */}

        <div className="mt-8 bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-8">

          <div className="flex items-center gap-3 mb-6">

            <Bot className="text-blue-400" />

            <h2 className="text-2xl font-bold text-white">
              AI Response
            </h2>

          </div>

          {!response ? (

            <div className="flex items-center gap-3 text-slate-400">

              <User />

              <p>Ask a legal question to begin.</p>

            </div>

          ) : (

            <div className="rounded-2xl bg-slate-950 border border-slate-700 p-6 whitespace-pre-wrap leading-8 text-slate-200">
              {response}
            </div>

          )}

        </div>

      </div>
    </DashboardLayout>
  );
}
