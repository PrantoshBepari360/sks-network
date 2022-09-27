import course from "../../../assets/img/course-1.jpg";
import course1 from "../../../assets/img/course-2.jpg";
import course2 from "../../../assets/img/course-3.jpg";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <div className="w-7/12 mx-auto py-16">
      <div className="text-left" style={{ fontFamily: "Raleway, sans-serif" }}>
        <div className="flex items-center mb-2">
          <h1 className="text-sm font-bold tracking-widest text-[#aaaaaa] mr-3">
            SERVICES
          </h1>
          <p className="w-1/12 h-px bg-lime-400"></p>
        </div>
        <h1 className="text-4xl font-bold tracking-wide text-[#37423b] mb-10">
          CHECK OUR SERVICES
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 border rounded">
          <img src={course} alt="" />
          <div className="text-left py-5 px-5">
            <div className="flex">
              <Link to="/pricing4">
                <h1 className="text-left py-1 px-4 bg-[#5fcf80] text-white hover:bg-[#36ba5e] transition duration-300 ease-in-out">
                  Internet service
                </h1>
              </Link>
            </div>
            <h1 className="mt-3 text-amber-500 text-xl font-bold">
              এক দেশ এক রেট
            </h1>
            <p className="mt-3">
              We offer "ek desh ek rate" that is tk.500, tk.800 and tk.1200.
              Also offer corporate packages to convene your needs.
            </p>
          </div>
        </div>
        <div className="col-span-4 border rounded">
          <img src={course1} alt="" />
          <div className="py-5 px-5">
            <div className="flex">
              <Link to="/pricing3">
                <h1 className="text-left py-1 px-4 bg-[#5fcf80] text-white hover:bg-[#36ba5e] transition duration-300 ease-in-out">
                  Web Development
                </h1>
              </Link>
            </div>

            <h1 className="mt-3 text-left text-amber-500 text-xl font-bold">
              Static and Dynamic
            </h1>

            <div className="mt-3 ml-10 text-left">
              <p className="">We develop for you:</p>
              <div className="flex items-center">
                <i className="fa-regular fa-circle-check text-[#3AC162] mr-1"></i>
                <p className="">General Website</p>
              </div>
              <div className="flex items-center">
                <i className="fa-regular fa-circle-check text-[#3AC162] mr-1"></i>
                <p className="">eCommerce Website</p>
              </div>
              <div className="flex items-center">
                <i className="fa-regular fa-circle-check text-[#3AC162] mr-1"></i>
                <p className="">eCommerce and delivery App</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 border rounded">
          <img src={course2} alt="" />
          <div className="py-5 px-5">
            <div className="flex">
              <Link to="/pricing">
                <h1 className="text-left py-1 px-4 bg-[#5fcf80] text-white hover:bg-[#36ba5e] transition duration-300 ease-in-out">
                  Hosting
                </h1>
              </Link>
            </div>
            <h1 className="mt-3 text-left  text-amber-500 text-xl font-bold">
              Hosting with SSL Certificate
            </h1>
            <div className="mt-3 ml-10 text-left">
              <p className="">We Provide:</p>
              <div className="flex items-center">
                <i className="fa-regular fa-circle-check text-[#3AC162] mr-1"></i>
                <p className="">Domain Registration</p>
              </div>
              <div className="flex items-center">
                <i className="fa-regular fa-circle-check text-[#3AC162] mr-1"></i>
                <p className="">Hosting Services</p>
              </div>
              <div className="flex items-center">
                <i className="fa-regular fa-circle-check text-[#3AC162] mr-1"></i>
                <p className="">SSL certificates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
