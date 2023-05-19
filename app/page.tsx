import PokemonTypes from "@components/PokemonTypes";
import SearchPokemon from "@components/SearchPokemon";
import { HomePageContainer, Row } from "@styles";

export default function Home() {
  return (
    <HomePageContainer>
      <SearchPokemon />
      <Row>
        <PokemonTypes />
      </Row>
    </HomePageContainer>
  );
}
