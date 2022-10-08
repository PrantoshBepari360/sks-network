import { Link } from "react-router-dom";

export const Sme = () => {
  return (
    <div className="w-full">
      <div className="w-11/12 mx-auto py-20 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
        <div
          className="grid grid-cols-3 gap-4 sm:grid-cols-6 md:grid-cols-9"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          <div className="col-span-3 border text-white">
            <h3 className="p-5 font-medium bg-[#5fcf80] mb-5">
              SME-Regular
              <br />
              <span className="text-2xl font-bold text-black">20 Mbps</span>
            </h3>
            <h4 className="mb-5 text-4xl font-bold text-[#5fcf80]">
              <sup className="text-2xl font-semibold">৳</sup> 2,500{" "}
              <span className="text-xl font-normal text-[#bababa]">
                / month
              </span>
            </h4>
            <ul className="text-[#444444] text-sm leading-5">
              <li className="pb-3">20 Mbps Bandwidth</li>
              <li className="pb-3">Youtube</li>
              <li className="pb-3">Facebook</li>
              <li className="pb-3">BDIX</li>
              <li className="pb-3">FTP</li>
              <li className="pb-3">Real IP</li>
              <li className="pb-3">Unlimited Usages</li>
            </ul>
            <div className="p-8 font-medium bg-[#f8f8f8] mt-4">
              <Link to="/" className="py-2 px-8 bg-[#5fcf80] rounded-full">
                Signup
              </Link>
            </div>
          </div>
          <div className="col-span-3 border text-white relative overflow-hidden">
            <div className="absolute bg-[#f58634] w-40 ml-64 mt-7 rotate-45">
              <h1 className="-ml-6 ">Popular</h1>
            </div>
            <h3 className="p-5 font-medium bg-[#5fcf80] mb-5">
              SME-Power
              <br />
              <span className="text-2xl font-bold text-black">30 Mbps</span>
            </h3>
            <h4 className="mb-5 text-4xl font-bold text-[#5fcf80]">
              <sup className="text-2xl font-semibold">৳</sup> 3,000{" "}
              <span className="text-xl font-normal text-[#bababa]">
                / month
              </span>
            </h4>
            <ul className="text-[#444444] text-sm leading-5">
              <li className="pb-3">30 Mbps Bandwidth</li>
              <li className="pb-3">Youtube</li>
              <li className="pb-3">Facebook</li>
              <li className="pb-3">BDIX</li>
              <li className="pb-3">FTP</li>
              <li className="pb-3">Real IP</li>
              <li className="pb-3">Unlimited Usages</li>
            </ul>
            <div className="p-8 font-medium bg-[#f8f8f8] mt-4">
              <Link to="/" className="py-2 px-8 bg-[#5fcf80] rounded-full">
                Signup
              </Link>
            </div>
          </div>
          <div className="col-span-3 border text-white">
            <h3 className="p-5 font-medium bg-[#5fcf80] mb-5">
              SME-Premium
              <br />
              <span className="text-2xl font-bold text-black">40 Mbps</span>
            </h3>
            <h4 className="mb-5 text-4xl font-bold text-[#5fcf80]">
              <sup className="text-2xl font-semibold">৳</sup> 3,500{" "}
              <span className="text-xl font-normal text-[#bababa]">
                / month
              </span>
            </h4>
            <ul className="text-[#444444] text-sm leading-5">
              <li className="pb-3">40 Mbps Bandwidth</li>
              <li className="pb-3">Youtube</li>
              <li className="pb-3">Facebook</li>
              <li className="pb-3">BDIX</li>
              <li className="pb-3">FTP</li>
              <li className="pb-3">Real IP</li>
              <li className="pb-3">Unlimited Usages</li>
            </ul>
            <div className="p-8 font-medium bg-[#f8f8f8] mt-4">
              <Link to="/" className="py-2 px-8 bg-[#5fcf80] rounded-full">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
