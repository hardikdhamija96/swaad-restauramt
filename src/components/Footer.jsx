import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-screen max-w-screen-lg mx-auto">
      <div className="h-5/6 flex justify-center items-center">
        <div className="h-[70%] w-4/5 bg-neutral-800 rounded-3xl py-5 px-10">
          <div className="h-[45%]">
            <div className="text-center pb-4 flex flex-col">
              <h2 className="text-white font-signature text-2xl ">
                Working Hours
              </h2>
              <div className="border-[1px] border-red-900 w-36 mx-auto"></div>
            </div>
            <div className="text-center flex flex-col gap-3 text-white">
              <p>Monday-Friday: 8am - 9pm</p>
              <p>Saturday-Sunday: 12am - 11pm</p>
            </div>
          </div>
          <div className=" h-[45%]">
            <div className="text-center pb-4 flex flex-col">
              <h2 className="text-white font-signature text-2xl ">
                Contact Us
              </h2>
              <div className="border-[1px] border-red-900 w-28 mx-auto"></div>
            </div>
            <div className="text-center flex flex-col gap-3 text-white">
              <p>2715 Ash Dr. San Jose</p>
              <p>+1(239) 555-0000</p>
              <p>+1(239) 555-0000</p>
            </div>
          </div>
          <div className=" h-[10%] flex justify-center items-center gap-3 text-white">
            <a href="">
              <FaInstagram size={30} />
            </a>
            <a href="">
              <FaTwitter size={30} />
            </a>
            <a href="">
              <FaFacebook size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="h-1/6 text-center font-signature text-red-900 text-5xl">
        Swaad
      </div>
    </div>
  );
};

export default Footer;
