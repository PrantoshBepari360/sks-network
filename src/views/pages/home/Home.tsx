// import { Header } from "../common/Header";
import { Banar } from "./Banar";
import { Main } from "./Main";
import { Sks } from "./Sks";
import { Services } from "./Services";
import { Hosting } from "./Hosting";

export const Home = () => {
  return (
    <div>
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
    </div>
  );
};
