import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/icon/logo.png";

const Navlinks = [
  {
    href: "/home",
    icon: "icon",
    label: "Home",
  },
  {
    href: "/about",
    icon: "icon",
    label: "About",
  },
  {
    href: "/services",
    icon: "icon",
    label: "Services",
  },
  {
    href: "/packages",
    icon: "icon",
    label: "Internet Packages",
  },
  {
    href: "/contact",
    icon: "icon",
    label: "Contact",
  },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const openMobileMenu = () => setIsMobileMenuOpen(true);

  return (
    <div className="md:w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 mx-auto">
      <div className="flex items-center justify-between p-2 ">
        <div className="lg:hidden">
          <button
            onClick={openMobileMenu}
            className="whitespace-nowrap text-xl md:text-xl p-2.5 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 12v-1h9v1H1zm0-5h14v1H1V7zm11-4v1H1V3h11z"></path>
            </svg>
          </button>
        </div>

        <Link to="/" className="w-38 sm:w-18 md:w-28">
          <img src={logo} alt="" />
        </Link>

        <div className="hidden lg:flex items-center py-5">
          {Navlinks?.map((navlink) => (
            <Link
              to={navlink.href}
              key={navlink.label}
              className="mr-6 text-gray-800 text-base font-medium hover:text-lime-500 md:mr-4 lg:mr-5 xl:mr-6"
            >
              <span className="text-base">{navlink.label}</span>
            </Link>
          ))}
          <a
            href="https://www.facebook.com/bepari.prantosh.5/"
            target="_blank"
            rel="noopener"
            className="mr-6 text-gray-800 text-base font-medium hover:text-lime-500 md:mr-4 lg:mr-5 xl:mr-6"
          >
            Support
          </a>
        </div>

        <div className="flex items-center gap-1.5 md:gap-2.5">
          <button className="w-11 h-11 items-center justify-center flex text-2xl border border-gray-300 rounded-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="p-0.5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path>
            </svg>
          </button>
          <Link to="/login">
            <button className="whitespace-nowrap text-xl md:text-xl p-2.5 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 12v-1h9v1H1zm0-5h14v1H1V7zm11-4v1H1V3h11z"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 pointer-events-none -translate-x-10"
        } duration-300 z-50 absolute top-0 inset-x-0 p-2 transition transform lg:hidden`}
      >
        <div className="rounded-lg shadow-lg bg-white border divide-y">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="w-38 sm:w-18 md:w-28 relative flex gap-3 items-center"
              >
                <img src={logo} alt="" />
              </Link>
              {/* close mobile menu button */}
              <div className="-mr-0.5">
                <button
                  onClick={closeMobileMenu}
                  className="whitespace-nowrap text-xl md:text-xl p-3 flex gap-1.5 items-center justify-between rounded-full border hover:bg-gray-100  bg-transparent "
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-6">
              <nav className="grid gap-y-1">
                {Navlinks?.map((navlink) => (
                  <Link
                    to={navlink.href}
                    key={navlink.label}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100"
                  >
                    <p className="flex items-center gap-6 text-2xl">
                      {navlink.icon}
                      <span className="text-base">{navlink.label}</span>
                    </p>
                    {">"}
                  </Link>
                ))}
                <a
                  href="https://www.facebook.com/bepari.prantosh.5/"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100"
                >
                  <p className="flex items-center gap-6 text-2xl">
                    icon
                    <span className="text-base">Support</span>
                  </p>
                  {">"}
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
