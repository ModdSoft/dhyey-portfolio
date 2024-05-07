import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Theme";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/experience";
import Education from "./components/education";
import Work from "./components/work";
import ContactUs from "./components/contactus/contactus";
import Footer from "./components/footer";
import Projects from "./components/projects";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  padding: 0px 60px;

  @media (max-width: 767px) {
    padding: 0px 20px;
  }
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Body>
        <Navbar />
        <Home />
        <About />
        <Education />
        <Experience />
        <Work />
        <Projects />
        <ContactUs />
      </Body>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
