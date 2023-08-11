import { Main } from "../home/Main";
import { Sks } from "../home/Sks";
import { Banar } from "./Banar";

export const About = () => {
  return (
    <div>
      <br />
      <div className="w-full bg-[#5fcf80]">
        <Banar />
      </div>
      <div className="w-full">
        <Main />
      </div>
      <div className="w-full">
        <Sks />
      </div>
    </div>
  );
};
