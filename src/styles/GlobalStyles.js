import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    background-color: ${({ theme }) => theme.background};
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fontBody};
    font-weight: 400;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    transition: background-color 0.35s ease, color 0.35s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fontHeading};
    font-weight: 700;
    margin: 0;
  }

  ::selection {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accentForeground};
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
    cursor: pointer;
  }

  input, textarea {
    font-family: inherit;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.muted};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.accent};
    border-radius: 9999px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.secondary};
  }

  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.accent},
      4px 4px 0px 0px ${({ theme }) => theme.accent};
    border-radius: 4px;
  }

  button:focus-visible,
  a:focus-visible,
  input:focus-visible,
  textarea:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.accent},
      4px 4px 0px 0px ${({ theme }) => theme.accent};
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  @media print {
    body {
      background: #ffffff !important;
      color: #1E293B !important;
      font-size: 11pt;
    }

    nav, footer, .no-print {
      display: none !important;
    }

    * {
      box-shadow: none !important;
      text-shadow: none !important;
      border-color: #ccc !important;
    }

    a[href]::after {
      content: " (" attr(href) ")";
      font-size: 0.8em;
      color: #64748B;
    }

    a[href^="tel:"]::after,
    a[href^="mailto:"]::after,
    a[href^="#"]::after {
      content: "";
    }

    section {
      page-break-inside: avoid;
    }

    h1, h2, h3 {
      page-break-after: avoid;
    }

    img {
      max-width: 100% !important;
    }
  }
`;
