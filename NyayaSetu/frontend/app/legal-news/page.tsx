"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Newspaper, CalendarDays } from "lucide-react";

interface News {
  id: number;
  title: string;
  date: string;
  description: string;
}

export default function LegalNewsPage() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    fetch("https://nyayasetu-8lon.onrender.com/news/")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-3 mb-8">
          <Newspaper size={40} className="text-blue-700" />
          <h1 className="text-4xl font-bold text-blue-700">
            Legal News
          </h1>
        </div>

        <p className="text-gray-500 mb-8">
          Stay updated with the latest legal developments across India.
        </p>

        <div className="grid gap-6">

          {news.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >

              <h2 className="text-2xl font-bold text-blue-700">
                {item.title}
              </h2>

              <div className="flex items-center gap-2 text-gray-500 mt-3">
                <CalendarDays size={18} />
                {item.date}
              </div>

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
