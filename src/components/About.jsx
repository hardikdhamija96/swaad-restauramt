
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
  return (
    <div name="About Us" className="max-w-screen-lg mx-auto h-fit pl-8 py-10">
      <div className="py-6">
        <h1 className="font-signature tracking-wide text-center pt-4 text-2xl">
          Our Story
        </h1>
        <div className="border-[1.7px] w-1/12 border-red-800 mx-auto "></div>
      </div>
      <div>
        <h1 className="font-signature text-red-800 font-thin text-4xl tracking-wide text-center">
          About Us
        </h1>
      </div>
      <div className="py-8 w-4/5 mx-auto text-center">
        <p className="py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, iure
          id. Natus minus ab corrupti, itaque quae alias quam fugiat quasi
          repellat explicabo facilis consequuntur, cum, quidem molestiae sed
          nulla?
        </p>
        <p className="py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, iure
          id. Natus minus ab corrupti, itaque quae alias quam fugiat quasi
          repellat explicabo facilis consequuntur, cum, quidem molestiae sed
          nulla?
        </p>
        <p className="py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, iure
          id. Natus minus ab corrupti, itaque quae alias quam fugiat quasi
          repellat explicabo facilis consequuntur, cum, quidem molestiae sed
          nulla?
        </p>
        <p className="py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, iure
          id. Natus minus ab corrupti, itaque quae alias quam fugiat quasi
          repellat explicabo facilis consequuntur, cum, quidem molestiae sed
          nulla?
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div>
          <a
            href=""
            className="group text-white  w-fit px-6 py-3 my-2 flex items-center rounded-md bg-red-900 cursor-pointer 
            border-2 border-white sm:text-lg hover:text-red-900 hover:bg-white hover:border-red-900 hover:border-2 duration-300 tracking-wider"
          >
            View More
            <span className="">
              {/* <FaAngleRight size={18} className="ml-1" /> */}
              <FaLongArrowAltRight size={18} className="ml-1" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
