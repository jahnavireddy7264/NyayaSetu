"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = async () => {
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

      if (response.ok) {
        setMessage("✅ Login Successful");
        localStorage.setItem("userId", String(data.user_id));
        localStorage.setItem("fullName", data.full_name);
        localStorage.setItem("email", email);

        router.push("/dashboard");
      } else {
        setMessage(data.detail || "❌ Login Failed");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Backend not running");
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[420px]">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          NyayaSetu Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg p-3 mb-4 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3 mb-4 text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          {message}
        </p>

        <p className="text-center mt-5">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-blue-700 font-semibold hover:underline"
          >
            Register
          </a>
        </p>

      </div>
    </main>
  );
}