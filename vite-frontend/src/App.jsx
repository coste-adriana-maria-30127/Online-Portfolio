import NavBar from "./components/Navigation/NavBar";
import SocialLinks from "./components/Navigation/SocialLinks";
import About from "./components/Sections/About";
import Contact from "./components/Sections/Contact";
import Experience from "./components/Sections/Experience";
import Home from "./components/Sections/Home";
import Portfolio from "./components/Sections/Portfolio";

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </>
  );
};

export default App;
