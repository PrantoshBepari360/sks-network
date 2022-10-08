import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export const Form = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6oouttq",
        "template_9s5loyv",
        form.current,
        "user_FVv0JnRZ04GmOBVeo2Y1M"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setSuccess(true);
  };
  return (
    <div className="w-11/12 mx-auto py-20 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-9">
        <div className="col-span-6">
          <form className="mb-8" ref={form} onSubmit={sendEmail}>
            <div className="flex mb-7">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                required
                className="border-2 border-[#e3e3e3] w-full p-2 rounded mr-2"
              />
              <input
                type="email"
                required
                name="email"
                placeholder="Your E-mail*"
                className="border-2 border-[#e3e3e3] w-full p-2 rounded ml-2"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="border-2 border-[#e3e3e3] w-full p-2 rounded mb-7"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border-2 border-[#e3e3e3] w-full p-2 rounded mb-7 h-40"
            />
            <div className="flex">
              <input
                type="submit"
                value="Send Message"
                className="border border-[#ff7602] px-6 py-2 rounded font-medium text-white cursor-pointer  transition bg-[#ff7602] hover:bg-[#bfa67a] hover:rounded-none hover:border-[#000000]"
              />
            </div>
            {success && (
              <div className="p-4 mt-7 rounded text-white text-xl font-bold bg-[#5fcf80]">
                Your message was sent Successfully.
              </div>
            )}
          </form>
        </div>
        <div className="col-span-3">
          <div className="text-left mb-8">
            <h1 className="text-xl font-medium">Get in Touch</h1>
            <p className="">Mon-Fri: 8:00 am – 08:00 pm</p>
          </div>
          <div className="flex items-center mb-8">
            <div className="w-14 h-14 border-2 rounded-full mr-5 flex justify-center items-center border-[#ff7602]">
              <i className="fa-solid fa-location-dot fa-2xl text-[#ff7602]"></i>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-medium">Location:</h1>
              <p className="">Dhamusa, Dasar, Madaripur-7900.</p>
            </div>
          </div>
          <div className="flex items-center mb-8">
            <div className="w-14 h-14 border-2 rounded-full mr-5 flex justify-center items-center border-[#ff7602]">
              <i className="fa-solid fa-envelope fa-2xl text-[#ff7602]"></i>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-medium">Email:</h1>
              <p className="">bepariprantosh360@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center mb-8">
            <div className="w-14 h-14 border-2 rounded-full mr-5 flex justify-center items-center border-[#ff7602]">
              <i className="fa-solid fa-phone fa-2xl text-[#ff7602]"></i>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-medium">Call:</h1>
              <p className="">+880 1833-078059</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
