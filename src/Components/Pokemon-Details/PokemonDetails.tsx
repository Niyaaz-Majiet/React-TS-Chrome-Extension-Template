import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PokemonNotFound from "../Pokemon-Not-Found/PokemonNotFound";
import PokemonForm from "../Pokemon-Form/PokemonForm";

const PokemonDetails = () => {
  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);
  const pokemonUrl = searchParams.get("url") || "";
  const [pokemonData, setPokemonData] = useState({});
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(pokemonUrl)).json();
      setFetched(true);
      setPokemonData(data);
    };

    pokemonUrl !== "" && dataFetch();
  }, []);

  return fetched && pokemonData ? (
    <PokemonForm pokemonData={pokemonData} />
  ) : (
    <PokemonNotFound />
  );
};

export default PokemonDetails;
