import styled from "styled-components";

export const Nav = styled.div`
  z-index: 99;
  display: grid;
  align-items: center;
  background: var(--dark-blue);
  height: 70px;
  box-shadow: var(--dark-gray) 0 0px 1px 0px;
  h1 {
    font-size: var(--title);
    @media screen and (max-width: 375px) {
      font-size: calc(var(--title) - 6px);
    }
  }

  @media screen and (max-width: 375px) {
    font-size: var(--homepage-items);
    font-weight: var(--weight-1);
  }
  div {
    div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      justify-content: space-between;

      span {
        width: auto;
        user-select: none;
        justify-self: end;
        display: grid;
        align-items: center;
        grid-template-columns: repeat(2, auto);
        grid-gap: 0.4rem;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
