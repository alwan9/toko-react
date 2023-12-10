import React from "react";
import Profile from "./../components/Crd-prfl";
import Navbar from "../components/Navbar";
import Lokasi from "./../img/ep_location-information.png";
import Dompet from "./../img/fluent_payment-24-regular.png";
import Pesawat from "./../img/uil_plane-fly.png";

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
          <Profile image={Dompet} judul="Pilih Pembayaran" />
        </div>
      </div>
    </>
  );
}
