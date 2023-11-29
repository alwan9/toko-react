import React from "react";

function Card(props) {
  return (
    <div class=" px-1 md:px-3 pt-5 md:pt-10 bg-card rounded-tl-3xl rounded-br-3xl w-[100%]  min-w-[180px] md:min-w-[250px] lg:min-w-[350px] hover:scale-105 duration-200">
      <a href="#">
        <img class="rounded-t-lg px-10" src={props.alamat} alt="produk" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.judul}
          </h5>
        </a>
        <p class="mb-3  text-base font-normal text-gray-700 dark:text-gray-400">
          {props.deskripsi}
        </p>
        <a
          href="#"
          class="inline-flex   right-0 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Buy {props.harga}
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
        </a>
      </div>
    </div>
  );
}

export default Card;
