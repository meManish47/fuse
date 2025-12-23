import { Link } from "react-router-dom";

const menuList = [
  { name: "Product", link: "/product" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Login", link: "/login" },
];
export default function Header() {
  return (
    <div className="px-32 h-16  bg-[#F5F7FB] flex justify-between items-center">
      <Link
        className="font-meddon  font-extrabold text-4xl tracking-widest text-[#333333] cursor-pointer"
        to="/"
      >
        fuse
      </Link>
      <div className="flex gap-16 ">
        {menuList.map((menu, index) => (
          <Link
            to={menu.link}
            key={index}
            className="text-[#4F4F4F] font-roboto text-sm tracking-wider cursor-pointer font-semibold h-16 hover:text-[#00a984] flex items-center px-2"
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
