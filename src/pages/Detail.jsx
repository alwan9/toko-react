import React from "react";
import Navbar from "../components/navbar";
import Judul from "../img/judul1.png";
import Detail from "../components/detail";

export default function detail() {
  return (
    <>
      <Navbar />
      <header className="w-full h-[300px] pt-10">
        <img className="" src={Judul} alt="" />
      </header>
      <Detail judul="" harga="" deskripsi="" />
    </>
  );
}
