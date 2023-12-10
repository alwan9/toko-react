import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <>
      <div className="Item bg-card rounded-tl-3xl rounded-br-3xl w-[100%]  md-[200px] min-w-[170px] md:min-w-[200px]  lg:min-w-[310px]   hover:scale-105 duration-200">
        <div className="Item bg-blur-card1 md:pt-10 pb-7  rounded-tl-3xl rounded-br-3xl">
          <Link>
            <img
              class="rounded-tl-3xl relative  p-4 lg:px-10 w-full  z-[55]"
              src={props.image}
              alt="produk"
            />
          </Link>
          <div className="grid place-items-center">
            <div className="bg-zinc-200 blur-2xl z-[44] opacity-50 top-6 absolute  rounded-full w-[75%] flex justify-center h-[75%]"></div>
          </div>
        </div>

        <div
          onClick={() => {
            props.goDetail(props.id);
          }}
          class="px-3 p-5 md:px-3 pt-5"
        >
          <Link>
            <h5 class="mb-2  text-base md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.name}
            </h5>
          </Link>
          <p class="mb-10 md:mb-4 text-xs md:text-base font-normal text-gray-700 dark:text-gray-400">
            {props.des1}
          </p>
          <Link
            to="../Detail"
            class="absolute text-base md:text-2xl  md:relative right-0 bottom-0 flex md:justify-end  rounded-2xl item-center  items-center px-5 py-4  font-medium text-center text-blue-400 focus:ring-4"
          >
            {props.harga}
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
