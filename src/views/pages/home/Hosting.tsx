import image1 from "../../../assets/img/home-2.png";

export const Hosting = () => {
  return (
    <div className="w-11/12 mx-auto py-20 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
      <div className="flex-none sm:flex">
        <div
          className="w-12/12 pr-4 sm:w-6/12"
          style={{ fontFamily: "Hind Siliguri, sans-serif" }}
        >
          <p className="text-left leading-8 mb-4">
            <b className="text-[32px] text-[#3AC162]">ওয়েব ডেভেলপমেন্ট</b>
            <br />
            <b className="text-[32px] text-[#F58634]">ওয়েব হোস্টিং</b>
          </p>
          <p className="mb-4 text-justify font-semibold text-[#454545]">
            আমরা এমন স্মার্ট ওয়েবসাইট তৈরি করি যা গ্রাহকদের দৃষ্টি আকর্ষণ করে।
            আমরা আপনাকে কাস্টম লোগো, কাস্টমাইজড ই-মেইল হেডার, কাস্টম লেআউট এবং
            শৈলী প্রদান করি, প্রতিটি লেআউট আমাদের ক্লায়েন্টের কোম্পানির ইচ্ছার
            আকারের সুযোগের জন্য উপযুক্ত হতে সাবধানতার সাথে তৈরি করা হয়েছে।
            আমাদের ডিজাইনার আপনার ব্যক্তিগত চাহিদা এবং বাজেটের পরামিতি শোনার এবং
            সাড়া দিয়ে শুরু করে। আমরা আপনার ব্যবসার প্রতিটি দিক শিখি এবং
            ডিজাইনের জন্য একটি শক্তিশালী কাঠামো হিসাবে সমস্ত সম্পর্কিত তথ্য
            ব্যবহার করি।
          </p>
          <div className="text-left font-semibold text-[#3AC162] hover:underline">
            <a href="/services">Learn More</a>
          </div>
        </div>
        <div className="w-8/12 mx-auto pr-4 sm:w-6/12 sm:order-first">
          <img className="-mt-6" src={image1} alt="" />
        </div>
      </div>
    </div>
  );
};
