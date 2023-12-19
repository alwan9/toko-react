import React from "react";

export default function Profile(props) {
  return (
    <>
      {/* card */}
      <div className=" mt-[3%] md:mt-[15%]   px-4 py-2">
        <div className="bg-zinc-900 border-[1px] px-5  py-10  border-zinc-700 rounded-lg">
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
            </p>
            {/* <select className="text-zinc-50 w-[100%] h-[50px] bg-zinc-700 px-2 rounded-lg">
              <option>
                <img src={Gopay} />
                Gopay
              </option>
            </select> */}
          </div>
        </div>
      </div>
    </>
  );
}
