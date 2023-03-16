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
    icon: <i className="fa-solid fa-phone" />,
    label: "Support",
  },
  {
    href: "http://smartbox.digital/jwtv1/index.php",
    target: "_blank",
    icon: <i className="fa-solid fa-tv" />,
    label: "Live-Tv",
  },
  {
    href: "http://www.metromedia.digital",
    target: "_blank",
    icon: <i className="fa-solid fa-server" />,
    label: "Ftv",
  },
];

export const Header = () => {
  const { user, logOut, setIsLoginOpen } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <LoginModel />
      <div className="md:w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 mx-auto">
        <div className="flex items-center justify-between p-2 md:block md:py-5 lg:p-2 lg:flex">
          <div className="md:hidden">
            {isMobileMenuOpen ? (
              <button
                onClick={closeMobileMenu}
                className="whitespace-nowrap text-xl md:text-xl p-2.5 flex gap-1.5 items-center justify-between rounded-full border hover:bg-gray-100  bg-transparent "
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
            ) : (
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
            )}
          </div>

          <Link to="/" className="w-38 sm:w-18 md:w-28 mr-2 flex">
            <img src={logo} alt="SKSN Logo" />
          </Link>

          <div className="hidden md:flex items-center py-5">
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
          
          <div className="text-left">
            {user?.email ? (
              <button
                onClick={logOut}
                className="text-gray-800 text-base font-medium hover:text-orange-400"
              >
                Log out
              </button>
            ) : (
              <button
                className="text-gray-800 text-base font-medium hover:text-orange-400"
                onClick={() => setIsLoginOpen(true)}
              >
                Log in
              </button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMobileMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 pointer-events-none -translate-y-10"
          } duration-300 z-50 absolute top-0 inset-x-0 mt-14 transition transform md:hidden`}
        >
          <div className="shadow-lg bg-white divide-y">
            <div className="px-3 py-8">
              <nav className="grid border">
                {Navlinks?.map((navlink) => (
                  <Link
                    onClick={closeMobileMenu}
                    to={navlink.href}
                    target={navlink.target}
                    key={navlink.label}
                    className="flex p-3 hover:bg-gray-100 hover:text-orange-500 border-b text-sm"
                  >
                    <p className="flex items-center text-orange-500">
                      {navlink.icon}
                    </p>
                    <span className="ml-5">{navlink.label}</span>
                    <span className="ml-auto">
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
