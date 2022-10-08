import image from "../../../assets/img/sparksystems.png";
import image1 from "../../../assets/img/home-1.png";

export const Main = () => {
  return (
    <div className="w-11/12 mx-auto py-20 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
      <div className="text-left pt-10">
        <h1 className="text-3xl" style={{ fontFamily: "Raleway, sans-serif" }}>
          Welcome to Sks Network Systems Limited (Sks.N.S.L)
        </h1>
        <p className="text-4xl">
          <b className="text-[#3AC162]">22 Years of</b>
          <br />
          <b className="text-[#F58634]">Experience</b>
        </p>
      </div>

      <div className="flex-none sm:flex">
        <div className="w-12/12 text-justify pr-4 sm:w-6/12">
          <p className="pb-3 pt-5">
            In tandem with the dial-up regime, back in the late 10s, Sks made
            way to spreading the same over Madaripur city. Improvisation,
            however, took place with the prelude of broadband, and being in high
            business reflex, Sks converted its provision of connectivity into
            broadband around the year 2021, keeping the previous one in absolute
            operations.
          </p>
          <p className="pb-3">
            Sks is Internet Product Company backed by IT Services and Solutions.
            We are a team with IT expertise with excellence in 'Customers' Need
            Assessment' and endeavor to fulfill as well as exceeding customers'
            expectation. Since its inception in 2000, Sks has consistently made
            durable customer relationships.
          </p>
          <p>
            Sks was established with the over aching objective of keeping the
            customers in the information superhighway with the fastest Internet
            connectivity by using the most advanced and reliable equipment
            available. Aligned with that, and in expand the compartmented
            typical arena of service provision in this particular sector, Sks
            enrolled into the SEA-ME-WE-4 Submarine Optical Fiber Network in
            July 2018.
          </p>
          <div className="flex justify-center mt-12">
            <img src={image} alt="Company logo" />
          </div>
        </div>
        <div className="hidden w-6/12 pl-4 sm:block">
          <img src={image1} className="-mt-6" alt="Service logo" />
        </div>
      </div>
    </div>
  );
};
