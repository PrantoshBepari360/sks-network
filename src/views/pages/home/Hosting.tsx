import image1 from "../../../assets/img/home-2.png";

export const Hosting = () => {
  return (
    <div className="w-7/12 mx-auto py-14">
      <div className="flex">
        <div className="w-6/12 pr-4">
          <img className="-mt-6" src={image1} alt="" />
        </div>
        <div className="w-6/12 pl-4">
          <p className="text-left leading-none mb-4">
            <b className="text-[40px] text-[#3AC162]">Web Development</b>
            <br />
            <b className="text-[40px] text-[#F58634]">Web Hosting</b>
          </p>
          <p className="text-left mb-4 font-semibold text-[#6b6464]">
            We create smart websites that catch the attention of customers in.
            We provide you custom logo, customized E-mail header, custom layouts
            and styles, each layout has been carefully created to be suitable
            for our client's company's size scope of desire. Our designer starts
            with listening and responding to your individual needs & budgetary
            parameters. We learn every aspect of your business and use all
            related information as a strong framework for the design.
          </p>
          <div className="text-left font-semibold text-[#3AC162]">
            <a href="/services">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};
