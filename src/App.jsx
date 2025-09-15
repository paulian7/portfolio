import "./App.css";
import { NavBar } from "./components/NavBar";
import { useState } from "react";
import { MobileNav } from "./components/MobileNav";
import { Home } from "./components/sections/Home";
import { Draw } from "./components/Draw";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Fun } from "./components/sections/Fun";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
      <div>
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Fun />
        <Contact />
        <Draw />
        <Footer />
      </div>
    </>
  );
}

export default App;
