import React, { useState } from "react";
import Navbar from "./../components/Navbar";
import Judul from "./../img/judul1.png";
import Card from "./../components/Card";
import Footer from "./../components/Footer";
import { useNavigate } from "react-router-dom";
import data_product from "./../assets/data";
import Top from "../components/Btn-to-top";

export default function Produk() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = data_product.filter((Item) =>
    Item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/Detail/${id}`);
  };

  return (
    <>
      <Navbar />
      <header className="h-[250px] md:h-[500px] pt-16 md:pt-20 ">
        <img className="w-[100%] px-5 lg:px-36 mt-5 lg:mt-10" src={Judul} />
        <h1 className=" text-center hidden lg:block text-xl md:text-3xl font-light lg:text-3xl  lg:px-36">
          ASUS ROG menawarkan produk-produk terbaik dengan performa tinggi,
          inovasi canggih, dan desain yang memukau dalam dunia perangkat gaming.
        </h1>
        <input
          className="w-[80%] px-5  md:px-10 h-[50px] md:h-[70px] mx-[10%] rounded-2xl bg-blur text-white mt-7 md:text-2xl"
          placeholder="cari barang..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <Top />
      </header>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 px-5  md:px-10 gap-x-2 lg:gap-x-10 gap-y-3 lg:gap-y-16 mt-20 md:mt-36">
        {filteredProducts.map((Item, i) => {
          return (
            <Card
              goDetail={handleDetail}
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

      <Footer />
    </>
  );
}
