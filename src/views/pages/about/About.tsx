import { Footer } from "../common/Footer";
import { Header } from "../common/Header";
import { Main } from "../home/Main";
import { Sks } from "../home/Sks";
import { Banar } from "./Banar";

export const About = () => {
  return (
    <div>
      <div className="w-full bg-white fixed z-[100] drop-shadow-[0_1px_5px_rgba(193,193,193,0.3)]">
        <Header></Header>
      </div>
      <br />
      <div className="w-full bg-[#5fcf80]">
        <Banar></Banar>
      </div>
      <div className="w-full">
        <Main></Main>
      </div>
      <div className="w-full">
        <Sks></Sks>
      </div>
      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};
