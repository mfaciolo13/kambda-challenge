import useDebounce from "@hooks/useDebounce";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

interface PokemonContextType {
  searchValue: string;
  selectedType: string;
  pokemonData: any;
  handleSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectedType: (type: string) => void;
  handleSearchPokemon: () => void;
  cleanPokemonData: () => void;
}

export const PokemonContext = createContext<PokemonContextType | undefined>(
  undefined
);
PokemonContext.displayName = "PokemonContext";

type Props = {
  children: React.ReactNode;
};

export const PokemonProvider = ({ children }: Props) => {
  const router = useRouter();

  const [selectedType, setSelectedType] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [pokemonData, setPokemonData] = useState({ types: [], name: "" });
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const {
    data,
    isLoading,
    refetch: getPokemon,
    isSuccess,
  } = useQuery({
    queryKey: "pokemon",
    queryFn: () =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${debouncedSearchValue}`).then(
        (res) => res.json()
      ),
    enabled: false,
  });

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSelectedType = (type: string) => {
    cleanPokemonData();
    setSelectedType(type);
  };

  const handleSearchPokemon = () => {
    setSelectedType("");
    getPokemon();
  };

  const cleanPokemonData = () => {
    setPokemonData({ types: [], name: "" });
    setSearchValue("");
    router.push("/");
  };

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setPokemonData({
        types: data?.types?.map(
          ({ type }: { type: { name: string } }) => type?.name
        ),
        name: data?.name,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isLoading, setPokemonData]);

  const value = {
    searchValue,
    selectedType,
    pokemonData,
    handleSearchValue,
    handleSelectedType,
    handleSearchPokemon,
    cleanPokemonData,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

export const usePokemonContext = (): PokemonContextType => {
  const context = useContext(PokemonContext);
  if (!context)
    throw new Error(`usePokemonContext must be used within PokemonProvider`);

  return context;
};
