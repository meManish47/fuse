import { Link } from "react-router-dom";
import Header from "./components/Header";

export default function Login() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <main className="min-h-screen bg-[#C5D8D4] flex items-center justify-center">
        <div className="bg-[#F5F7FB] border-2 border-[#333333] w-105 p-10">
          <h1 className="text-3xl font-dmsans font-semibold text-[#333333] mb-6">
            Login
          </h1>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-[#333333] bg-transparent px-4 py-2 focus:outline-none text-[#333333]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-[#333333] bg-transparent px-4 py-2 focus:outline-none text-[#333333]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#333333] text-white py-2 hover:opacity-90 transition cursor-pointer"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-center mt-6 text-[#333333]">
            Don{"'"}t have an account?{" "}
            <Link to="/signup" className="underline font-medium cursor-pointer" >
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
