import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    background-color: ${({ theme }) => theme.body};
  }

  body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.textPrimary};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  ::selection {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.body};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    font-family: inherit;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: rgba(15, 23, 42, 0.35);
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.accent};
    border-radius: 999px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.accentAlt};
  }
`;
