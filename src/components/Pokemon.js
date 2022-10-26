import React from "react";
import styled, { keyframes } from "styled-components";

const dance = keyframes`
  0%, 100% {
    transform: rotate(0)
  }
  25% {
    transform: rotate(-20deg)
  }
  75% {
    transform: rotate(20deg)
  }
`;

const CardImg = styled.img`
  width: 100px;
  height: 100px;
`;

const Card = styled.div`
  width: 160px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  border-radius: 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  cursor: pointer;
  &:hover ${CardImg} {
    animation: ${dance} 1s linear infinite 100ms;
  }
`;

const CardName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  &::first-letter {
    text-transform: uppercase;
  }
`;

function Pokemon({ pokemon }) {
  const { id, name, weight, height, sprites, types } = pokemon;
  const majorType = types[0].type.name;
  return (
    <>
      <Card className={majorType}>
        <CardImg src={sprites.other.dream_world.front_default} />
        <CardName>{name}</CardName>
      </Card>
    </>
  );
}

export default Pokemon;
