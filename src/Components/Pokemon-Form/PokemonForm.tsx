import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./PokemonForm.css";

const PokemonForm: FC<any> = ({ pokemonData }) => {
  const navigate = useNavigate();
  return (
    <div className="pokemon-form-container">
      <button
        className="back-btn"
        onClick={() => {
          navigate(-1);
        }}
      >
        {"<"}
      </button>
      <img
        className="pokemon-img"
        src={pokemonData.sprites.front_default}
        alt="pokemon-img"
      />

      <label htmlFor="name">
        Name :
        <input id="name" value={pokemonData.name} readOnly />
      </label>
      <label htmlFor="weight">
        Weight :
        <input id="weight" value={pokemonData.weight} readOnly />
      </label>
    </div>
  );
};

export default PokemonForm;
