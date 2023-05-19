"use client";

import { useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { usePokemonContext } from "@context/pokemon";
import { Input, SearchButton, SearchPokemonContainer } from "@styles";

const SearchPokemon = () => {
  const { searchValue, handleSearchValue, handleSearchPokemon } =
    usePokemonContext();

  const searchParams: any = useSearchParams();
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const onClick = () => {
    router.push("/" + "?" + createQueryString("search", searchValue));

    return handleSearchPokemon();
  };

  return (
    <SearchPokemonContainer>
      <Input
        placeholder="Search by Pokemon"
        value={searchValue}
        onChange={handleSearchValue}
      />
      <SearchButton onClick={onClick}>Search</SearchButton>
    </SearchPokemonContainer>
  );
};

export default SearchPokemon;
