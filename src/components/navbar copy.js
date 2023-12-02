import Logo from "./../img/logo.png";
import Keranjang from "./../img/keranjang.png";
import Cari from "./../img/search.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "./../img/close.svg";
import BurgerIcon from "./../img/burger.svg";

function Navbar() {
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
    <div>
      <nav className="flex items-center justify-between px-12 py-5">
        <div className="flex items-center">
          <img src={Logo} className="h-[25px] md:h-[30px] mr-3" alt="logo" />
          <Link to="../pages/About.jsx" className="hidden md:block">
            ASUS <span className="font-bold">ROG PRODUCT</span>
          </Link>
        </div>
        <div className="md:hidden">
          <button className="w-6 cursor-pointer" onClick={handleMenuClick}>
            {menuOpen ? (
              <img src={CloseIcon} alt="close" />
            ) : (
              <img src={BurgerIcon} alt="burger" />
            )}
          </button>
        </div>
        <div
          className={`md:flex items-center ${menuOpen ? "block" : "hidden"}`}
        >
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
        </div>
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
          <img className="w-[25px] cursor-pointer" src={Keranjang} alt="cart" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
