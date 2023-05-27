import React, { useEffect, useState } from "react";
import "./PokemonPortal.css";
import PokemonListItem from "../Pokemon-List-Item/PokemonListItem";

const PokemonPortal = () => {
  const [pokemonList, updatePokemonList] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      ).json();

      updatePokemonList(data.results);
    };

    dataFetch();
  }, []);

  return (
    <div className="pokemon-portal-container">
      {pokemonList.length > 0 &&
        pokemonList.map((item: any, index) => {
          return (
            <PokemonListItem key={index} name={item.name} url={item.url} />
          );
        })}
    </div>
  );
};

export default PokemonPortal;
