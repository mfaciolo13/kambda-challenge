"use client";

import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";

import { PokemonProvider } from "@context/pokemon";
import StyledComponentsRegistry from "@registry";
import { Body, Html, MainContainer } from "@styles";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export default function RootLayout({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Html lang="en">
        <Body className={inter.className}>
          <StyledComponentsRegistry>
            <MainContainer>
              <PokemonProvider>{children}</PokemonProvider>
            </MainContainer>
          </StyledComponentsRegistry>
        </Body>
      </Html>
    </QueryClientProvider>
  );
}
