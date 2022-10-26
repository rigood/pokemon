import { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import Pokemon from "../components/Pokemon";

const AppContainer = styled.div`
  max-width: fit-content;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  width: 100%;
  margin: 80px 0;
  text-align: center;
`;

const PokemonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 50px;
  margin: 0 auto;
`;

function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12"
  );
  const [nextUrl, setNextUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const observer = useRef();

  const bottomRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && nextUrl) {
          setCurrentUrl(nextUrl);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, nextUrl]
  );

  const getPokemonList = async (results) => {
    results.map(async (item) => {
      const pokemon = await (await fetch(item.url)).json();
      setPokemonList((prevList) => {
        const newList = [...prevList, pokemon];
        return newList.sort((a, b) => (a.id > b.id ? 1 : -1));
      });
    });
    setLoading(false);
  };

  const getPokemonUrlList = async () => {
    setLoading(true);
    const data = await (await fetch(currentUrl)).json();
    setNextUrl(data.next);
    getPokemonList(data.results);
  };

  useEffect(() => {
    getPokemonUrlList();
  }, [currentUrl]);

  return (
    <AppContainer>
      <Title>Get your pokemon!</Title>
      <PokemonContainer>
        {pokemonList.map((pokemon) => {
          return <Pokemon key={pokemon.id} pokemon={pokemon} />;
        })}
      </PokemonContainer>
      <div>{loading && "Loading..."}</div>
      <div ref={bottomRef}></div>
    </AppContainer>
  );
}

export default Home;
