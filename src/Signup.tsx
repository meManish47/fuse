import { Link } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit() {
    if (!email || !name || !password) return;

    const user = {
      id: Date.now(),
      name,
      email,
      password,
    };

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = existingUsers.some((u: any) => u.email === email);

    if (userExists) {
      toast.error("User already exists",{duration:1000});
      return;
    }

    const updatedUsers = [...existingUsers, user];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setName("");
    setEmail("");
    setPassword("");
    toast.success("Account created successfully",{duration:1000});
  }

  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <main className="min-h-screen bg-[#C5D8D4] flex items-center justify-center sm:px-0 px-4">
        <div className="bg-[#F5F7FB] border-2 border-[#333333] w-105 p-10">
          <h1 className="text-3xl font-dmsans font-semibold text-[#333333] mb-6">
            Sign Up
          </h1>

          <form
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
            method="GET"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-[#333333] bg-transparent px-4 py-2 focus:outline-none text-[#333333]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="you@example.com"
                className="w-full border border-[#333333] bg-transparent px-4 py-2 focus:outline-none text-[#333333]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full border border-[#333333] bg-transparent px-4 py-2 focus:outline-none text-[#333333]"
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-[#333333] text-white py-2 hover:opacity-90 transition cursor-pointer"
            >
              Create Account
            </button>
          </form>

          <p className="text-sm text-center mt-6 text-[#333333]">
            Already have an account?{" "}
            <Link to="/login" className="underline font-medium cursor-pointer">
              Login
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
