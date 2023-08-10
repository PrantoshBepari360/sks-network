// import { Header } from "../common/Header";
import { Banar } from "./Banar";
import { Footer } from "../common/Footer";
import { Main } from "./Main";
import { Sks } from "./Sks";
import { Services } from "./Services";
import { Hosting } from "./Hosting";
import Navbar from './../common/Navbar';

export const Home = () => {
  return (
    <div>
      <div className="w-full bg-white fixed z-[100] drop-shadow-[0_1px_5px_rgba(193,193,193,0.3)]">
        {/* <Header></Header> */}
        <Navbar/>
      </div>
      <div className="w-full background-img bg-fixed">
        <Banar></Banar>
      </div>
      <div className="w-full">
        <Main></Main>
      </div>
      <div className="w-full">
        <Sks></Sks>
      </div>
      <div className="w-full">
        <Services></Services>
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
