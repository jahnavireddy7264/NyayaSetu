"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Search, Scale, Landmark } from "lucide-react";

export default function CaseSearchPage() {
  const [cases, setCases] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/cases")
      .then((res) => res.json())
      .then((data) => setCases(data));
  }, []);

  const filteredCases = cases.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.law.toLowerCase().includes(search.toLowerCase()) ||
      item.court.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h1 className="text-4xl font-bold text-white mb-2">
          ⚖ Case Reference Engine
        </h1>

        <p className="text-slate-400 mb-8">
          Search previous judgments and legal references.
        </p>

        {/* Search */}

        <div className="relative mb-10">

          <Search
            className="absolute left-4 top-4 text-slate-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search by title, court or law..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-slate-700 bg-slate-900 py-4 pl-12 pr-4 text-white outline-none focus:border-blue-500"
          />

        </div>

        {/* Cards */}

        <div className="grid gap-6">

          {filteredCases.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl border border-slate-700 bg-slate-900 p-7 shadow-xl hover:border-blue-500 transition"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-2xl font-bold text-white">
                    {item.title}
                  </h2>

                  <div className="mt-2 flex gap-5 text-slate-400">

                    <div className="flex items-center gap-2">
                      <Landmark size={18} />
                      {item.court}
                    </div>

                    <div className="flex items-center gap-2">
                      <Scale size={18} />
                      {item.law}
                    </div>

                  </div>

                </div>

                <span className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white">
                  Closed
                </span>

              </div>

              <div className="mt-6 rounded-2xl bg-slate-800 p-5">

                <p className="text-slate-300">
                  <span className="font-semibold text-blue-400">
                    Summary:
                  </span>{" "}
                  {item.summary}
                </p>

              </div>

              <div className="mt-5 rounded-2xl bg-blue-950 border border-blue-700 p-5">

                <p className="text-blue-200">
                  <span className="font-semibold text-white">
                    Outcome:
                  </span>{" "}
                  {item.outcome}
                </p>

              </div>

            </div>

          ))}

          {filteredCases.length === 0 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-700 p-10 text-center text-slate-400">
              No matching cases found.
            </div>
          )}

        </div>

      </div>
    </DashboardLayout>
  );
}