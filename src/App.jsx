import "./App.css";
import { NavBar } from "./components/NavBar";
import { useState } from "react";
import { MobileNav } from "./components/MobileNav";

function App() {
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
  <>
    <div>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  </>
  );
}

export default App;
