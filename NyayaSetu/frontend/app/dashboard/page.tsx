"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardCard from "@/components/dashboard/DashboardCard";
import QuickAction from "@/components/dashboard/QuickAction";

import {
  Users,
  Scale,
  Newspaper,
  FileText,
  Bot,
  Briefcase,
} from "lucide-react";

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://nyayasetu-8lon.onrender.com/dashboard")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  if (!data) {
    return (
      <DashboardLayout>
        <div className="text-center text-xl font-semibold">
          Loading Dashboard...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <DashboardCard
          title="Users"
          value={data.total_users}
          icon={<Users size={30} />}
          color="bg-blue-600"
        />

        <DashboardCard
          title="Cases"
          value={data.total_cases}
          icon={<Briefcase size={30} />}
          color="bg-green-600"
        />

        <DashboardCard
          title="News"
          value={data.total_news}
          icon={<Newspaper size={30} />}
          color="bg-purple-600"
        />

        <DashboardCard
          title="Legal Rights"
          value={data.total_rights}
          icon={<Scale size={30} />}
          color="bg-yellow-500"
        />

        <DashboardCard
          title="Documents"
          value={data.uploaded_documents}
          icon={<FileText size={30} />}
          color="bg-red-500"
        />

        <DashboardCard
          title="AI Queries"
          value={data.ai_queries}
          icon={<Bot size={30} />}
          color="bg-indigo-600"
        />

      </div>

      {/* Quick Actions */}

      <div className="mt-12">

        <h2 className="text-2xl font-bold mb-6">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          <QuickAction
            title="AI Legal Assistant"
            description="Ask legal questions using AI."
            href="/assistant"
          />

          <QuickAction
            title="Case Search"
            description="Search previous court judgments."
            href="/case-search"
          />

          <QuickAction
            title="Upload Documents"
            description="Upload FIRs, judgments and notices."
            href="/documents"
          />

          <QuickAction
            title="Legal News"
            description="Latest legal updates."
            href="/legal-news"
          />

          <QuickAction
            title="Know Your Rights"
            description="Read citizen legal rights."
            href="/rights"
          />

          <QuickAction
            title="Profile"
            description="Manage your account."
            href="/profile"
          />

        </div>

      </div>

      {/* Dashboard Overview */}

      <div className="mt-12 grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Recent Activity */}

        <div className="bg-white rounded-3xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-5">
            ðŸ“‹ Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <p>AI Legal Query Submitted</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-blue-500"></span>
              <p>Document Uploaded Successfully</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-purple-500"></span>
              <p>Case Search Completed</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
              <p>Citizen Rights Viewed</p>
            </div>

          </div>

        </div>

        {/* AI Insights */}

        <div className="bg-white rounded-3xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-5">
            ðŸ¤– AI Insights
          </h2>

          <ul className="space-y-4 text-gray-700">

            <li>âœ… Upload legal documents for AI analysis.</li>

            <li>âœ… Search similar court judgments.</li>

            <li>âœ… Stay updated with legal news.</li>

            <li>âœ… Learn your legal rights.</li>

          </ul>

        </div>

        {/* System Status */}

        <div className="bg-white rounded-3xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-5">
            âš™ï¸ System Status
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Backend</span>
              <span className="text-green-600 font-semibold">
                â— Online
              </span>
            </div>

            <div className="flex justify-between">
              <span>Database</span>
              <span className="text-green-600 font-semibold">
                â— Connected
              </span>
            </div>

            <div className="flex justify-between">
              <span>AI Assistant</span>
              <span className="text-green-600 font-semibold">
                â— Active
              </span>
            </div>

            <div className="flex justify-between">
              <span>Upload Service</span>
              <span className="text-green-600 font-semibold">
                â— Running
              </span>
            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}
