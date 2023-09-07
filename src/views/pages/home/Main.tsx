import image from "../../../assets/img/Sksn.jpg";
import image1 from "../../../assets/img/home-1.png";

export const Main = () => {
  return (
    <div className="w-11/12 mx-auto py-20 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
      <div
        className="text-left pt-10"
        style={{ fontFamily: "Hind Siliguri, sans-serif" }}
      >
        <h1 className="text-3xl">
          স্বাগতম এসকেএস নেটওয়ার্ক সিস্টেম লিমিটেড (SKS নেটওয়ার্ক)
        </h1>
        <p className="text-3xl flex justify-center md:justify-start">
          <p className="text-[#3AC162] mr-3">2 বছর</p>
          <p className="text-[#F58634]">অভিজ্ঞতা</p>
        </p>
      </div>

      <div className="flex-none sm:flex">
        <div
          className="w-12/12 text-justify pr-4 sm:w-6/12 font-semibold text-[#454545]"
          style={{ fontFamily: "Hind Siliguri, sans-serif" }}
        >
          <p className="pt-5">
            10 এর দশকের শেষের দিকে ফাইবার অ্যাট হোম ব্যবস্থার সাথে তাল মিলিয়ে,
            SKS মাদারীপুর শহরে ইন্টারনেট সংযোগ ছড়িয়ে দেওয়ার পথ তৈরি করে এবং
            ব্রডব্যান্ডের পূর্বসূচীর সাথে সংঘটিত হয়ে উচ্চ ব্যবসায়িক প্রতিচ্ছবি
            থাকার কারণে, SKS তার সংযোগের বিধানকে 2022 সালের দিকে ব্রডব্যান্ডে
            রূপান্তরিত করেছে।
          </p>
          <p className="pt-3">
            SKS হল একটি ইন্টারনেট পণ্য কোম্পানি যা আইটি পরিষেবা এবং সমাধান
            দ্বারা সমর্থিত। আমরা 'গ্রাহকদের প্রয়োজন মূল্যায়ন'-এ শ্রেষ্ঠত্বের
            সাথে আইটি দক্ষতার সাথে একটি দল এবং গ্রাহকদের প্রত্যাশাকে অতিক্রম
            করার পাশাপাশি পূরণ করার চেষ্টা করি। 2020 সালে প্রতিষ্ঠার পর থেকে,
            Sks ধারাবাহিকভাবে টেকসই গ্রাহক সম্পর্ক তৈরি করেছে।
          </p>
          <p className="pt-3">
            উপলব্ধ সবচেয়ে উন্নত এবং নির্ভরযোগ্য সরঞ্জাম ব্যবহার করে দ্রুততম
            ইন্টারনেট সংযোগ সহ গ্রাহকদের তথ্য সুপারহাইওয়েতে রাখার লক্ষ্যে SKS
            প্রতিষ্ঠিত হয়েছিল। এর সাথে একত্রিত হয়ে, এবং এই বিশেষ সেক্টরে
            পরিষেবার বিধানের কম্পার্টমেন্টেড সাধারণ ক্ষেত্র সম্প্রসারণের জন্য,
            SKS জুলাই 2020 এ SEA-ME-WE-4 সাবমেরিন অপটিক্যাল ফাইবার নেটওয়ার্কে
            নথিভুক্ত হয়েছে।
          </p>
          <div className="flex justify-center mt-12">
            <img src={image} alt="Company logo" />
          </div>
        </div>
        <div className="hidden w-6/12 pl-4 sm:block">
          <img src={image1} className="-mt-6" alt="Service logo" />
        </div>
      </div>
    </div>
  );
};
