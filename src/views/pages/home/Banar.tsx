import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Banar = () => {
  return (
    <div className="w-11/12 mx-auto py-20 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 text-white text-left leading-tight pt-48 lg:pt-72">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="pb-10">
            <h1
              className="text-3xl font-bold leading-tight mb-2 sm:text-5xl"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Ready To Connect,
              <br />
              Your New Internet
            </h1>
            <h2
              className="mb-10 text-xl sm:text-2xl"
              style={{
                fontFamily: "Raleway, sans-serif",
              }}
            >
              We are team of IT experts making your connection smoother &amp;
              faster
            </h2>
            <a
              href="/all"
              className="px-8 py-3 border-2 border-white rounded-full transition hover:bg-lime-500 hover:border-lime-500 text-lg"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Get Started
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pb-10">
            <h1
              className="text-3xl font-bold leading-tight mb-2 sm:text-5xl"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Ready To Connect,
              <br />
              Your New Internet
            </h1>
            <h2
              className="mb-10 text-xl sm:text-2xl"
              style={{
                fontFamily: "Raleway, sans-serif",
              }}
            >
              We are team of IT experts making your connection smoother &amp;
              faster
            </h2>
            <a
              href="/pricing4"
              className="px-8 py-3 border-2 border-white rounded-full transition hover:bg-lime-500 hover:border-lime-500 text-lg"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Get Started
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
