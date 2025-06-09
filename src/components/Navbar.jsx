import React from "react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <h2 className="text-xl font-bold text-gray-800">
        <Link to="/">UniqBuy</Link>
      </h2>

      <ul className="flex gap-6 text-gray-600 font-medium">
        <li className="cursor-pointer hover:text-black transition">
          <Link to={"category/Mens"}>Mens</Link>
        </li>
        <li className="cursor-pointer hover:text-black transition">
          <Link to={"category/Womens"}>Womens</Link>
        </li>
      </ul>

      <div className="flex items-center gap-4 ">
        <button className="hover:scale-110 transition cursor-pointer">
        <Link to={"/cart"}>
          <ShoppingBag className="w-6 h-6 text-gray-600" />
        </Link>
        </button>
        <Link to={"/login"}>
          <button className="px-4 py-1 border border-gray-300 rounded hover:bg-gray-100 transition cursor-pointer">
            Login
          </button>
        </Link>
        <Link to={"/register"}>
          <button className="px-4 py-1 bg-black text-white rounded hover:bg-gray-800 transition cursor-pointer">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
