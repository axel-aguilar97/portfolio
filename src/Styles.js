import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

/* Global Styles */
export const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #212529;
    color: #ffffff;
    box-shadow: inset 0 0 80px rgba(0, 0, 0, .5);
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    text-shadow: 0 1px 2px rgba(0, 0, 0, .5);
    text-align: center;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  h1,
  h3 {
    margin-top: 0;
    margin-bottom: 8px;
    font-weight: 500;
    line-height: 1.2;
  }

  h1 {
    font-size: calc(1.375rem + 1.5vw);
  }

  h3 {
    font-size: calc(1.3rem + 0.6vw);
  }

  p {
    margin-top: 0;
    margin-bottom: 16px;
  }

  a {
    color: #0d6efd;
    text-decoration: underline;

    &:hover {
      color: #0a58ca;
    }

    &:not([href]):not([class]),
    &:not([href]):not([class]):hover {
      color: inherit;
      text-decoration: none;
    }
  }
  
  @media (min-width: 1200px) {
    h1 {
      font-size: 40px;
    }

    h3 {
      font-size: 28px;
    }
  }
`;

export const DivGlobal = styled.div`
  padding: 16px;
  max-width: 750px;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
`;

/* Header Styles */
export const HeaderGlobal = styled.header`
  margin-bottom: auto;
`;

export const HeaderH3Title = styled.h3`
  margin-bottom: 0;

  @media (min-width: 768px) {
    float: left;
  }
`;

export const HeaderNavLink = styled(Link)`
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 0;
  padding-left: 0;
  display: block;
  font-size: 20px;
  font-weight: 700;
  color: #0d6efd;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const HeaderNav = styled.nav`
  margin-bottom: 0;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;

  ${HeaderNavLink} {
    color: rgba(255, 255, 255, 0.5);

    + ${HeaderNavLink} {
      margin-left: 16px;
    }

    &:hover,
    &:focus {
      color: rgba(255, 255, 255, 1.0);
    }
  }

  @media (min-width: 768px) {
    float: right;
  }
`;

/* Main Styles */
export const MainGlobal = styled.main`
  padding-right: 16px;
  padding-left: 16px;
`;

/* Footer Styles */
export const FooterGlobal = styled.footer`
  margin-top: auto;
  color: rgba(255, 255, 255, 0.5);
`;
