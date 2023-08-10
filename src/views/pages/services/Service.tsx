import React from "react";
import { Footer } from "../common/Footer";
// import { Header } from "../common/Header";
import { Hosting } from "../home/Hosting";
import { Services } from "../home/Services";
import { Sks } from "../home/Sks";
import Navbar from "../common/Navbar";

export const Service = () => {
  return (
    <div>
      <div className="w-full bg-white fixed z-[100] drop-shadow-[0_1px_5px_rgba(193,193,193,0.3)]">
        <Navbar />
        {/* <Header /> */}
      </div>
      <br />
      <div className="w-full pt-20 md:pt-40 lg:pt-20">
        <Services></Services>
      </div>
      <div className="w-full">
        <Sks></Sks>
      </div>
      <div className="w-full">
        <Hosting></Hosting>
      </div>
      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};
