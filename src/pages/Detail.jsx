import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import data_product from "../assets/data";
import { Link, useParams } from "react-router-dom";
import Like from "./../img/solar_heart-white.png";

export default function DetailPage() {
  const partialData1 = data_product.slice(0, 5);
  const partialData2 = data_product.slice(20, 25);
  const { id } = useParams();

  // Mendapatkan data produk berdasarkan ID
  const selectedProduct = data_product.find(
    (product) => product.id === parseInt(id)
  );

  return (
    <>
      <Navbar />
      <div className="lg:p-20 grid lg:grid-cols-2 items-center">
        <div className="w-[100%] rounded-xl h-[350px] md:h-[400px] bg-zinc-800">
          <img
            className=" mx-7 my-4 absolute w-[7%]  md:w-[2%]  cursor-pointer"
            src={Like}
            alt="like"
          />
          <img
            className="w-[100%]  px-[10%] md:px-[20%] py-[12%] md:py-[5%]"
            src={selectedProduct.image}
          />
        </div>
        <div className="lg:pl-20 px-7">
          <h3 className="text-3xl mt-10 lg:mt-0 text-center lg:text-left lg:text-5xl font-bold">
            {selectedProduct.name}
          </h3>
          <div className="">
            <button
              class="w-[100%] rounded-lg h-[70px] text-2xl text-center border-[1px] duration-300 border-transparent  border-zinc-600 md:border-zinc-700 hover:bg-indigo-600
              bg-zinc-900   mt-10"
            >
              Beli {selectedProduct.harga}
            </button>

            <button
              class="w-[100%] rounded-lg h-[70px] text-2xl text-center border-[1px] duration-300 hover:border-transparent border-zinc-600 md:border-zinc-700  hover:bg-indigo-600
                mt-5 bg-zinc-800"
            >
              + Keranjang
            </button>
          </div>
        </div>
      </div>

      <p className="px-7 lg:px-20 mt-10 lg:mt-0 text-base md:text-2xl">
        {selectedProduct.des2}
        <br /> <br />
        ASUS Republic of Gamers (ROG) telah menjadi sorotan di pasar perangkat
        keras gaming tingkat atas dengan lini produknya yang menghadirkan
        inovasi, kinerja tinggi, dan desain yang memukau. Dari laptop hingga
        komponen PC, ROG terus menonjol dengan serangkaian produk yang
        menawarkan performa unggul, seperti ROG Flow X13 GV301RE yang
        menghadirkan fleksibilitas luar biasa dengan desainnya yang dapat
        dilepas dan performa kuat dalam bentuk yang kompak. ROG Zephyrus G14
        GA401 juga menjadi pilihan unggul dengan daya baterai yang kuat serta
        performa istimewa dalam ukuran yang kompak, memadukan daya dan mobilitas
        dengan sempurna.
        <br />
        <br />
        Sementara itu, di lini aksesori, ROG mempersembahkan produk-produk yang
        mengubah pengalaman gaming. ASUS ROG Swift OLED PG42UQ adalah monitor
        gaming 42 inci yang menakjubkan dengan resolusi 4K dan refresh rate
        138Hz, menghadirkan visual yang luar biasa. Begitu juga dengan
        motherboard ROG MAXIMUS Z690 HERO yang menghadirkan dukungan DDR5, PCIe
        5.0, dan WiFi 6E untuk para penggemar gaming yang mencari kekuatan dan
        inovasi dalam basis motherboard yang kuat. Produk ROG terus mengukir
        reputasi sebagai pemimpin dalam industri perangkat keras gaming.
      </p>

      <div className="lg:flex px-7 pr-24 md:px-20 mt-[10%] justify-between items-center my-20">
        <h3 className="font-bold text-3xl md:text-5xl">
          Produk Serupa
          <br />
        </h3>
        <Link
          to="../../Product"
          className="hidden md:block text-2xl hover:text-indigo-700 duration-200"
        >
          more ➜
        </Link>
      </div>
      <div
        id="searchList"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  px-5  md:px-10 gap-x-2 lg:gap-x-10 gap-y-3 lg:gap-y-16 mt-5 md:mt-36"
      >
        {partialData1.map((Item, i) => {
          return (
            <Card
              key={i}
              id={Item.id}
              name={Item.name}
              des1={Item.des1}
              image={Item.image}
              harga={Item.harga}
            />
          );
        })}
      </div>
      <div className="lg:flex px-7 pr-24 md:px-20 mt-[10%] justify-between items-center my-20">
        <h3 className="font-bold text-3xl md:text-5xl">
          Produk Serupa
          <br />
        </h3>
        <Link
          to="../../Product"
          className="hidden md:block text-2xl hover:text-indigo-700 duration-200"
        >
          more ➜
        </Link>
      </div>
      <div
        id="searchList"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  px-5  md:px-10 gap-x-2 lg:gap-x-10 gap-y-3 lg:gap-y-16 mt-5 md:mt-36"
      >
        {partialData2.map((Item, i) => {
          return (
            <Card
              key={i}
              id={Item.id}
              name={Item.name}
              des1={Item.des1}
              image={Item.image}
              harga={Item.harga}
            />
          );
        })}
      </div>
    </>
  );
}
