import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full bg-gray-900">
      <div className="w-11/12 mx-auto py-10 lg:py-20 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 text-white text-left">
        <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col px-3">
            <p className="mb-4">Services</p>
            <hr className="mb-2" />
            <Link to="/services" className="mb-2 hover:underline">
              Internet service
            </Link>
            <Link to="/services" className="mb-2 hover:underline">
              Web Development
            </Link>
            <Link to="/services" className="mb-2 hover:underline">
              Hosting
            </Link>
          </div>
          <div className="flex flex-col px-3">
            <p className="mb-4">Internet Packages</p>
            <hr className="mb-2" />
            <Link to="/pricing2" className="mb-2 hover:underline">
              SME
            </Link>
            <Link to="/pricing" className="mb-2 hover:underline">
              Corporate
            </Link>
            <Link to="/pricing4" className="mb-2 hover:underline">
              এক দেশ এক রেট
            </Link>
          </div>
          <div className="flex flex-col px-3">
            <p className="mb-4">Corporate Office</p>
            <hr className="mb-2" />
            <p className="mb-2">Dhamusa, Dasar, Madaripur,</p>
            <p className="mb-2">Dhaka, Bangladesh-7900</p>
            <a className="mb-2 flex items-center" href="tel:+8801518331287">
              <i className="fa-solid fa-phone mr-2"></i>{" "}
              <span className="hover:underline">+880 1518-331287</span>
            </a>
          </div>
          <div className="flex flex-col px-3">
            <p className="mb-4">Contuct</p>
            <hr className="mb-2" />
            <a className="mb-2 flex items-center" href="tel:+8801833078059">
              <i className="fa-solid fa-phone fa-shake mr-2"></i>
              <span className="hover:underline">+880 1833-078059</span>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=8801833078059"
              className="mb-2 flex items-center"
            >
              <i className="fa-brands fa-whatsapp mr-2 "></i>
              <span className="hover:underline">+880 1833-078059</span>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:bepariprantosh360@gmail.com?subject=Mail for SKS Network."
              className="mb-2 flex items-center"
            >
              <i className="fa-solid fa-envelope mr-2"></i>
              <span className="hover:underline">
                bepariprantosh360@gmail.com
              </span>
            </a>
          </div>
        </div>
        <div className="px-3 pt-5 pb-12">
          <div className="flex-none lg:flex">
            <p>
              Copyright © 2022{" "}
              <span className="font-medium text-amber-500">
                Sks Network Systems Limited.
              </span>{" "}
              All Rights Reserved
            </p>
            {/* <div className="ml-auto mt-8 flex justify-center lg:mt-0">
              <div className="flex">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://web.whatsapp.com/"
                  className="mr-3 w-10 h-10 flex justify-center items-center rounded bg-[#0D99FF]"
                >
                  <i className="fa-brands fa-whatsapp fa-2xl"></i>
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/bepari.prantosh.5/"
                  className="w-10 h-10 flex justify-center items-center rounded bg-[#0D99FF]"
                >
                  <i className="fa-brands fa-facebook fa-2xl"></i>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
