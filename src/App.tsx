import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PokemonPortal from "./Components/Pokemon-Portal/PokemonPortal";
import PokemonDetails from "./Components/Pokemon-Details/PokemonDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PokemonPortal />} />
          <Route path="/pokemon" element={<PokemonDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
