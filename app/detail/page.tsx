"use client";

import { useQuery } from "react-query";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import DetailItem from "@components/DetailItem";
import { Block, DetailContainer, LoadingContainer, Row, Text } from "@styles";

const DetailPage = () => {
  const searchParams = useSearchParams();

  const pokemon = searchParams.get("pokemon");

  const { data, isLoading } = useQuery("pokemonDetail", () =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) =>
      res.json()
    )
  );

  if (isLoading || !data)
    return <LoadingContainer>Loading...</LoadingContainer>;
  if (!pokemon) return <LoadingContainer>Not found</LoadingContainer>;

  return (
    <DetailContainer>
      <Block>
        <DetailItem title="Name" description={pokemon} />
        <DetailItem title="Height" description={`${data.height}dm`} />
        <DetailItem title="Weight" description={`${data.weight}hg`} />
        <DetailItem
          title="Base experience"
          description={data.base_experience}
        />
        <Text fontWeight={600}>Basic moves:</Text>
        <Row flexWrap>
          {data?.moves?.splice(0, 5)?.map((move: any) => (
            <Text fontSize="14px" key={move?.move?.name}>
              {move?.move?.name}
            </Text>
          ))}
        </Row>
        <Row>
          <Text fontWeight={600}>Type/s:</Text>
          {data?.types?.map((type: any, index: number) => (
            <Text fontSize="14px" key={`${type?.type?.name}-${index}`}>
              {type?.type?.name}
            </Text>
          ))}
        </Row>
      </Block>
      <Image
        src={data.sprites.front_default}
        alt={pokemon}
        width={150}
        height={150}
      />
    </DetailContainer>
  );
};

export default DetailPage;
