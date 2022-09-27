export const Sks = () => {
  return (
    <div className="w-7/12 mx-auto py-20">
      <div
        className="grid grid-cols-9 gap-4"
        style={{ fontFamily: "Raleway, sans-serif" }}
      >
        <div className="col-span-3 border rounded pt-10 px-8 bg-[#5fcf80] text-white">
          <h1 className="text-4xl font-bold leading-tight mb-3 text-left">
            Why Choose SkS Network?
          </h1>
          <p className="text-left">
            Unify IT services with internet, networking, hardware support and
            more.
          </p>
          <div className="my-10">
            <a
              href="/packages"
              className="px-8 py-3 border-2 border-white rounded-full transition hover:bg-white hover:border-white hover:text-[#5fcf80] text-lg"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="col-span-2 border rounded p-10 px-8">
          <div className="flex justify-center items-center">
            <i className="fa-solid fa-tower-cell fa-xl mb-5 w-16 h-16 rounded-full bg-[#ecf9f0]  text-[#5fcf80] flex justify-center items-center"></i>
          </div>
          <h1 className="text-2xl font-medium mb-3">Internet</h1>
          <p className="text-left">
            We are team of IT expaerts making your connection smoother & faster
          </p>
        </div>

        <div className="col-span-2 border rounded p-10 px-8">
          <div className="flex justify-center items-center">
            <i className="fa-brands fa-hive fa-xl mb-5 w-16 h-16 rounded-full bg-[#ecf9f0]  text-[#5fcf80] flex justify-center items-center"></i>
          </div>
          <h1 className="text-2xl font-medium mb-3">Networking</h1>
          <p className="text-left">
            Grow your business with setup of networking with maintenance
          </p>
        </div>

        <div className="col-span-2 border rounded p-10 px-8">
          <div className="flex justify-center items-center">
            <i className="fa-solid fa-images fa-xl mb-5 w-16 h-16 rounded-full bg-[#ecf9f0]  text-[#5fcf80] flex justify-center items-center"></i>
          </div>
          <h1 className="text-2xl font-medium mb-3">Hardware</h1>
          <p className="text-left">
            We care your devices with our support team
          </p>
        </div>
      </div>
      <div
        className="grid grid-cols-3 gap-4 pt-16 font-medium"
        style={{ fontFamily: "Raleway, sans-serif" }}
      >
        <div className="col-span-1 border hover:border-[#5fcf80] animation duration-200 ease-in-out rounded p-8">
          <div className="flex items-center">
            <i className="fa-solid fa-tower-cell fa-xl mr-3 text-[#ff5828]"></i>
            <h1 className="text-xl font-medium">Internet</h1>
          </div>
        </div>
        <div className="col-span-1 border hover:border-[#5fcf80] animation duration-200 ease-in-out rounded p-8">
          <div className="flex items-center">
            <i className="fa-brands fa-hive fa-xl mr-3 text-[#5578ff]"></i>
            <h1 className="text-xl font-medium">Networking</h1>
          </div>
        </div>
        <div className="col-span-1 border hover:border-[#5fcf80] animation duration-200 ease-in-out rounded p-8">
          <div className="flex items-center">
            <i className="fa-solid fa-globe fa-xl mr-3 text-[#e80368]"></i>
            <h1 className="text-xl font-medium">Domain Services</h1>
          </div>
        </div>
        <div className="col-span-1 border hover:border-[#5fcf80] animation duration-200 ease-in-out rounded p-8">
          <div className="flex items-center">
            <i className="fa-solid fa-paint-roller fa-xl mr-3 text-[#e361ff]"></i>
            <h1 className="text-xl font-medium">Web Development</h1>
          </div>
        </div>
        <div className="col-span-1 border hover:border-[#5fcf80] animation duration-200 ease-in-out rounded p-8">
          <div className="flex items-center">
            <i className="fa-solid fa-database fa-xl mr-3 text-[#47aeff]"></i>
            <h1 className="text-xl font-medium">Web Hosting</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
