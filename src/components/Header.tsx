import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  const isLoggedIn = !!user;

  return (
    <div className="px-32 h-16  bg-[#F5F7FB]  flex justify-between items-center">
      <Link
        className="font-meddon  font-extrabold text-4xl tracking-widest text-[#333333] cursor-pointer"
        to="/"
      >
        fuse
      </Link>
      <div className="flex gap-8 ">
        <Link
          to={"/about"}
          className="text-[#4F4F4F] font-roboto text-sm tracking-wider cursor-pointer font-semibold h-16 hover:text-[#00a984] flex items-center px-2"
        >
          About
        </Link>
        {!isLoggedIn ? (
          <Link
            to={"/login"}
            className="text-[#4F4F4F] font-roboto text-sm tracking-wider cursor-pointer font-semibold h-16 hover:text-[#00a984] flex items-center px-2"
          >
            Login
          </Link>
        ) : (
          <div className="dropdown dropdown-end mt-2">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-[#F5F7FB] border-none shadow-none"
            >
              {" "}
              {/* <FaUser size={24} className="text-[#333333]" /> */}
              <span className="h-8 w-8 rounded-full bg-[#333333] flex items-center justify-center">
                {user.name[0]}
              </span>
            </div>
            <ul
              tabIndex={-1}
              className="dropdown-content menu  rounded-box z-1 w-52 p-2 shadow-sm bg-white text-[#333333] border"
            >
              <li className="pointer-events-none text-gray-500">
                <p>{user?.name}</p>
              </li>
              <li className="hover:bg-[#C5D8D4] hover:border border-[#333333]">
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
