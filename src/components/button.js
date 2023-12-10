import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <>
      <Link>
        <button className="mt-5 hidden md:block  border-[1px] rounded-xl duration-300 bg-zinc-700 hover:bg-zinc-900 border-opacity-70 text-base px-10 md:px-16 py-2 md:text-2xl">
          {" "}
          Buy now
        </button>
      </Link>
    </>
  );
}
