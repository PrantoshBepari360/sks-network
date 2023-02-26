import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/icon/logo.png";
import { LoginModel } from "../loginModels/LoginModel";
import { useAuth } from "./../../components/useProvider/useAuth";

const Navlinks = [
  {
    href: "/home",
    icon: <i className="fa-solid fa-house-user" />,
    label: "Home",
  },
  {
    href: "/about",
    icon: <i className="fa-solid fa-address-card" />,
    label: "About",
  },
  {
    href: "/services",
    icon: <i className="fa-brands fa-servicestack" />,
    label: "Services",
  },
  {
    href: "/packages",
    icon: <i className="fa-solid fa-wifi" />,
    label: "Internet Packages",
  },
  {
    href: "/contact",
    icon: <i className="fa-solid fa-address-book" />,
    label: "Contact",
  },
  {
    href: "/support",
    icon: <i className="fa-solid fa-address-book" />,
    label: "Support",
  },
  {
    href: "http://smartbox.digital/jwtv1/index.php",
    target: "_blank",
    icon: <i className="fa-solid fa-address-book" />,
    label: "Live-Tv",
  },
  {
    href: "http://www.metromedia.digital",
    target: "_blank",
    icon: <i className="fa-solid fa-address-book" />,
    label: "Ftv",
  },
];

export const Header = () => {
  const { user, logOut, setIsLoginOpen } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const [lightMode, setLightMode] = useState(false);
  const toggleDarkMode = () => setLightMode(true);
  const toggleLiteMode = () => setLightMode(false);

  return (
    <>
      <LoginModel />
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

          <Link to="/" className="w-38 sm:w-18 md:w-28 mr-2 lg:hidden xl:block">
            <img src={logo} alt="" />
          </Link>

          <div className="hidden lg:flex items-center py-5">
            {Navlinks?.map((navlink) => (
              <Link
                to={navlink.href}
                target={navlink.target}
                key={navlink.label}
                className="mr-6 text-gray-800 text-base font-medium hover:text-lime-500 md:mr-4 lg:mr-5 xl:mr-6"
              >
                <span className="text-base">{navlink.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1.5 md:gap-2.5">
            <button className="">
              {lightMode ? (
                <img
                  onClick={toggleLiteMode}
                  src="https://www.svgrepo.com/show/72162/moon.svg"
                  alt="Sun SVG File"
                  title="Sun SVG File"
                  className="p-1.5"
                  width="35"
                  height="35"
                />
              ) : (
                <img
                  onClick={toggleDarkMode}
                  src="https://www.svgrepo.com/show/20546/sun.svg"
                  alt="Moon SVG Vector"
                  title="Moon SVG Vector"
                  className="p-1.5"
                  width="35"
                  height="35"
                />
              )}
            </button>

            <button>
              {user?.email ? (
                <span
                  onClick={logOut}
                  className="text-gray-800 text-base font-medium hover:text-orange-400"
                >
                  Log out
                </span>
              ) : (
                <span
                  className="text-gray-800 text-base font-medium hover:text-orange-400"
                  onClick={() => setIsLoginOpen(true)}
                >
                  Log in
                </span>
              )}
            </button>
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
                      className="flex items-center justify-between p-3 hover:bg-gray-100 border-b-2 border-b-black-500"
                    >
                      <p className="flex items-center gap-6 text-2xl">
                        {navlink.icon}
                        <span className="text-base">{navlink.label}</span>
                      </p>
                    </Link>
                  ))}
                  <Link
                    to="/support"
                    className="flex items-center justify-between p-3 hover:bg-gray-100 border-b-2 border-b-black-500"
                  >
                    <p className="flex items-center gap-6 text-2xl">
                      <i className="fa-solid fa-phone"></i>
                      <span className="text-base">Support</span>
                    </p>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
