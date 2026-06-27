"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import {
  Bot,
  FileText,
  LayoutDashboard,
  LogOut,
  Newspaper,
  Scale,
  Search,
  User,
  Shield,
} from "lucide-react";

const menu = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "AI Assistant", href: "/assistant", icon: Bot },
  { name: "Case Search", href: "/case-search", icon: Search },
  { name: "Legal News", href: "/legal-news", icon: Newspaper },
  { name: "Legal Rights", href: "/rights", icon: Scale },
  { name: "Documents", href: "/documents", icon: FileText },
  { name: "Profile", href: "/profile", icon: User },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const logout = () => {
    localStorage.clear();
    router.push("/");
  };

  const fullName =
    typeof window !== "undefined"
      ? localStorage.getItem("fullName")
      : "";

  return (
    <aside className="w-72 min-h-screen bg-[#0B1120] border-r border-slate-800 flex flex-col text-white shadow-2xl">

      {/* Logo */}

      <div className="p-8 border-b border-slate-800">

        <div className="flex items-center gap-3">

          <div className="bg-blue-600 rounded-xl p-3">
            <Shield size={26} />
          </div>

          <div>

            <h1 className="text-3xl font-black tracking-wide">
              NyayaSetu
            </h1>

            <p className="text-slate-400 text-sm">
              AI Judicial Platform
            </p>

          </div>

        </div>

      </div>

      {/* Menu */}

      <nav className="flex-1 p-5 space-y-3">

        {menu.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300
              ${
                active
                  ? "bg-blue-600 text-white shadow-xl"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={22} />

              <span className="font-medium">
                {item.name}
              </span>

            </Link>
          );
        })}

      </nav>

      {/* User */}

      <div className="border-t border-slate-800 p-5">

        <div className="bg-slate-900 rounded-2xl p-4 mb-5">

          <p className="text-xs text-slate-400">
            Logged in as
          </p>

          <h2 className="text-lg font-bold mt-1 truncate">
            {fullName || "NyayaSetu User"}
          </h2>

        </div>

        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all py-3 font-semibold shadow-lg"
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </aside>
  );
}