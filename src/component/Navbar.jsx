import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24  py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <Link to="/">
            e-<span className="text-red-800">S</span>HOP
          </Link>
        </div>
        <div className="relative flex-1 mx-6">
          <form>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border py-2 px-4"
            />
            <FaSearch className="absolute top-3 right-3 text-red-500 " />
          </form>
        </div>

        <div className="flex items-center space-x-5">
          <Link to="/cart">
            <FaShoppingCart className=" text-lg" />
          </Link>
          <button className="hidden md:block">
            <div className="flex items-center gap-2">
              <p onClick={() => navigate("/login")} className="cursor-pointer">
                Login
              </p>{" "}
              | Register
            </div>
          </button>

          <button className="block md:hidden">
            <FaUserCircle />
          </button>
        </div>
      </div>

      {/* Second Section */}

      <div className="flex items-center justify-center space-x-14 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/Shop" className="hover:underline">
          Shop
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
        <Link to="/" className="hover:underline">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
