import React from "react";
import { Icon } from "@iconify/react";
import Logo from "./../img/awh.png";

function Footer(props) {
  return (
    <>
      <footer className="w-full h-[300px]  mt-[10%] bg-zinc-800 px-7 md:px-20 py-10">
        <img src={Logo} className="h-[30px] lg:h-[50px]" />
        <div className="font-light text-base lg:text-3xl mt-5 w-[70%]">
          Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem
        </div>
        <div className="flex items-center justify-between mt-10">
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

export default Footer;
