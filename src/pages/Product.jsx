import React, { useState } from "react";
import Navbar from "../components/navbar";
import Judul from "../img/judul1.png";
import Card from "../components/card";
import Footer from "../components/footer";
import data_product from "../assets/data";

export default function Produk() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = data_product.filter((Item) =>
    Item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <Navbar />
      <header className="h-[250px] md:h-[500px] pt-16 md:pt-20 ">
        <img className="w-[100%] px-10 lg:px-36 mt-10 lg:mt-16" src={Judul} />
        <input
          className="w-[80%] px-5  md:px-10 h-[50px] md:h-[70px] mx-[10%] rounded-2xl bg-blur text-white  mt-10 md:text-2xl"
          placeholder="cari barang..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </header>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 px-5  md:px-10 gap-x-2 lg:gap-x-10 gap-y-3 lg:gap-y-16 mt-20 md:mt-36">
        {filteredProducts.map((Item, i) => {
          return (
            <Card
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

      <Footer />
    </>
  );
}
