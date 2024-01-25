import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="bg-slate-100">
      <Nav />
      <Home />
      <About />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
