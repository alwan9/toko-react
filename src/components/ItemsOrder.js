import React from "react";
import Trash from "../img/recycle-bin-2.png";
import Produk from "./../img/product/motherboard/ROG MAXIMUS Z690 HERO.png";

export default function Order() {
  return (
    <>
      {/* card */}
      <div className="flex items-center mt-[3%] md:mt-[15%]  md:mx-[2%]">
        <div className="bg-zinc-900 border-[1px] h-[100px] md:h-[170px]   border-zinc-700 rounded-l-lg py-2 pr-5 flex items-center">
          {/* imges */}
          <div className="mx-2  py-1 md:py-3 rounded-xl w-[30%] md:w-[40%] h-[100%] border-[1px]  border-zinc-700 bg-zinc-800">
            <img className=" w-[100%]  " src={Produk} />
          </div>
          {/* judul */}
          <div className=" mx-2">
            <h3 className="text-xl md:mt-10  lg:mt-0 text-center lg:text-left lg:text-2xl font-bold">
              ROG Huracan G21
            </h3>
            <h1 className="hidden md:block">New generation 2023</h1>
            <h3 className="text-xl mt-2 text-yellow-500 font-bold">30,2 jt</h3>
          </div>
          {/* button tambah */}
          {/* <div className="flex items-center mx-2">
            <button className="font-bold text-2xl">-</button>
            <div className="font-bold text-2xl mx-3 bg-zinc-800 border-[1px] border-zinc-700 rounded-xl py-3 px-4">
              1
            </div>
            <button className="font-bold text-2xl">+</button>
          </div> */}
        </div>
        <div className="bg-red-700  h-[100px] md:h-[170px] w-[12%] hover:bg-red-900 duration-300 cursor-pointer border-[1px] border-zinc-500 rounded-r-lg py-5 flex items-center px-3 ">
          <img className="w-[100%]" src={Trash} alt="" />
        </div>
      </div>
    </>
  );
}
