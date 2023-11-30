import Logo from "./../img/logo.png";
import Keranjang from "./../img/keranjang.png";
import Cari from "./../img/search.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between px-12 py-5 ">
        <div className="flex items-center  ">
          <img src={Logo} className="h-[25px] md:h-[30px] mr-3" />
          <a className="hidden md:block" href="../pages/About.jsx">
            ASUS <span className="font-bold">ROG PRODUCT</span>
          </a>
        </div>
        <div className="">
          <a href="store/" className="hover:text-indigo-600 px-5 duration-300">
            Home
          </a>
          <a
            href="/Product"
            className="hover:text-indigo-600 mx-5 duration-300"
          >
            Product
          </a>
          <a href="/About" className="hover:text-indigo-600 mx-5 duration-300">
            About
          </a>
        </div>
        <div className="md:flex items-center hidden ">
          <input
            className="rounded-xl bg-blur px-4 mr-3 "
            placeholder="Cari Produk..."
            id=""
          />
          <img className="absolute right-[6rem] w-[25px]" src={Cari} />
          <img className="w-[25px]" src={Keranjang} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
