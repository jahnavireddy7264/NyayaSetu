"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { ShieldCheck } from "lucide-react";

interface Right {
  title: string;
  description: string;
}

export default function RightsPage() {
  const [rights, setRights] = useState<Right[]>([]);

  useEffect(() => {
    fetch("https://nyayasetu-8lon.onrender.com/rights/")
      .then((res) => res.json())
      .then((data) => setRights(data));
  }, []);

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-3 mb-8">
          <ShieldCheck size={40} className="text-green-600" />

          <h1 className="text-4xl font-bold text-green-700">
            Know Your Rights
          </h1>
        </div>

        <p className="text-gray-500 mb-8">
          Learn about your legal rights and protections under Indian law.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {rights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-bold text-green-700">
                {item.title}
              </h2>

              <p className="mt-4 text-gray-700 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </DashboardLayout>
  );
}
