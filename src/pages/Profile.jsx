import React from "react";
import Profile from "./../components/Crd-prfl";
import Navbar from "../components/Navbar";
import Lokasi from "./../img/ep_location-information.png";
import Dompet from "./../img/fluent_payment-24-regular.png";
import Pesawat from "./../img/uil_plane-fly.png";
import Paymen from "./../img/payment/paymen.png";
import Bayar from "../components/Bayar";

// bayar
import Gopay from "./../img/payment/gopay.png";
import Alfa from "./../img/payment/alfa.png";
import Indo from "./../img/payment/indo.png";
import Spay from "./../img/payment/spay.png";
import Ovo from "./../img/payment/ovo.png";
import Bri from "./../img/payment/bri.png";

export default function Profil() {
  return (
    <>
      <div>
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-16 ">
          <Profile
            image={Lokasi}
            judul="Lokasi Penerima"
            j1="Nama penerima"
            b1="Natan Fahreza | (+62)882-0123-1333"
            j2="Lokasi"
            b2="Rumah cat Crem lantai hitam, rumah 34 sebelah Masjid"
            b3="kode Pos 51832, RT. 05, rW. 02 Desa kebanggan, kecamatan Baturaden
              Kabupaten banyumas, prov. Jawa Tengah"
          />
          <Profile
            image={Pesawat}
            judul="Pengiriman"
            j1="Asus Express "
            b1="estimasi tiba 9 Des -  13 des"
            j2="Kode Paket"
            b2="Kurir Agus Prayoga  |  no 9312-4874-2242"
          />

          <div className=" mt-[3%] md:mt-[15%]  px-4 py-2 mb-[80%] md:mb-[0%]">
            <div className="bg-zinc-900 border-[1px] px-5  py-10  border-zinc-700 rounded-lg">
              <div className="flex items-center">
                <img src={Dompet} />
                <div className="font-bold ml-4 text-2xl">Pilih Pembayaran</div>
              </div>
              {/* paymen */}
              <img className="mt-10 " src={Paymen} alt="" />
              {/* paymenr option */}
              <div className="mt-7">
                <select
                  name="ewallet"
                  id="ewallet"
                  className="text-zinc-50 w-[100%] h-[50px] bg-zinc-700 px-5 rounded-lg"
                >
                  <option value="Gopay">Gopay</option>
                  <option value="Spay">Shopeepay</option>
                  <option value="BRI">BRI</option>
                  <option value="Mandiri">Mandiri</option>
                  <option value="BCA">BCA</option>
                  <option value="bri">bri</option>
                </select>
              </div>
              <div className="flex items-center mt-5 ">
                <input className="mr-2" type="checkbox" name="" id="" />{" "}
                <label className="text-sm text-zinc-400">
                  Saya Menyetujui syarat dan ketentuan
                </label>
              </div>
            </div>
          </div>
        </div>

        <Bayar />
        {/* <footer className="fixed bottom-0 bg-zinc-800 w-[100%] ">
          <button className=" mt-10 md:mt-0 bg-zinc-200 hover:bg-indigo-800 border-[1px] border-transparent hover:border-zinc-500 hover:text-zinc-50 duration-300 rounded-lg  px-10 md:px-16 font-bold  md:text-2xl  py-2 md:py-3 text-zinc-950  ">
            Bayar
          </button>
        </footer> */}
      </div>
    </>
  );
}
