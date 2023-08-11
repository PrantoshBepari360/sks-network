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
      <div className="w-full bg-[#5fcf80]">
        <Banner />
      </div>
      <div className="w-full">
        <FormLink />
      </div>
      <div className="w-full">
        <Mix />
      </div>
      <div className="w-full">
        <Packages />
      </div>
      <div className="w-full">
        <Sme />
      </div>
      <div className="w-full">
        <Home />
      </div>
      <div className="w-full">
        <Akdesh />
      </div>
    </div>
  );
};
