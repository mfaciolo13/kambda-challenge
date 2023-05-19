"use client";

import { useQuery } from "react-query";

import { capitalizeFirstLetter } from "@utils";
import PokemonListByType from "@components/PokemonListByType";

import {
  LoadingContainer,
  NoResultsContainer,
  Text,
  TypeButton,
  TypePageContainer,
  TypesListContainer,
  VerticalDivider,
} from "@styles";
import { usePokemonContext } from "@context/pokemon";

interface PokemonType {
  name: string;
  url: string;
}

const PokemonTypes = () => {
  const { handleSelectedType, pokemonData } = usePokemonContext();

  const { data, isLoading } = useQuery("pokemonTypes", () =>
    fetch("https://pokeapi.co/api/v2/type").then((res) => res.json())
  );

  const results: PokemonType[] = data?.results;

  if (isLoading || !data)
    return <LoadingContainer>Loading...</LoadingContainer>;

  return (
    <TypePageContainer>
      <TypesListContainer>
        <Text fontWeight={500}>Pokemon Types</Text>
        {results?.map((type) => (
          <TypeButton
            key={type.name}
            onClick={() => handleSelectedType(type.name)}
            highlight={pokemonData?.types.includes(type.name)}
          >
            {capitalizeFirstLetter(type.name)}
          </TypeButton>
        ))}
      </TypesListContainer>
      <VerticalDivider />
      <PokemonListByType />
    </TypePageContainer>
  );
};

export default PokemonTypes;
