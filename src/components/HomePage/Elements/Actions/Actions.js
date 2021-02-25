import styled from "styled-components";

export const ActionsContainer = styled.div`
  margin-top: ${({ top }) => (top ? top : "4rem")};

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 375px) {
    margin-top: 1rem;
    justify-content: unset;

    display: grid;
    grid-gap: 1rem;
  }

  @media screen and (max-width: 788px) {
    margin-top: 1rem;
    justify-content: unset;

    display: grid;
    grid-gap: 1rem;
  }
`;
