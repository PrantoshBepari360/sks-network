import { Banner } from "./Banner";
import { Form } from "./Form";
import { Location } from "./Location";

export const Contact = () => {
  return (
    <div>
      <div className="w-full bg-[#5fcf80]">
        <Banner />
      </div>
      <div className="w-full">
        <Location />
      </div>
      <div className="w-full">
        <Form />
      </div>
    </div>
  );
};
