import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./PokemonListItem.css";

interface PropType {
  name: string;
  url: string;
}

const PokemonListItem: FC<PropType> = ({ name, url }) => {
  const navigate = useNavigate();

  const handleNavigate = (url: string) => {
    navigate(`/pokemon?url=${url}`);
  };

  return (
    <div
      className="pokemon-list-item-container"
      onClick={() => handleNavigate(url)}
    >
      {name}
    </div>
  );
};

export default PokemonListItem;
