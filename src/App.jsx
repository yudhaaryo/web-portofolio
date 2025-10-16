import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import SocialLink from "./assets/components/SocialLink";
import About from "./assets/components/About";
import Portofolio from "./assets/components/Portofolio";
import Experience from "./assets/components/Experience";
import Contact from "./assets/components/Contact";
import Tech from "./assets/components/Tech";
import PortoPage from "./assets/components/PortoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Tech />
              <About />
              <SocialLink />
              <Portofolio />
              <Experience />
              <Contact />
            </>
          }
        />
        <Route path="/porto" element={<PortoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
