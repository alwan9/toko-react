import React from "react";
import Navbar from "./../components/navbar";
import Card from "./../components/card";
import Detail from "./../components/detail";
import produk1 from "./../img/product/laptop/ROG Flow X13 GV302XI-R947G6T-O.png";
import produk2 from "./../img/product/laptop/ROG Strix G15 G512 G512LW.png";
import produk3 from "./../img/product/laptop/ROG Zephyrus Duo 15 SE GX551QM.png";
import produk4 from "./../img/product/laptop/ROG Zephyrus G14 GA401.png";
import produk5 from "./../img/product/laptop/ROG Flow X13 GV301RE.png";
import produk6 from "./../img/product/monitor/ASUS ROG Strix XGUQ.png";
import produk7 from "./../img/product/motherboard/ROG MAXIMUS Z690 HERO.png";
import produk8 from "./../img/product/motherboard/ROG STRIX B760-F GAMING WIFI Intel B760 LGA 1700 ATX Motherboard.png";
import produk9 from "./../img/product/motherboard/ROG Maximus Xi Hero z390.png";

export default function detail() {
  return (
    <>
      <Navbar />
      <Detail judul="" harga="" deskripsi="" />

      <div className="flex items-center justify-between px-20 mt-20 mb-16">
        <div className="text-6xl font-bold">Produk Serupa</div>
        <a href="./Product">
          <div className="text-right text-2xl">More ➜ </div>
        </a>
      </div>
      <div className="grid-cols-5 gap-x-10 grid  items-center px-10 mt-5 mb-20 ">
        <Card
          alamat={produk1}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        <Card
          alamat={produk6}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        <Card
          alamat={produk3}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        <Card
          alamat={produk4}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        <Card
          alamat={produk5}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
      </div>
      <div className="grid-cols-5 gap-x-10 grid  items-center px-10 mt-5 mb-20 ">
        <Card
          alamat={produk8}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        <Card
          alamat={produk2}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        <Card
          alamat={produk9}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        <Card
          alamat={produk4}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        <Card
          alamat={produk7}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
      </div>
    </>
  );
}
