import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle` 
    :root {
      --dark-blue: ${({ theme }) => theme.darkBlue}; 
      --very-dark-blue-1: ${({ theme }) => theme.veryDarkBlue1}; 
      --very-dark-blue-2: ${({ theme }) => theme.veryDarkBlue2} ;
      --dark-gray: ${({ theme }) => theme.darkGray}; 
      --very-light-gray: ${({ theme }) => theme.veryLightGray};
      --white: ${({ theme }) => theme.white};

      --homepage-items: 14px;
      --detail-page: 16px;
      --title: 20px;
      --font-family: 'Nunito Sans';
      --weight-1: 300;
      --weight-2: 600;
      --weight-3: 800;
    }

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body,
    html {
      scroll-behavior: smooth;
      font-family: "nunito";
      font-size: var(--detail-page);
      background: var(--very-dark-blue-1);
    }
    
    a {
      text-decoration: none;
    }

    ul,
    li {
      list-style: none;
    }

    button,
    input, select {
      outline: none;
      border: none;
    }

    input, select, button {
      padding: 12px;
      width: 100%;
      border-radius: 5px;
    }

    button {
      padding: 12px;
      min-width: 10rem;
      box-shadow: var(--very-dark-blue-2) 0 0 2px 0;
      background: var(--dark-blue);
      color: var(--very-light-gray);
      font-size: var(--detail-page);

      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        cursor: pointer;
        background: var(--very-dark-blue-1);
        transition: all .3s;
      }
    }

    img {
      width: 100%;
    }

    span {
        font-weight: var(--Weight-2);
        color: var(--white);
    }

    p {
      font-weight: var(--Weight-1);
      color: var(--dark-gray);
      font-size: var(--homepage-items)

    }

    h1 {
        font-size: var(--title);
    }

    h2 {
      font-size: var(--detail-page);
      font-weight: var(--weight-3);
    }
`;

const Contents = styled.div`
  margin: 0 7rem 0 7rem;

  @media screen and (max-width: 1407px) {
    margin: 0 5rem 0 5rem;
  }

  @media screen and (min-width: 376px) and (max-width: 1440px) {
    margin: 0 2rem 0 2rem;
  }

  @media screen and (max-width: 375px) {
    margin: 0 1rem 0 1rem;
  }
`;

const CostumLink = styled(Link)`
  text-decoration: none;
  color: var(--white);
`;

const AppContainer = styled.div`
  color: var(--white);
`;

export { AppContainer, CostumLink, GlobalStyle, Contents };
