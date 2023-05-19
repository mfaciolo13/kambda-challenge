"use client";

import Link from "next/link";
import { styled } from "styled-components";

export const Html = styled.html`
  height: 100%;
`;

export const Body = styled.body`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
`;

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TypeButton = styled.button<{ highlight?: boolean }>`
  display: flex;
  color: ${(props) => (props.highlight ? "black" : "#f5693d")};
  width: auto;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 16px;
  font-weight: ${(props) => (props.highlight ? 600 : 400)};
  padding: 0;
  margin: 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const TypePageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
`;

export const Text = styled.p<{
  color?: string;
  fontWeight?: number;
  fontSize?: string;
}>`
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || 400};
  margin: 0;
  color: ${(props) => props.color || "black"};
`;

export const TypesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: flex-start;
  position: sticky;
  top: 0;
`;

export const PokemonListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px;
`;

export const NoResultsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const MainContainer = styled.div`
  display: flex;
  border: 1px solid #f5693d;
  border-radius: 8px;
  margin: 40px;
  padding: 16px;
  max-height: 700px;
  width: 100%;
`;

export const StickySelectedTypeHeader = styled.div`
  position: sticky;
  top: 0;
  padding: 16px;
  background-color: #f5693d;
  border-radius: 8px;
  color: white;
`;

export const ListByTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
  gap: 8;
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: #f5693d;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const Row = styled.div<{ flexWrap?: boolean }>`
  display: flex;
  gap: 8px;
  flex-wrap: ${(props) => (props.flexWrap ? "wrap" : "nowrap")};
`;

export const Block = styled.div`
  display: block;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-right: 8px;
  &:focus {
    outline: none;
    border: 2px solid #f5693d;
  }
`;

export const SearchButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  background-color: #f5693d;
  color: #fff;
  width: 100px;
  &:hover {
    outline: none;
    border: 1px solid #f5693d;
    background-color: #fff;
    color: #f5693d;
  }
  &:active {
    outline: none;
    border: 1px solid #f5693d;
    background-color: #fff;
    color: #f5693d;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16;
  justify-content: space-between;
  width: 100%;
`;

export const VerticalDivider = styled.div`
  border-left: 1px solid #f5693d1a;
  height: 100%;
  margin-right: 16px;
`;

export const SearchPokemonContainer = styled.div`
  padding: 16px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 300px;
`;
