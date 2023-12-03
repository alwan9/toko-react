// gambar
import Laptop from "./../img/header1.png";
import Judul from "./../img/header2.png";
import banner from "./../img/banner.png";
import data_product from "./../assets/data";

// components
import Navbar from "./../components/navbar";
import Card from "./../components/card";
import Footer from "./../components/footer";
import Button from "./../components/button";

function Home(params) {
  const partialData1 = data_product.slice(0, 5);
  const partialData2 = data_product.slice(5, 15);

  // const handleDetail = (id) => {
  //   this.props.history.push(`/Detail/${id}`);
  // };

  return (
    <>
      <Navbar />
      <header className="pt-[20%] md:pt-[10%] ">
        <div className="md:flex items-center">
          <img src={Laptop} className="w-[85%] md:w-[35%] " />
          <div className="ml-[7%]">
            <img src={Judul} className="mt-20 md1:mt-0  w-[80%] md1:w-[50%]" />
            <div className=" text-2xl md:text-3xl font-ligh lg:text-5xl mt-5 w-[80%]">
              Worem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
      </header>

      {/*  */}
      <div className="lg:flex px-7 pr-24 md:px-20 mt-[10%] justify-between items-center my-20">
        <h3 className="font-bold text-3xl md:text-5xl">
          Produk Teratas
          <br />
          <span className="text-xl  md:text-2xl font-light ">
            Produk yang kami rekomendasikan
          </span>
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
          Produk Unggulan
          <br />
          <span className="text-xl  md:text-2xl font-light">
            Produk unggulan yang telah dibeli lebih dari 400 pengguna
          </span>
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
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  px-5  md:px-10 gap-x-2 lg:gap-x-10 gap-y-3 lg:gap-y-16 mt-20 md:mt-36"
      >
        {partialData2.map((Item, i) => {
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

      {/* banner */}
      <div className="w-full md:max-h-[400px] mt-60  bg-zinc-900 my-[10%] px-20 py-10 md:flex items-center">
        <img className=" pb-[10%] w-[100%] md:w-[50%] " src={banner} />
        <div className=" md:ml-20 text-base sm:text-2xl md:text-4xl lg:text-5xl pb-[10%]">
          <div className="font-light text-center md:text-left md:mt-36">
            <span className="font-bold ">Diskon 50%</span> dengan menggunakan
            metode pembayaran Cash di Asuss store Purwokerto
          </div>
          <div className="w-[100%] md:w-[300px] h-[5px] rounded-xl my-5 bg-indigo-600"></div>
          <Button />
        </div>
      </div>

      {/* kategori */}

      <div className="flex px-7 md:px-20 mt-[7%] justify-between items-center my-20">
        <h3 className="font-bold text-4xl md:text-5xl">Asus Product</h3>
      </div>
      <div className="mb-[30%]">
        <div className="grid gap-2 md:gap-5 grid-cols-3 px-7 md:px-20  ">
          <div className="w-[100%]  duration-150 rounded-sm hover:scale-105 bg-kategori bg-laptop text-center text-sm md:text-2xl pt-[20%] font-bold  bg-zinc-800 hover:cursor-pointer h-[100px] md:h-[200px]">
            Laptop
          </div>
          <div className="w-[100%] duration-150 rounded-sm hover:scale-105 bg-kategori bg-mouse text-center text-sm md:text-2xl pt-[20%] font-bold  bg-zinc-800 hover:cursor-pointer h-[100px] md:h-[200px]">
            Mouse
          </div>
          <div className="w-[100%] duration-150 rounded-sm hover:scale-105 bg-kategori bg-monitor text-center text-sm md:text-2xl pt-[20%] font-bold  bg-zinc-800 hover:cursor-pointer h-[100px] md:h-[200px]">
            Monitor
          </div>
        </div>
        <div className="grid gap-2 md:gap-5 grid-cols-4 mt-2 md:mt-10 px-7 md:px-20">
          <div className="w-[100%] duration-150 rounded-sm hover:scale-105 bg-kategori bg-mothearboard text-center text-sm md:text-2xl pt-[20%] font-bold  bg-zinc-800 hover:cursor-pointer h-[100px] md:h-[200px]">
            Motherboard
          </div>
          <div className="w-[100%] duration-150 rounded-sm hover:scale-105 bg-kategori bg-fan text-center text-sm md:text-2xl pt-[20%] font-bold  bg-zinc-800 hover:cursor-pointer h-[100px] md:h-[200px]">
            fan
          </div>
          <div className="w-[100%] duration-150 rounded-sm hover:scale-105 bg-kategori bg-case text-center text-sm md:text-2xl pt-[20%] font-bold  bg-zinc-800 hover:cursor-pointer h-[100px] md:h-[200px]">
            casing
          </div>
          <div className="w-[100%] duration-150 rounded-sm hover:scale-105 bg-kategori bg-headphone text-center text-sm md:text-2xl pt-[20%] font-bold  bg-zinc-800 hover:cursor-pointer h-[100px] md:h-[200px]">
            Head phone
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
