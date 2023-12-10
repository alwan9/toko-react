import React from "react";
import Footer from "./Footer";

export default function Comment() {
  return (
    <>
      <div className="px-7 lg:px-36 mt-72 mb-36 pt-36 ">
        <div className="text-3xl lg:text-6xl font-bold">Tambahkan Komentar</div>
        <input
          placeholder="Masukan nama atau alamat email..."
          className="w-[100%] h-[45px] lg:h-[70px] rounded-2xl mt-10 text-base md:text-xl px-5 md:px-10 bg-zinc-800"
        />
        <textarea
          placeholder="Masukan komentar yang ingin ditambahkan..."
          className="w-[100%] h-[300px] py-5 rounded-2xl mt-5 md:mt-10  text-xl md:text-2xl px-5 md:px-10 bg-zinc-800"
        ></textarea>
        <button className="bg-indigo-800  px-10 lg:px-16 hover:bg-indigo-950 duration-200 border-[1px]  border-transparent  hover:border-indigo-200 py-2 text-right mt-5 lg:mt-14 text-base md:text-2xl rounded-2xl">
          Kirim
        </button>
      </div>
      <Footer />
    </>
  );
}
