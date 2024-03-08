import Navbar from "../components/Navbar";
import { useParams, Link } from "react-router-dom";
import Order from "../components/ItemsOrder";
import Bayar from "../components/Bayar";

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
        <Bayar />
      </div>
    </>
  );
}
