"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import DashboardLayout from "@/components/layout/DashboardLayout";

import {
  UserCircle,
  Mail,
  GraduationCap,
  LogOut,
  IdCard,
  ShieldCheck,
} from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("fullName");
    const storedEmail = localStorage.getItem("email");
    const storedUserId = localStorage.getItem("userId");

    if (!storedUserId) {
      router.push("/");
      return;
    }

    setName(storedName || "User");
    setEmail(storedEmail || "Not Available");
    setUserId(storedUserId);
  }, [router]);

  const logout = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">

        <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden">

          {/* Header */}

          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 p-10 flex flex-col items-center">

            <UserCircle
              size={120}
              className="text-white"
            />

            <h1 className="mt-4 text-4xl font-bold text-white">
              {name}
            </h1>

            <div className="flex items-center gap-2 mt-2">

              <ShieldCheck
                size={18}
                className="text-green-400"
              />

              <p className="text-slate-200">
                Verified NyayaSetu User
              </p>

            </div>

          </div>

          {/* Details */}

          <div className="p-8 space-y-5">

            <div className="flex items-center gap-4 rounded-2xl bg-slate-800 border border-slate-700 p-5">

              <IdCard className="text-purple-400" size={24} />

              <div>

                <p className="text-slate-400 text-sm">
                  User ID
                </p>

                <p className="text-white font-semibold">
                  {userId}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-slate-800 border border-slate-700 p-5">

              <Mail className="text-blue-400" size={24} />

              <div>

                <p className="text-slate-400 text-sm">
                  Email
                </p>

                <p className="text-white font-semibold break-all">
                  {email}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-slate-800 border border-slate-700 p-5">

              <GraduationCap
                className="text-green-400"
                size={24}
              />

              <div>

                <p className="text-slate-400 text-sm">
                  Role
                </p>

                <p className="text-white font-semibold">
                  Citizen / NyayaSetu User
                </p>

              </div>

            </div>

            <button
              onClick={logout}
              className="mt-6 w-full rounded-2xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white py-4 flex items-center justify-center gap-3 font-semibold transition"
            >
              <LogOut size={20} />
              Logout
            </button>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
