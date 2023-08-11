import { Banner } from "../Banner";
import { Mix } from "../Mix";
import { Sme } from "../Sme";
import { FormLink } from "./FormLink";

export const SmeMix = () => {
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
        <Sme></Sme>
      </div>
    </div>
  );
};
