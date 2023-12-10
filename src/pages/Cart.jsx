import Navbar from "../components/Navbar";
import data_product from "../assets/data";
import { useParams, Link } from "react-router-dom";
import Order from "../components/itemsOrder";

export default function Cart(params) {
  const { id } = useParams();

  // Mendapatkan data produk berdasarkan ID
  // const selectedProduct = data_product.find(
  //   (product) => product.id === parseInt(id)
  // );

  return (
    <>
      <div>
        <Navbar />
        <div className="text-3xl font-bold mt-10 px-7 md:px-16">Keranjang</div>
        <div className="grid mt-5 md:mt-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-7 md:px-16">
          <Order />
          <Order />
        </div>
        {/* bayar */}
        <div className="w-[100%] border-t-[2px] border-zinc-600 lg:flex justify-between items-center px-7 md:px-16 py-5  fixed bg-zinc-800 bottom-0">
          {/* total harga */}
          <div className=" md:mx-10">
            <div className="my-2 md:my-3 text-2xl text-yellow-500 font-bold ">
              Total Harga :
            </div>
            <div className="my-2 md:my-3 text-3xl font-bold">IDR 36,2 jt</div>
          </div>
          {/* promo */}
          <div className="md:mx-10 mt-10">
            <div className="my-2 md:my-3 text-2xl text-yellow-500 font-bold">
              Kode Promo :
            </div>
            <select
              className="my-2 md:my-3 w-[100%] md:w-[400px] h-[40px] bg-zinc-900 rounded-lg px-5 tetx-2xl"
              placeholder="pilih"
              name="promo"
              id="promo"
            >
              <option value="juj93rIO0fiwio">juj93rIO0fiwio</option>
              <option value="jnf920IJ9rk">jnf920IJ9rk</option>
            </select>
          </div>
          {/* button bayar */}
          <div>
            <Link
              to="/Profile"
              // onClick={() => handleNavLinkClick("/Cart")}
            >
              <button className="mt-10 md:mt-0 bg-zinc-200 hover:bg-indigo-800 border-[1px] border-transparent hover:border-zinc-500 hover:text-zinc-50 duration-300 rounded-lg  px-10 md:px-16 font-bold  md:text-2xl  py-2 md:py-3 text-zinc-950  ">
                Bayar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
