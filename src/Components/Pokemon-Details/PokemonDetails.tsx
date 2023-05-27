import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PokemonNotFound from "../Pokemon-Not-Found/PokemonNotFound";
import PokemonForm from "../Pokemon-Form/PokemonForm";
import "./PokemonDetails.css";

const PokemonDetails = () => {
  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);
  const pokemonUrl = searchParams.get("url") || "";
  const [pokemonData, setPokemonData] = useState(null);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(pokemonUrl)).json();
      setFetched(true);
      setPokemonData(data);
    };

    pokemonUrl !== "" && dataFetch();
  }, []);

  return fetched && pokemonData !== null ? (
    <PokemonForm pokemonData={pokemonData} />
  ) : fetched ? (
    <PokemonNotFound />
  ) : (
    <label className="loading-text">... Loading ...</label>
  );
};

export default PokemonDetails;
