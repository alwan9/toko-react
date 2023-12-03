import React from "react";
import Navbar from "./../components/navbar";
import Card from "./../components/card";
import Detail from "./../components/detail";
import data_product from "../assets/data";

export default function detail() {
  const partialData1 = data_product.slice(0, 5);
  const partialData2 = data_product.slice(20, 25);
  return (
    <>
      <Navbar />
      <Detail judul="" harga="" deskripsi="" />

      <div className="lg:flex px-7 pr-24 md:px-20 mt-[10%] justify-between items-center my-20">
        <h3 className="font-bold text-3xl md:text-5xl">
          Produk Serupa
          <br />
        </h3>
        <a
          href="#"
          className="hidden md:block text-2xl hover:text-indigo-700 duration-200"
        >
          more ➜
        </a>
      </div>
      <div
        id="searchList"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  px-5  md:px-10 gap-x-2 lg:gap-x-10 gap-y-3 lg:gap-y-16 mt-5 md:mt-36"
      >
        {partialData1.map((Item, i) => {
          return (
            <Card
              // goDetail={this.handleDetail}
              key={i}
              id={Item.id}
              name={Item.name}
              des={Item.des}
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
        <a
          href="#"
          className="hidden md:block text-2xl hover:text-indigo-700 duration-200"
        >
          more ➜
        </a>
      </div>
      <div
        id="searchList"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  px-5  md:px-10 gap-x-2 lg:gap-x-10 gap-y-3 lg:gap-y-16 mt-5 md:mt-36"
      >
        {partialData2.map((Item, i) => {
          return (
            <Card
              // goDetail={this.handleDetail}
              key={i}
              id={Item.id}
              name={Item.name}
              des={Item.des}
              image={Item.image}
              harga={Item.harga}
            />
          );
        })}
      </div>
    </>
  );
}
