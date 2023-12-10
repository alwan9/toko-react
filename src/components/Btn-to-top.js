import top from "./../img/icon-park_to-top.png";

export default function btnToTop(params) {
  return (
    <>
      <a href="#top">
        <div className=" hover:bg-zinc-100 duration-300 rounded-full z-[999] fixed bottom-0 right-0 w-[50px] h-[50px] md:w-[65px] md:h-[65px] shadow-2xl p-2 md:p-3 m-7 bg-blur">
          <img src={top} />
        </div>
      </a>
    </>
  );
}
