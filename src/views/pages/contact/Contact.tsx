import { Footer } from "../common/Footer";
// import { Header } from "../common/Header";
import Navbar from "../common/Navbar";
import { Banner } from "./Banner";
import { Form } from "./Form";
import { Location } from "./Location";

export const Contact = () => {
  return (
    <div>
      <div className="w-full bg-white fixed z-[100] drop-shadow-[0_1px_5px_rgba(193,193,193,0.3)]">
        <Navbar />
        {/* <Header /> */}
      </div>
      <br />
      <div className="w-full bg-[#5fcf80]">
        <Banner></Banner>
      </div>
      <div className="w-full">
        <Location></Location>
      </div>
      <div className="w-full">
        <Form></Form>
      </div>
      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};
