import "./App.css";
import { NavBar } from "./components/NavBar";
import { useState } from "react";
import { MobileNav } from "./components/MobileNav";
import { Home } from "./components/sections/Home";

function App() {
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
  <>
    <div>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
    </div>
  </>
  );
}

export default App;
