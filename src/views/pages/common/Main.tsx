import { Route, Routes } from "react-router-dom";
import { About } from "../about/About";
import { Contact } from "../contact/Contact";
import { Home } from "../home/Home";
import { Internet } from "../internet/RouteMix/Internet";
import { HomeMix } from "../internet/RouteMix/HomeMix";
import { RagulerMix } from "../internet/RouteMix/RagulerMix";
import { SmeMix } from "../internet/RouteMix/SmeMix";
import { Service } from "../services/Service";
import { Register } from "../../components/Auth/Register";
import { Login } from "../../components/Auth/Login";
// import { PrivetOutlet } from "../../components/Auth/PrivetOutlet";
import { All } from "../internet/All";
import { Support } from "../support/Support";
import { Footer } from "./Footer";
import { Header } from "./navbar/Header";

export const Main = () => {
  return (
    <div className="text-center">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Service />}></Route>
        <Route path="/packages" element={<All />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/support" element={<Support />}></Route>
        {/* <Route path="/*" element={<PrivetOutlet />}>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="support" element={<Support />}></Route>
        </Route> */}
        <Route path="/all" element={<All />}></Route>
        <Route path="/pricing" element={<Internet />}></Route>
        <Route path="/pricing2" element={<SmeMix />}></Route>
        <Route path="/pricing3" element={<HomeMix />}></Route>
        <Route path="/pricing4" element={<RagulerMix />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};
