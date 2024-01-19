import NavBar from "./components/Navigation/NavBar";
import Home from "./components/Sections/Home";
import About from "./components/Sections/About";
import Portfolio from "./components/Sections/Portfolio";
import Experience from "./components/Sections/Experience";
import Contact from "./components/Sections/Contact";
import SocialLinks from "./components/Navigation/SocialLinks";

function App() {
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
}

export default App;
