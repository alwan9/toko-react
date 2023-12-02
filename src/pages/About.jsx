import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./../components/navbar";
import Comment from "./../components/comment";
import rog from "./../img/rog.png";
import k1 from "./../img/card.png";
import k2 from "./../img/jamin.png";
import k3 from "./../img/box.png";
import k4 from "./../img/pengiriman.png";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="lg:grid lg:grid-cols-2 px-10 items-center my-[13%]">
        <img src={rog} className="px-[20%]" alt="" />
        <div className="lg:pl-[10%] lg:pr-[20%] text-center md:text-left">
          <div className="text-red-500 text-3xl md:text-6xl mt-16 md:mt-0 font-bold">
            Peringatan
          </div>
          <div className="text-2xl mt-2 md:mt-10">
            website ini hanya sebuah project sederhana yang dibuat oleh alwan.
            website ini bukan website resmi dari Brand Asus ROG
          </div>
        </div>
      </div>

      <div className=" w-full lg:px-[15%] bg-zinc-900 my-40">
        <iframe
          className="w-[100%] h-[30%] lg:h-[70%] "
          src="https://www.youtube.com/embed/qWgkUaHAa2c?si=YQ7QhsXwL7P6ovGB"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="text-center text-xl lg:text-6xl">
        Terimakasih & Selamat menikmati
      </div>
      <div className="grid gap-5 lg:gap-10 px-20 lg:px-32 grid-cols-2 mt-20 lg:grid-cols-4 items-center   text-center">
        <div className="bg-blur py-7 w-[100%] h-[100%] px-10 lg:px-16 mt-5  ">
          <img className="w-[100%] px-[2%]  " src={k1} />
          <div className=" text-2xl mt-10 ">Pembayaran yang mudah dan aman</div>
        </div>
        <div className="bg-blur py-7 w-[100%] h-[100%] px-10 lg:px-16 mt-5  ">
          <img className="w-[100%] px-[2%]  " src={k2} />
          <div className=" text-2xl mt-10 ">
            produk yang kami jual 100% produk asli
          </div>
        </div>
        <div className="bg-blur py-7 w-[100%] h-[100%] px-10 lg:px-16 mt-5  ">
          <img className="w-[100%] px-[2%]  " src={k3} />
          <div className=" text-2xl mt-10 ">
            Packing yang rapi dan aman sampai tujuan
          </div>
        </div>
        <div className="bg-blur py-7 w-[100%] h-[100%] px-10 lg:px-16 mt-5  ">
          <img className="w-[100%] px-[2%]  " src={k4} />
          <div className=" text-2xl mt-10 ">Proses pengiriman yang cepat</div>
        </div>
      </div>
      <Comment />
    </>
  );
}
