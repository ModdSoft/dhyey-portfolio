import React, { useState, useEffect, useCallback } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { DotGridBg, SquiggleDivider } from "./components/common/Decorations";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/skills";
import Journey from "./components/journey";
import Projects from "./components/projects";
import Blog from "./components/blog/Blog";
import ContactUs from "./components/contactus/contactus";
import Footer from "./components/footer";
import ResumeModal from "./components/resume/ResumeModal";
import useSectionAnalytics from "./hooks/useAnalytics";

const AppShell = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 0.35s ease;
`;

const Content = styled.main`
  position: relative;
  z-index: 1;
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 1.5rem 6rem;

  @media (max-width: 768px) {
    padding: 0 1.2rem 4rem;
  }
`;

const DividerWrapper = styled.div`
  padding: 3rem 0;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

function getInitialMode() {
  try {
    const stored = localStorage.getItem("theme-mode");
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    /* noop */
  }
  return "light";
}

function App() {
  const [themeMode, setThemeMode] = useState(getInitialMode);
  const [resumeOpen, setResumeOpen] = useState(false);

  const toggleTheme = useCallback(() => {
    setThemeMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      try {
        localStorage.setItem("theme-mode", next);
      } catch {
        /* noop */
      }
      return next;
    });
  }, []);

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute(
        "content",
        themeMode === "dark" ? "#0F172A" : "#FFFDF5",
      );
    }
  }, [themeMode]);

  useSectionAnalytics();

  const theme = themeMode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppShell>
        <DotGridBg />
        <Navbar
          themeMode={themeMode}
          toggleTheme={toggleTheme}
          onResumeOpen={() => setResumeOpen(true)}
        />
        <Content>
          <Home />
          <DividerWrapper>
            <SquiggleDivider />
          </DividerWrapper>
          <About />
          <DividerWrapper>
            <SquiggleDivider color={theme.secondary} />
          </DividerWrapper>
          <Skills />
          <DividerWrapper>
            <SquiggleDivider color={theme.tertiary} />
          </DividerWrapper>
          <Journey />
          <DividerWrapper>
            <SquiggleDivider color={theme.quaternary} />
          </DividerWrapper>
          <Projects />
          <DividerWrapper>
            <SquiggleDivider color={theme.accent} />
          </DividerWrapper>
          <Blog />
          <DividerWrapper>
            <SquiggleDivider />
          </DividerWrapper>
          <ContactUs />
        </Content>
        <Footer />
      </AppShell>
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </ThemeProvider>
  );
}

export default App;
