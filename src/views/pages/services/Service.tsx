import { Hosting } from "../home/Hosting";
import { Services } from "../home/Services";
import { Sks } from "../home/Sks";

export const Service = () => {
  return (
    <div>
      <div className="w-full pt-20 md:pt-40 lg:pt-20">
        <Services />
      </div>
      <div className="w-full">
        <Sks />
      </div>
      <div className="w-full">
        <Hosting />
      </div>
    </div>
  );
};
