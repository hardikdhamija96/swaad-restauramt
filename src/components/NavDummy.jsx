import { useState } from "react";
import { FaBars } from "react-icons/fa";

const NavDummy = () => {
  const navItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "About Us" },
    { id: 3, name: "Menu" },
    { id: 4, name: "Gallery" },
    { id: 5, name: "Contact" },
  ];

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 max-w-screen-lg mx-auto">
      <div className="flex justify-between w-full h-32 items-center">
        <div>
          <h1 className="font-signature text-red-800 text-5xl ">Swaad</h1>
        </div>
        <div>
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="block md:hidden"
          >
            <FaBars className="size-6 text-red-800 " />
          </button>
        </div>
      </div>
      <div
        className={`flex flex-col md:flex-row justify-center items-center md:justify-between md:gap-8 gap-4 ${
          showMobileMenu ? "hidden md:flex" : ""
        }`}
      >
        <div className="pr-[6vw]">
          <ul className="flex flex-col md:flex-row items-center md:gap-3 gap-4 py-3 md:pr-6">
            {navItems.map((item) => (
              <li key={item.id} className="text-[1.05rem] cursor-pointer whitespace-nowrap">{item.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <button className="px-4 py-3 text-red-900 bg-white tracking-wider border-red-900 border-[1px] rounded-lg hover:bg-red-800 hover:border-white hover:text-white duration-300">Reservation</button>
        </div>
      </div>
    </div>
  );
};

export default NavDummy;
