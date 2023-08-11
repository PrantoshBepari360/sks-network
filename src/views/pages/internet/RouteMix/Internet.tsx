import { Banner } from "../Banner";
import { Mix } from "../Mix";
import { Packages } from "../Packages";
import { FormLink } from "./FormLink";

export const Internet = () => {
  return (
    <div>
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
    </div>
  );
};
