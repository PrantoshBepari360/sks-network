import { Footer } from "../../common/Footer";
import { Header } from "../../common/Header";
import { Banner } from "../Banner";
import { Mix } from "../Mix";
import { Sme } from "../Sme";

export const SmeMix = () => {
  return (
    <div>
      <div className="w-full bg-white fixed z-[100] drop-shadow-[0_1px_5px_rgba(193,193,193,0.3)]">
        <Header></Header>
      </div>
      <br />
      <div className="w-full bg-[#5fcf80]">
        <Banner></Banner>
      </div>
      <div className="w-full">
        <Mix></Mix>
      </div>
      <div className="w-full">
        <Sme></Sme>
      </div>
      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};
