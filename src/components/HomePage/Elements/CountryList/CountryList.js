import styled from "styled-components";

export const CountryListContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(100px, auto)); */

  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
  @media screen and (max-width: 1215px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, auto));
  }
  @media screen and (max-width: 375px) {
    padding: 0.3rem;
  }
  div {
    display: grid;
    margin-bottom: 2rem;
    background: var(--dark-blue);
    box-shadow: var(--dark-gray) 0 0px 1px 0px;
    border-radius: 5px;
    max-width: 30rem;

    &:hover {
      cursor: pointer;
      box-shadow: var(--dark-gray) 0 0 4px 0;
      transform: scale(1);
      transition: all 0.2s;
    }

    ul:nth-child(1) {
      img {
        min-height: 9rem;
        max-height: 9rem;
      }
    }
    ul:nth-child(2) {
      padding: 1.2rem 1rem 1.2rem 1rem;
      line-height: 25px;
      h2 {
        margin-bottom: 0.7rem;
      }
    }
  }
`;
