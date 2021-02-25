import styled from "styled-components";

const SelectContainer = styled.div`
  select,
  option {
    background: var(--dark-blue);
    color: var(--white);
    max-width: 12rem;
    box-shadow: var(--dark-gray) 0 0px 1px 0px;
  }

  @media screen and (max-width: 375px) {
    max-width: 10rem;
  }
  @media screen and (max-width: 788px) {
    max-width: 13rem;
  }
`;

export { SelectContainer };
