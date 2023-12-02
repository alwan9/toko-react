import React from "react";

const Card = (props) => {
  return (
    <div className="Item  bg-card rounded-tl-3xl rounded-br-3xl w-[100%]  md-[200px] min-w-[170px] md:min-w-[200px]  lg:min-w-[310px]   hover:scale-105 duration-200">
      <div className="Item bg-blur-card1 md:pt-10 pb-7  rounded-tl-3xl rounded-br-3xl">
        <a href="#">
          <img
            class="rounded-tl-3xl p-4 lg:px-10 w-full  "
            src={props.image}
            alt="produk"
          />
        </a>
      </div>
      <div class="px-1 p-5 md:px-3 pt-5">
        <a href="#">
          <h5 class="mb-2  text-base md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
        </a>
        <p class="mb-3 hidden lg:block text-base font-normal text-gray-700 dark:text-gray-400">
          {props.des}
        </p>
        <a
          href="../Detail"
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
};

export default Card;
