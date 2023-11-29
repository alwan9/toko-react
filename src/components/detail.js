import Card from "./card";
import Produk1 from "../img/produk/laptop1.png";

export default function Detail(props) {
  return (
    <>
      <div className="p-20 flex items-center">
        <div className="w-[700px] h-[400px] bg-zinc-800"></div>
        <div className="pl-20">
          <div className="text-5xl font-bold">ROG Flow X16 GV601RE</div>
          <button
            class="w-[100%] h-[70px] text-2xl text-center border-[1px] duration-300 border-transparent hover:bg-transparent hover:border-white
            bg-zinc-600 px-36  mt-10"
            href="#"
          >
            Buy $1300
          </button>
          <button
            class="w-[100%] h-[70px] text-2xl text-center border-[1px] duration-300 hover:border-transparent hover:bg-zinc-600
             px-36  mt-5"
            href="#"
          >
            + Keranjang
          </button>
        </div>
      </div>

      <div className="px-20 text-2xl">
        Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit,
        <br />
        <br />
        sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
        enim egestas,
        <br />
        <br />
        ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac
        rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
        convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
      </div>
      <div className="text-right mt-20 px-20">More ➜ </div>
      <div className="grid-cols-4 gap-x-10 grid  items-center px-10 mt-5 mb-20 ">
        <Card
          alamat={Produk1}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        <Card
          alamat={Produk1}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        <Card
          alamat={Produk1}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
        <Card
          alamat={Produk1}
          judul="ROG Flow X16 GV601RE"
          deskripsi="
Laptop ROG menampilkan spesifikasi premium dengan prosesor canggih"
          harga="USD.1102$"
        />
      </div>
      <footer />
    </>
  );
}
