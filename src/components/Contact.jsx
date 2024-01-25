import bgImg from "../Images/Contact/background.png"

const Contact = () => {
  return (
    <div
    name="Contact"
      className="relative bg-cover bg-no-repeat bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})`}}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      {/* Your content goes here */}
    </div>
  );
}

export default Contact