"use client";

import { useEffect, useState } from "react";
import {
  Bell,
  Search,
  UserCircle,
  ShieldCheck,
} from "lucide-react";

export default function TopNavbar() {
  const [name, setName] = useState("User");

  useEffect(() => {
    const storedName = localStorage.getItem("fullName");

    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-[#0F172A] border-b border-slate-800 px-8 py-5">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold text-white">
          Welcome back, {name} 👋
        </h1>

        <p className="text-slate-400 mt-1">
          AI Powered Judicial Intelligence Platform
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative">

          <Search
            className="absolute left-3 top-3 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-80 rounded-2xl border border-slate-700 bg-slate-900 text-white px-4 py-3 pl-10 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Notification */}

        <button className="relative rounded-2xl bg-slate-900 p-3 hover:bg-slate-800 transition">

          <Bell
            size={22}
            className="text-white"
          />

          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></span>

        </button>

        {/* User */}

        <div className="flex items-center gap-3 rounded-2xl bg-slate-900 border border-slate-700 px-4 py-2">

          <UserCircle
            size={42}
            className="text-blue-500"
          />

          <div>

            <p className="font-bold text-white">
              {name}
            </p>

            <div className="flex items-center gap-2">

              <ShieldCheck
                size={14}
                className="text-green-400"
              />

              <p className="text-sm text-slate-400">
                Verified User
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}