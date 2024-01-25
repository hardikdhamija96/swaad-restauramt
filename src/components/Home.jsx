import Button from "../utility/Button";
import heroImg from "../Images/Home/Hero.png" 

const Home = () => {
  return (
    <div
    name="Home"
    className="flex md:flex-row flex-col-reverse max-w-screen-lg mx-auto h-fit py-16 gap-1">
      <div className="md:w-1/2">
        <div className="py-6 pl-8">
          <h1 className="font-signature tracking-wide text-[1.6rem] font-extralight py-2 text-gray-600">
            Always Getting Better
          </h1>
          <div className="border-[1.6px] border-gray-600 md:w-[28%] lg:w-[22%] w-[31%] "></div>
        </div>

        <div className="pl-8">
          <h1 className="font-signature text-red-900 tracking-wider md:text-8xl text-6xl leading-20 w-1/2 py-3">
            Good Tastes Of Swaad
          </h1>
        </div>
        <div className="pl-8">
          <h2 className="py-3 pr-4">
            Of Course, everyone has the right to have such a special eating and
            drinking experience
          </h2>
        </div>
        <div className="pl-8 py-2">
          <Button className="sm:size-1">Explore Menu</Button>
        </div>
      </div>

      <div className="mx-auto md:w-1/2 ">
        <img
          src={heroImg}
          alt="hero-img"
          className="md:object-fill "
        />
      </div>
    </div>
  );
}

export default Home