"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const register = async () => {
    try {
      const response = await fetch("https://nyayasetu-8lon.onrender.com/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: fullName,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Registration Successful!");

        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        let errorDetail = data.detail;
        if (Array.isArray(errorDetail)) {
          errorDetail = errorDetail.map((err: any) => err.msg).join(", ") || "Validation Error";
        }
        setMessage("❌ " + (typeof errorDetail === "string" ? errorDetail : "Registration Failed"));
      }
    } catch {
      setMessage("❌ Backend not running");
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[450px]">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-lg p-3 mb-4 text-black"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

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
          className="w-full border rounded-lg p-3 mb-6 text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={register}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg"
        >
          Register
        </button>

        <p className="text-center mt-5">{message}</p>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <a href="/" className="text-blue-700 font-semibold">
            Login
          </a>
        </p>

      </div>
    </main>
  );
}
