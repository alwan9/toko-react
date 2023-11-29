import React from "react";
import Navbar from "../components/navbar";
import Judul from "../img/judul1.png";
import Card from "../components/card";
import Footer from "../components/footer";

// laptop
import laptop1 from "./../img/product/laptop/ROG Flow X13 GV301RE.png";
import laptop2 from "./../img/product/laptop/ROG Flow X13 GV302XI-R947G6T-O.png";
import laptop3 from "./../img/product/laptop/ROG Strix G15 G512 G512LW.png";
import laptop4 from "./../img/product/laptop/ROG Strix G16 2023 G614JV.png";
import laptop5 from "./../img/product/laptop/ROG Zephyrus Duo 15 SE GX551QM.png";
import laptop6 from "./../img/product/laptop/ROG Zephyrus G14 GA401.png";

export default function Produk() {
  return (
    <>
      <Navbar />
      <header className="h-[250px] md:h-[500px] pt-16 md:pt-20 ">
        <img className="" src={Judul} alt="" />
        <input
          className="w-[80%] px-5  md:px-10 h-[50px] md:h-[70px] mx-[10%] rounded-2xl bg-blur text-white  mt-10 md:text-2xl"
          placeholder="cari barang..."
        />
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-4 px-5  md:px-10 gap-x-2 md:gap-x-10 gap-y-3 md:gap-y-16 mt-20 md:mt-36 ">
        {/* produk2 */}
        <Card
          alamat={laptop1}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        {/* produk2 */}
        <Card
          alamat={laptop2}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        {/* produk2 */}
        <Card
          alamat={laptop3}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        {/* produk2 */}
        <Card
          alamat={laptop4}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        {/* produk2 */}
        <Card
          alamat={laptop5}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        {/* produk2 */}
        <Card
          alamat={laptop6}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        {/* produk2 */}
        <Card
          alamat={laptop3}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        {/* produk2 */}
        <Card
          alamat={laptop2}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        {/* produk2 */}
        <Card
          alamat={laptop1}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
      </div>
      <Footer />
    </>
  );
}
