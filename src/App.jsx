import { useState } from "react";
import "./App.css";
useState
import PrimerComponente from "./components/PrimerComponente";

function App() {
  const [data, setData] = useState(null)
  return(
    <>
      <header>
        <h1>Pokedex</h1>
        <PrimerComponente/>
      </header>
    </>
  );
}

export default App;
