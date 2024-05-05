import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import SocialLink from "./assets/components/SocialLink";
import About from "./assets/components/About";
import Portofolio from "./assets/components/Portofolio";
import Experience from "./assets/components/Experience";
import Contact from "./assets/components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <SocialLink />
      <Portofolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
