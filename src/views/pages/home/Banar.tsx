import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Banar = () => {
  return (
    <div className="w-7/12 mx-auto text-white text-left leading-tight pt-72">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="pb-10">
            <h1
              className="text-5xl font-bold leading-tight mb-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Ready To Connect,
              <br />
              Your New Internet
            </h1>
            <h2
              className="mb-10"
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: "24px",
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
        <SwiperSlide>
          <div className="pb-10">
            <h1
              className="text-5xl font-bold leading-tight mb-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Ready To Connect,
              <br />
              Your New Internet
            </h1>
            <h2
              className="mb-10"
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: "24px",
              }}
            >
              We are team of IT experts making your connection smoother &amp;
              faster
            </h2>
            <a
              href="/pricing3"
              className="px-8 py-3 border-2 border-white rounded-full hover:bg-lime-500 hover:border-lime-500 text-lg"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Get Started
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pb-10">
            <h1
              className="text-5xl font-bold leading-tight mb-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Ready To Connect,
              <br />
              Your New Internet
            </h1>
            <h2
              className="mb-10"
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: "24px",
              }}
            >
              We are team of IT experts making your connection smoother &amp;
              faster
            </h2>
            <a
              href="/pricing2"
              className="px-8 py-3 border-2 border-white rounded-full hover:bg-lime-500 hover:border-lime-500 text-lg"
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
