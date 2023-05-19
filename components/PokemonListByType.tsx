import { useQuery } from "react-query";
import { useEffect } from "react";

import { usePokemonContext } from "@context/pokemon";
import { capitalizeFirstLetter } from "@utils";
import {
  ListByTypeContainer,
  NoResultsContainer,
  PokemonListContainer,
  Row,
  StickySelectedTypeHeader,
  Text,
  TextLink,
} from "@styles";

const PokemonListByType = () => {
  const { selectedType, pokemonData } = usePokemonContext();

  const { data, isLoading, refetch } = useQuery({
    queryKey: "pokemonListByType",
    queryFn: () =>
      fetch(`https://pokeapi.co/api/v2/type/${selectedType}`).then((res) =>
        res.json()
      ),
    enabled: false,
  });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedType]);

  if (isLoading || !data)
    return <NoResultsContainer>Loading...</NoResultsContainer>;

  return (
    <ListByTypeContainer>
      <StickySelectedTypeHeader>
        <Text>
          Selected type:{" "}
          {selectedType ? capitalizeFirstLetter(selectedType) : "-"}
        </Text>
      </StickySelectedTypeHeader>
      {pokemonData?.name && (
        <PokemonListContainer>
          <TextLink
            href={{
              pathname: "/detail",
              query: { pokemon: pokemonData.name },
            }}
            key={pokemonData.name}
          >
            {pokemonData.name}
          </TextLink>
        </PokemonListContainer>
      )}
      {!data?.pokemon?.length && !pokemonData?.name && (
        <NoResultsContainer>No Results</NoResultsContainer>
      )}
      {Boolean(data?.pokemon?.length) && (
        <PokemonListContainer>
          {data.pokemon.map((item: any) => (
            <TextLink
              href={{
                pathname: "/detail",
                query: { pokemon: item.pokemon.name },
              }}
              key={item.pokemon.name}
            >
              {item.pokemon.name}
            </TextLink>
          ))}
        </PokemonListContainer>
      )}
    </ListByTypeContainer>
  );
};

export default PokemonListByType;
