import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BurgerIcon from "./../img/burger.svg";
import Logo from "./../img/logo.png";
import Keranjang from "./../img/keranjang.png";
import CloseIcon from "./../img/close.svg";
import Cari from "./../img/search.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-nav z-[99] shadow-2xl header sticky top-0   flex items-center justify-between px-8 py-5">
        {/* Left section - Logo */}
        <div className="w-3/12 ">
          <Link
            className="flex items-center"
            to="/store"
            onClick={() => handleNavLinkClick("/store")}
          >
            <img src={Logo} alt="Logo" className="h-[25px] md:h-[30px] mr-3" />
            <div className="ml-2 font-light flex">
              Asus <span className="font-bold"> Store</span>
            </div>
          </Link>
        </div>

        {/* Middle section - Menu */}
        <nav className="nav hidden md:flex   font-semibold text-lg">
          <Link
            to="/store/"
            className="hover:text-indigo-600 px-5 duration-300"
            onClick={() => handleNavLinkClick("/store/")}
          >
            Home
          </Link>
          <Link
            to="/Product"
            className="hover:text-indigo-600 mx-5 duration-300"
            onClick={() => handleNavLinkClick("/Product")}
          >
            Product
          </Link>
          <Link
            to="/About"
            className="hover:text-indigo-600 mx-5 duration-300"
            onClick={() => handleNavLinkClick("/About")}
          >
            About
          </Link>
        </nav>

        {/* Right section - Cart and Burger/Close Icon */}
        <div className="flex items-center w-3/12 justify-end">
          {/* Cart */}
          <div className="md:flex items-center hidden">
            <input
              className="rounded-xl bg-blur px-4 py-1 mr-3 hover:bg-zinc-500 duration-300"
              placeholder="Cari Produk..."
              id=""
            />
            <img
              className="absolute right-[6rem] w-[25px]"
              src={Cari}
              alt="search"
            />
            <Link to="/Cart">
              <img
                className="w-[25px] cursor-pointer"
                src={Keranjang}
                alt="cart"
              />
            </Link>
          </div>

          {/* Burger/Close Icon */}
          <div className="relative">
            <Link onClick={handleMenuClick}>
              <img
                src={menuOpen ? CloseIcon : BurgerIcon}
                alt="Menu"
                className="h-8 p-1  block md:hidden hover:text-green-500 duration-200"
              />
            </Link>
            {menuOpen && (
              <img
                src={BurgerIcon}
                alt="Menu"
                className="h-8 p-1  block md:hidden hover:text-green-500 duration-200 absolute top-0 left-0"
                onClick={handleMenuClick}
              />
            )}
          </div>
        </div>
      </nav>

      {/* Burger Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-full h-full bg-zinc-800 z-10 p-8 rounded shadow-lg">
          <div className="flex justify-end">
            <img
              src={CloseIcon}
              alt="Close"
              className="h-6 w-6 cursor-pointer"
              onClick={handleMenuClick}
            />
          </div>
          {/* Example links, replace these with your navigation links */}
          <br />
          <br />
          <br />
          <br />
          <br />
          <Link
            to="/store/"
            className="py-2 hover:text-indigo-600  duration-300"
            onClick={() => handleNavLinkClick("/store/")}
          >
            Home
          </Link>
          <div className="w-[100%] h-[3px] bg-zinc-700 my-10"></div>

          <Link
            to="/Product"
            className="py-2 hover:text-indigo-600  duration-300"
            onClick={() => handleNavLinkClick("/Product")}
          >
            Product
          </Link>
          <div className="w-[100%] h-[3px] bg-zinc-700 my-10"></div>
          <Link
            to="/About"
            className="py-2 hover:text-indigo-600  duration-300"
            onClick={() => handleNavLinkClick("/About")}
          >
            About
          </Link>
          <div className="w-[100%] h-[3px] bg-zinc-700 my-10"></div>
          <Link
            to="/Cart"
            className="py-2 hover:text-indigo-600  duration-300 flex"
            onClick={() => handleNavLinkClick("/Cart")}
          >
            Keranjang
            <img
              className="w-[25px] mx-5 cursor-pointer"
              src={Keranjang}
              alt="cart"
            />
          </Link>
          <div className="font-light text-center absolute bottom-0 my-10  flex">
            UI/UX and Front end by <span className="font-bold"> Alwan </span>
          </div>
          {/* Add other links as needed */}
        </div>
      )}
    </>
  );
}
