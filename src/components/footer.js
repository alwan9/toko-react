import React from "react";
import { Icon } from "@iconify/react";
import Logo from "./../img/awh.png";

function Footer(props) {
  return (
    <>
      <footer className="w-full h-[300px] text-2xl mt-[10%] bg-zinc-800 px-7 md:px-20 py-10">
        <img src={Logo} className="h-[50px]" />
        <div>
          Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem
        </div>
        <div className="flex items-center justify-between mt-10">
          <div>Design by alwan | copyright 2023</div>
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
