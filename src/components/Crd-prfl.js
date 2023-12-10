import React from "react";
import Gopay from "./../img/payment/gopay.png";
import Alfa from "./../img/payment/alfa.png";
import Indo from "./../img/payment/indo.png";
import Spay from "./../img/payment/spay.png";
import Ovo from "./../img/payment/ovo.png";
import Bri from "./../img/payment/bri.png";

export default function Profile(props) {
  return (
    <>
      {/* card */}
      <div className=" mt-[3%] md:mt-[15%]  md:mx-[2%] px-4 py-2">
        <div className="bg-zinc-900 border-[1px] px-5  py-3  border-zinc-700 rounded-lg">
          <div className="flex items-center">
            <img src={props.image} />
            <div className="font-bold ml-4 text-2xl">{props.judul}</div>
          </div>
          <div className="mt-7">
            <p className="mt-4">
              <div className="my-2 text-lg font-bold"> {props.j1}</div>
              <div className="my-2 text-zinc-400"> {props.b1}</div>
              <div className="my-2 text-lg font-bold"> {props.j2}</div>
              <div className="my-2 text-zinc-400"> {props.b2}</div>
              <div className="my-2 text-zinc-400"> {props.b3}</div>
              <select>
                <option>
                  <img src={Gopay} />
                  Gopay
                </option>
              </select>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
