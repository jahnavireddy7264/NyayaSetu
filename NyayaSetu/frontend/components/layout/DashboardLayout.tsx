"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="flex min-h-screen bg-[#020617] text-white">

      {/* Sidebar */}

      <Sidebar />

      {/* Content */}

      <div className="flex-1 flex flex-col">

        <TopNavbar />

        <main className="flex-1 overflow-y-auto p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

          <div className="max-w-7xl mx-auto">
            {children}
          </div>

        </main>

      </div>

    </div>
  );
}