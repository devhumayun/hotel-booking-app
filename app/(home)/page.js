import Search from "@/components/search/Search";

export default function Home() {
  return (
    <section className=" bg-[#F6F3E9] h-screen max-h-screen relative grid place-items-center bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center bg-opacity-25">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container items-center pb-12 relative z-10">
        <div className="col-span-7">
          <h1 className="font-bold text-3xl lg:text-4xl my-4 text-center lg:w-8/12 mx-auto text-white">
            Escape to unforgettable experiences filled with heartfelt memories.
          </h1>
          <p className="my-2 text-[#FFFFFF] text-opacity-80 text-center">
            Discover 150 luxurious rooms across Indonesia, offering the elegance
            and comfort of 5-star accommodations.
          </p>
          <Search />
        </div>
      </div>
    </section>
  );
}
