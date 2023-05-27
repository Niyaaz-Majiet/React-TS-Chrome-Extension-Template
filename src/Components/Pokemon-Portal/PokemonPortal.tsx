import React, { useEffect, useState, useRef } from "react";
import "./PokemonPortal.css";
import PokemonListItem from "../Pokemon-List-Item/PokemonListItem";

const PokemonPortal = () => {
  const topRef = useRef<HTMLSpanElement>(null);
  const bottomRef = useRef<HTMLSpanElement>(null);
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

  const goTo = (top: boolean) => {
    if (top) {
      topRef.current?.scrollIntoView();
    } else {
      bottomRef.current?.scrollIntoView();
    }
  };

  return (
    <div className="pokemon-portal-container">
      <span ref={topRef} />
      <button className="go-to-btn top" onClick={() => goTo(true)}>
        {"^"}
      </button>
      <button className="go-to-btn bottom" onClick={() => goTo(false)}>
        {"↓"}
      </button>
      {pokemonList.length > 0 &&
        pokemonList.map((item: any, index) => {
          return (
            <PokemonListItem key={index} name={item.name} url={item.url} />
          );
        })}
      <span ref={bottomRef} />
    </div>
  );
};

export default PokemonPortal;
