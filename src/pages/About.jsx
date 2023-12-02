import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Comment from "../components/comment";
import rog from "../img/rog.png";
import k2 from "../img/jamin.png";
import k3 from "../img/box.png";
import k1 from "../img/card.png";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="lg:grid lg:grid-cols-2 px-10 items-center my-[13%]">
        <img src={rog} className="px-[20%]" alt="" />
        <div className="lg:pl-[10%] lg:pr-[20%]">
          <div className="text-red-500 text-6xl font-bold">Peringatan</div>
          <div className="text-2xl mt-10">
            website ini hanya sebuah project sederhana yang dibuat oleh alwan.
            website ini bukan website resmi dari Brand Asus ROG
          </div>
        </div>
      </div>

      <div className=" w-full px-[15%] bg-zinc-900 my-40">
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
      <div className="lg:grid lg:gap-10 lg:grid-cols-3 items-center px-7 lg:px-16 my-20 text-center">
        <div className="lg:px-10">
          <img className="w-[100%] px-16 lg:px-32 " src={k1} />
          <div className="text-base lg:text-2xl mt-10 px-5 lg:px-24">
            pembelian yang terbilang mudah dan terjamin keamanannya
          </div>
        </div>
        <div className="lg:px-10">
          <img className="w-[100%] px-16 lg:px-32 " src={k2} />
          <div className="text-base lg:text-2xl mt-10 px-5 lg:px-24">
            produk yang kami jual 100% produk asli dari pabrik asus
          </div>
        </div>
        <div className="lg:px-10">
          <img className="w-[100%] px-16 lg:px-32 " src={k3} />
          <div className="text-base lg:text-2xl mt-10 px-5 lg:px-24">
            terdapat banyak pilihan produk asus mulai dari laptop gaming hingga
            aksesoris gaming{" "}
          </div>
        </div>
      </div>
      <Comment />
    </>
  );
}
