import styled from "styled-components";

const Overview = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 4rem;
  padding: 1rem 0 2rem 0;

  @media screen and (max-width: 880px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: unset;

    div {
      img {
        min-width: 100%;
        max-height: 30rem;
      }
    }
  }

  div {
    display: grid;
    align-items: center;

    img {
      max-width: 38rem;
    }
  }
`;

const Column = styled.div`
  margin: 2rem 0 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 2rem;
  align-items: start;

  @media screen and (max-width: 670px) {
    grid-gap: 1rem;
    margin: 1rem 0 1rem 0;
    grid-template-rows: repeat(2, auto);
    grid-template-columns: unset;
  }

  ul {
    line-height: 30px;
  }
`;
const Buttons = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 1rem;
  align-items: center;

  h1 {
    margin-right: 1rem;
  }

  button {
    min-width: 3rem;
    padding: 7px 12px 7px 12px;
  }

  div {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 1rem;
  }
`;

export { Overview, Buttons, Column };
