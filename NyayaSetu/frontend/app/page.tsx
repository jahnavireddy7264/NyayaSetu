"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Scale, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin() {
    try {
      const response = await fetch("http://127.0.0.1:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.message === "Login Successful") {
        localStorage.setItem("userId", String(data.user_id));
        localStorage.setItem("fullName", data.full_name);
        localStorage.setItem("email", email);

        router.push("/dashboard");
      } else {
        setMessage(data.detail || "Invalid Credentials");
      }
    } catch {
      setMessage("Backend not running");
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] flex items-center justify-center">

      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-700/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-indigo-700/20 blur-[140px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_70%)]" />

      {/* Watermark */}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">

        <Scale size={450} className="text-white" />

      </div>

      {/* Login Card */}

      <div className="relative w-[460px] rounded-3xl border border-slate-700 bg-slate-900/80 backdrop-blur-xl shadow-2xl p-10">

        <div className="flex justify-center">

          <div className="rounded-full bg-blue-600 p-5 shadow-lg">

            <ShieldCheck size={40} className="text-white" />

          </div>

        </div>

        <h1 className="mt-6 text-center text-4xl font-black text-white">
          NyayaSetu
        </h1>

        <p className="mt-2 text-center text-slate-400">
          AI Powered Judicial Intelligence Platform
        </p>

        <div className="mt-8 space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-blue-500"
          />

          <button
            onClick={handleLogin}
            className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 font-bold text-white transition hover:scale-[1.02] hover:shadow-xl"
          >
            Login
          </button>

        </div>

        {message && (
          <p className="mt-5 text-center text-sm text-green-400">
            {message}
          </p>
        )}

        <div className="mt-8 border-t border-slate-700 pt-6 text-center">

          <p className="text-slate-400">
            Don't have an account?
          </p>

          <button
            onClick={() => router.push("/register")}
            className="mt-2 font-semibold text-blue-400 hover:text-blue-300"
          >
            Create Account
          </button>

        </div>

      </div>
    </main>
  );
}