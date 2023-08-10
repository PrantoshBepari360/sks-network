import { Footer } from "../common/Footer";
import Navbar from "../common/Navbar";
// import { Header } from "../common/Header";
import { Banner } from "../internet/Banner";
import { Akdesh } from "./Akdesh";
import { Home } from "./Home";
import { Mix } from "./Mix";
import { Packages } from "./Packages";
import { FormLink } from "./RouteMix/FormLink";
import { Sme } from "./Sme";

export const All = () => {
  return (
    <div>
      <div className="w-full bg-white fixed z-[100] drop-shadow-[0_1px_5px_rgba(193,193,193,0.3)]">
        <Navbar/>
        {/* <Header /> */}
      </div>
      <br />
      <div className="w-full bg-[#5fcf80]">
        <Banner></Banner>
      </div>
      <div className="w-full">
        <FormLink></FormLink>
      </div>
      <div className="w-full">
        <Mix></Mix>
      </div>
      <div className="w-full">
        <Packages></Packages>
      </div>
      <div className="w-full">
        <Sme></Sme>
      </div>
      <div className="w-full">
        <Home></Home>
      </div>
      <div className="w-full">
        <Akdesh></Akdesh>
      </div>
      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};
