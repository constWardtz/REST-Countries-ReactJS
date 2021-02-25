import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0 1rem 0 1rem;
  background: var(--dark-blue);
  box-shadow: var(--dark-gray) 0 0px 1px 0px;
  input {
    color: var(--white);
    min-width: 25rem;
    background: none;
    @media screen and (max-width: 375px) {
      min-width: unset;
    }
    @media screen and (max-width: 788px) {
      min-width: unset;
    }
  }
`;
