import React from "react";
import error from "./../img/error.png";
import { Link } from "react-router-dom";

export default function notFound() {
  return (
    <>
      <div className="mt-[50%] lg:mt-[10%] px-16 ">
        <img className="w-[100%] px-24  lg:px-[42%]" src={error} />
        <div className="text-center">
          <h2 className=" mt-10 font-bold text-3xl">Halaman tidak ditemukan</h2>
          <p>
            website dalam masa ujicoba, dan sedang diperbaiki. Mohon maaf atas
            jika terdapat error
          </p>
          <br />
          <Link className=" font-bold text-blue-700" to="./../store/">
            ⋙ Klik Untuk Kembali ⋘
          </Link>
        </div>
      </div>
    </>
  );
}
