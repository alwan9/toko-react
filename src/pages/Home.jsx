// gambar
import Laptop from "./../img/header1.png";
import Judul from "./../img/header2.png";
import { Icon } from "@iconify/react";
import banner from "./../img/banner.png";
import dta_product from "./../assets/data";
// laptop
import laptop1 from "./../img/product/laptop/ROG Flow X13 GV301RE.png";
import laptop2 from "./../img/product/laptop/ROG Zephyrus Duo 16 GX650RM.png";
import laptop3 from "./../img/product/laptop/ROG Strix G15 G512 G512LW.png";
import laptop4 from "./../img/product/laptop/ROG Strix G16 2023 G614JV.png";
import laptop5 from "./../img/product/laptop/ROG Zephyrus Duo 15 SE GX551QM.png";
import laptop6 from "./../img/product/laptop/ROG Zephyrus G14 GA401.png";

// components
import Navbar from "../components/navbar";
import Card from "../components/card";
import Footer from "../components/footer";

import Button from "../components/button";

function Home(params) {
  return (
    <>
      <Navbar />
      <header className="pt-[20%] md:pt-[10%] ">
        <div className="md:flex items-center">
          <img src={Laptop} className="w-[85%] md:w-[35%] " />
          <div className="ml-[7%]">
            <img src={Judul} className="mt-20 md1:mt-0  w-[80%] md1:w-[50%]" />
            <div className=" text-2xl md:text-3xl lg:text-5xl mt-5 w-[80%]">
              Worem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
      </header>

      <input
        className=" w-[90%] h-[50px] md:h-[70px]  md:text-2xl rounded-xl bg-blur px-5 md:px-10 m-[5%] "
        placeholder="Cari Produk..."
      />
      {/*  */}
      <div className="lg:flex px-7 md:px-20 mt-[10%] justify-between items-center my-20">
        <h3 className="font-bold text-5xl">Best Selling Product</h3>
        <a
          href="#"
          className="hidden md:block text-2xl hover:text-indigo-700 duration-200"
        >
          more ➜
        </a>
      </div>
      <div className="flex overflow-x-auto gap-x-5 w-[90%] ml-[5%] rounded-xl  py-5 md1:py-16   ">
        <Icon
          className="absolute z-[55] right-5 opacity-30"
          icon="teenyicons:right-outline"
          width="66"
          height="400"
        />

        {/* produk1 */}
        <Card
          alamat={laptop1}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        {/* produk1 */}
        <Card
          alamat={laptop2}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        {/* produk1 */}
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
      </div>

      <div className="flex px-7 md:px-20 mt-[15%] justify-between items-center my-20">
        <h3 className="font-bold text-4xl md:text-5xl">Asus Product</h3>
      </div>

      <div className="grid gap-2 md:gap-5 grid-cols-3 px-7 md:px-20 ">
        <div className="w-[100%] text-center text-2xl pt-[20%] font-bold  bg-indigo-800 hover:cursor-pointer h-[100px] md:h-[200px]">
          Laptop
        </div>
        <div className="w-[100%] text-center text-2xl pt-[20%] font-bold  bg-indigo-800 hover:cursor-pointer h-[100px] md:h-[200px]">
          Phone
        </div>
        <div className="w-[100%] text-center text-2xl pt-[20%] font-bold  bg-indigo-800 hover:cursor-pointer h-[100px] md:h-[200px]">
          Monitor
        </div>
      </div>
      <div className="grid gap-2 md:gap-5 grid-cols-4 mt-2 md:mt-10 px-7 md:px-20">
        <div className="w-[100%] text-center text-2xl pt-[20%] font-bold  bg-indigo-800 hover:cursor-pointer h-[100px] md:h-[200px]">
          Motherboard
        </div>
        <div className="w-[100%] text-center text-2xl pt-[20%] font-bold  bg-indigo-800 hover:cursor-pointer h-[100px] md:h-[200px]">
          fan
        </div>
        <div className="w-[100%] text-center text-2xl pt-[20%] font-bold  bg-indigo-800 hover:cursor-pointer h-[100px] md:h-[200px]">
          casing
        </div>
        <div className="w-[100%] text-center text-2xl pt-[20%] font-bold  bg-indigo-800 hover:cursor-pointer h-[100px] md:h-[200px]">
          Head phone
        </div>
      </div>
      <div className="w-full max-h-[400px]  bg-zinc-900 my-[20%] px-20 py-10 flex items-center">
        <img className="pb-[10%]" width={900} src={banner} />
        <div className=" ml-20 text-5xl">
          <div>
            <span className="font-bold ">Diskon 50%</span> dengan menggunakan
            metode pembayaran Cash di Asuss store Purwokerto
          </div>
          <div className="w-[300px] h-[5px] rounded-xl my-5 bg-indigo-600"></div>
          <Button />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
