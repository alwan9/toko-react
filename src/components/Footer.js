import React from "react";
import { Icon } from "@iconify/react";
import Logo from "./../img/awh.png";

export default function Footer(props) {
  return (
    <>
      <footer className="w-full  mt-[10%] bg-zinc-800 px-7 md:px-20 py-10">
        <img src={Logo} className="h-[30px] lg:h-[50px]" />
        <div className="font-light text-base lg:text-3xl mt-5 w-[70%] py-10">
          website ini dibuat hanya semata mata untuk belajar membuat sebuah
          website sederhana menggunakan framework react js. tidak berniat untuk
          melakukan hal yang buruk terhadap brand tertentu.
          <br></br>
          <br></br>
          This website was created solely to learn to create a simple website
          using the React JS framework. does not intend to do anything bad to a
          particular brand.
        </div>
        <div className="flex items-center justify-between mt-10 bg-zinc-900 px-5 w-full py-5">
          <div className="font-light text-sm md:text-2xl">
            Design <span className="font-bold"> by alwan</span> | copyright 2023
          </div>
          <div className="flex ">
            <Icon className="mx-2 w-[20px] h-[20px]" icon="mdi:instagram" />
            <Icon className="mx-2 w-[20px] h-[20px]" icon="uil:facebook" />
            <Icon className="mx-2 w-[20px] h-[20px]" icon="uil:store" />
          </div>
        </div>
      </footer>
    </>
  );
}
