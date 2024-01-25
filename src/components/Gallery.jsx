import { FaInstagram } from "react-icons/fa6";

import pic1 from "../Images/Gallery/pic1.png";
import pic2 from "../Images/Gallery/pic2.png";
import pic3 from "../Images/Gallery/pic3.png";
import pic4 from "../Images/Gallery/pic4.png";

const Gallery = () => {
  const galleryImgs = [
    { id: 1, pic: pic1 },
    { id: 2, pic: pic2 },
    { id: 3, pic: pic3 },
    { id: 4, pic: pic4 },
  ];

  return (
    <div name="Gallery" className="max-w-screen-lg mx-auto h-fit pl-8 py-10">
      <div className="py-6">
        <h1 className="font-signature tracking-wide text-center pt-4 text-2xl">
          Instagram
        </h1>
        <div className="border-[1.7px] w-1/12 border-red-800 mx-auto "></div>
      </div>
      <div className="pb-8">
        <h1 className="font-signature text-red-800 font-thin text-4xl tracking-wide text-center">
          Photo Gallery
        </h1>
      </div>
      <div className="py-8 w-4/5 mx-auto text-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          maiores explicabo atque dolores tempore nam. Ipsam consectetur
          deleniti repellendus inventore ab omnis alias eaque fugit quidem
          nihil! Fuga porro quae hic doloribus aliquid repellat quidem, dolores
          molestiae dolorum provident iste.
        </p>
      </div>
      <div className="grid md:grid-cols-4 md:grid-rows-1 gap-1 sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-4 px-10 py-10 h-2/3 w-2/3 mx-auto sm:w-full sm:h-full">
        {galleryImgs.map(({ id, pic }) => (
          <div key={id} className="relative">
            <a
              href="https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png"
              target="_blank"
              rel="noreferrer"
            >
              <div className="absolute inset-0 z-30 opacity-0 transition hover:opacity-100  ease-in">
                <div className="absolute inset-0 opacity-40  hover:bg-black bg-transparent duration-300 "></div>
                <div className=" flex items-center justify-center h-full">
                  <FaInstagram size={50} className="text-white z-10" />
                </div>
              </div>
              <img
                src={pic}
                alt=""
                className="mx-auto cursor-pointer object-cover w-full"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
