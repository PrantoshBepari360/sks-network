import { Footer } from "../common/Footer";
import { Header } from "../common/Header";
import image1 from "../../../assets/img/Profile.jpg";
import support from "../../../assets/img/Support.png";
import { Typewriter } from "react-simple-typewriter";
import { FormLink } from "../internet/RouteMix/FormLink";

export const Support = () => {
  return (
    <div className="w-full bg-gray-800 text-black">
      <div className="w-full bg-white fixed z-[100] drop-shadow-[0_1px_5px_rgba(193,193,193,0.3)]">
        <Header></Header>
      </div>

      <div
        className="bg-[#6D28D9] pt-20 md:pt-44 lg:pt-20"
        style={{ fontFamily: "Hind Siliguri, sans-serif" }}
      >
        <p className="pt-10 text-[40px] text-[#e3e3e3]">
          <b>ইন্টারনেট ইন্সট্রাক্টর</b>
        </p>
        <div className="w-11/12 mx-auto py-28 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
          <div className="flex flex-col-reverse gap-10 lg:flex-row lg:gap-5">
            <div className="lg:order-last flex w-full flex-col justify-center space-y-8 text-left">
              <p className="text-left leading-none mb-4">
                <b
                  className="text-[40px] text-[#e3e3e3]"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  Prantosh Bepari
                </b>
                <br />
                <b className="text-[40px] text-[#e3e3e3]">
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    <Typewriter
                      words={["Web Designer", "Web Developer", "Programmer"]}
                      loop={true}
                      cursor
                      cursorStyle="..."
                      typeSpeed={80}
                      deleteSpeed={60}
                      delaySpeed={1000}
                    />
                  </span>
                </b>
              </p>
              <p className="text-justify mb-4 font-semibold text-[#e3e3e3]">
                হ্যালো!! আমি প্রানতোষ বেপারী, একজন জুনিয়র ফুল স্ট্যাক ওয়েব
                ডেভেলপার এবং ওয়েব ডেভেলপমেন্টের প্রতি অনুরাগী। আমি ওয়েব
                অ্যাপস, মোবাইল অ্যাপস এবং ডেস্কটপ অ্যাপস ডেভেলপ করি। আমার মূল
                দক্ষতা জাভাস্ক্রিপ্টের উপর ভিত্তি করে এবং আমি জাভাস্ক্রিপ্ট
                ব্যবহার করে বেশিরভাগ জিনিস করতে পছন্দ করি। আমি ওয়েবকে বিশ্বের
                কাছে আরও উন্মুক্ত করতে ভালোবাসি। আমি আমার আগ্রহের জন্য উপযুক্ত
                যে কোনো ধরনের কাজের সুযোগের জন্য উপলব্ধ।
              </p>
              <div className="text-left font-semibold text-[#3AC162] hover:underline">
                <a
                  href="https://prantosh.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  আরও জানুন{" "}
                </a>
              </div>
            </div>
            <div className="flex w-full flex-col justify-center space-y-8">
              <div className="relative w-full text-center sm:order-first border-r-2">
                <div className="mx-auto rounded-lg border-4 h-[360px] w-[280px] bg-[#8E6AC8]"></div>
                <div className="absolute right-[30%] bottom-10 mx-auto rounded-lg border-4 -rotate-6 transform bg-[#8E6AC8] h-[350px] w-[280px] overflow-hidden">
                  <img src={image1} alt="Prantosh Bepari" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-white"
        style={{ fontFamily: "Hind Siliguri, sans-serif" }}
      >
        <div className="mt-16">
          <FormLink></FormLink>
        </div>
        <div className="w-11/12 mx-auto py-28 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
          <div className="flex flex-col-reverse gap-10 lg:flex-row lg:gap-5">
            <div className="flex w-full flex-col justify-center space-y-8 text-left">
              <h1 className="text-3xl font-bold">
                সার্বক্ষণিক সহায়তার জন্য থাকছে <br />{" "}
                <span className="text-sky-400">ফেসবুক</span> সাপোর্ট চ্যানেল
              </h1>
              <p className="text-[#e3e3e3] text-base font-medium text-justify">
                এই ইন্টারনেট ‍সাপোর্ট এর জন্য আমরা একটি{" "}
                <span className="text-sky-400/75 hover:text-sky-400 font-medium">
                  প্রাইভেট ফেসবুক সাপোর্ট চ্যানেল
                </span>{" "}
                তৈরী করেছি যেখানে ইন্টারনেট ইন্সট্রাক্টর প্রানতোষ বেপারী সহ আরো
                2-3 জন ইন্টারনেট সংযোগকারী সরাসরি আপনাদের বিভিন্ন প্রশ্নের উত্তর
                দিবেন। আমরা অঙ্গীকার করছি সর্বোচ্চ ২৪ ঘণ্টার মধ্যে আপনাদের
                প্রশ্নের উত্তর দিতে পারবো। তবে অধিকাংশ ক্ষেত্রে তার চেয়েও কম
                সময়ে আপনারা উত্তর পেয়ে যাবেন। এছাড়া প্রতিদিন সকাল ৯টা থেকে বিকাল
                ৪টা পর্যন্ত অফিস থোলা থাকবে যেখানে আপনারা সরাসরি প্রশ্ন করে
                উত্তর পেতে পারবেন।
              </p>
              <div className="mx-auto flex flex-col gap-4 md:flex-row lg:mx-0">
                <a
                  className="text-white"
                  type="button"
                  href="https://www.facebook.com/bepari.prantosh.5/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex gap-2 py-2 px-5 rounded-full bg-sky-500 hover:bg-sky-400">
                    <span className="">
                      <i className="fa-brands fa-facebook fa-xl"></i>
                    </span>
                    <span className=" ">সাপোর্ট চ্যানেল</span>
                  </div>
                </a>
                <a className="" type="button" href="tel:+8801518331287">
                  <div className="flex gap-2 py-2 px-5 rounded-full bg-slate-500 hover:bg-slate-400">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path>
                    </svg>
                    <span className="">সাপোর্ট সেন্টারে কল করুন</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex w-full flex-col justify-center space-y-8">
              <div className="mx-auto">
                <img src={support} alt="Support"></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};
