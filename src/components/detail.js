import Card from "./card";

export default function Detail(props) {
  return (
    <>
      <div className="lg:p-20 grid lg:grid-cols-2 items-center">
        <div className="w-[100%] h-[400px] bg-zinc-800">
          <img src="" />
        </div>
        <div className="lg:pl-20 px-7">
          <h3 className="text-3xl mt-10 lg:mt-0 text-center lg:text-left lg:text-5xl font-bold">
            ROG Flow X16 GV601RE
          </h3>
          <button
            class="w-[100%] h-[70px] text-2xl text-center border-[1px] duration-300 border-transparent hover:bg-transparent hover:border-white
              bg-zinc-600   mt-10"
            href="#"
          >
            Buy $1300
          </button>
          <button
            class="w-[100%] h-[70px] text-2xl text-center border-[1px] duration-300 hover:border-transparent hover:bg-zinc-600
                mt-5"
            href="#"
          >
            + Keranjang
          </button>
        </div>
      </div>

      <p className="px-7 lg:px-20 mt-10 lg:mt-0 text-base md:text-2xl">
        Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit,
        <br />
        <br />
        sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
        enim egestas,
        <br />
        <br />
        ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac
        rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
        convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
      </p>

      <footer />
    </>
  );
}
