import { useEffect, useMemo, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Journey from "./components/journey";
import ContactUs from "./components/contactus/contactus";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Skills from "./components/skills";

const AppShell = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.body};
`;

const BackgroundGlimmer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image: ${({ theme }) => theme.heroGradient};
  opacity: 0.85;
  z-index: 0;
`;

const GridOverlay = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-size: 120px 120px;
  background-image:
    linear-gradient(${({ theme }) => theme.gridLine} 1px, transparent 1px),
    linear-gradient(
      90deg,
      ${({ theme }) => theme.gridLine} 1px,
      transparent 1px
    );
  mask-image: radial-gradient(circle at center, black 0%, transparent 70%);
  z-index: 0;
`;

const Content = styled.main`
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.5rem 6rem;

  @media (max-width: 768px) {
    padding: 0 1.2rem 4rem;
  }
`;

const SectionDivider = styled.div`
  height: 1px;
  margin: 3rem 0;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.border},
    transparent
  );

  @media (max-width: 768px) {
    margin: 2.2rem 0;
  }
`;

function App() {
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem("theme", themeMode);
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  const theme = useMemo(
    () => (themeMode === "dark" ? darkTheme : lightTheme),
    [themeMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppShell>
        <BackgroundGlimmer />
        <GridOverlay />
        <Navbar
          themeMode={themeMode}
          onToggleTheme={() =>
            setThemeMode((prev) => (prev === "dark" ? "light" : "dark"))
          }
        />
        <Content>
          <Home />
          <SectionDivider />
          <About />
          <SectionDivider />
          {/* <Skills /> */}
          <SectionDivider />
          <Journey />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <ContactUs />
        </Content>
        <Footer />
      </AppShell>
    </ThemeProvider>
  );
}

export default App;
