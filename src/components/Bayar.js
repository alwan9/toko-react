import React from "react";
import { Link } from "react-router-dom";

export default function Bayar() {
  return (
    <>
      <footer className="w-[100%]  border-t-[2px] border-zinc-600 lg:flex justify-between items-center px-7 md:px-16 py-5  fixed bg-zinc-800 bottom-0">
        {/* total harga */}
        <div className=" md:mx-10">
          <div className="lg:my-2 my-1 md:my-3 text-base md:text-2xl text-yellow-500 font-bold ">
            Total Harga :
          </div>
          <div className="lg:my-2 my-1 md:my-3 text-xl lg:text-3xl font-bold">
            IDR 36,2 jt
          </div>
        </div>
        {/* promo */}
        <div className="md:mx-10 mt-5 ">
          <div className="lg:my-2 my-1 md:my-3 text-base md:text-2xl text-yellow-500 font-bold">
            Kode Promo :
          </div>
          <select
            className="lg:my-2 my-1 md:my-3 w-[100%] md:w-[400px] h-[40px] bg-zinc-900 rounded-lg px-5 tetx-2xl"
            placeholder="pilih"
            name="promo"
            id="promo"
          >
            <option value="juj93rIO0fiwio">juj93rIO0fiwio</option>
            <option value="jnf920IJ9rk">jnf920IJ9rk</option>
          </select>
        </div>
        {/* button bayar */}
        <div>
          <Link
            to="/Profile"
            // onClick={() => handleNavLinkClick("/Cart")}
          >
            <button className="relative -right-[65%] mt-2 lg:right-[6%] lg:mt-5 md:mt-0 bg-zinc-200 hover:bg-indigo-800 border-[1px] border-transparent hover:border-zinc-500 hover:text-zinc-50 duration-300 rounded-lg  px-10 md:px-16 font-bold  md:text-2xl  py-2 md:py-3 text-zinc-950  ">
              Bayar
            </button>
          </Link>
        </div>
      </footer>
    </>
  );
}
