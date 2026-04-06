import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FiMoon, FiSun } from "react-icons/fi";

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(18px);
  background: ${({ elevated, theme }) =>
    elevated ? theme.navBackdropElevated : theme.navBackdrop};
  border-bottom: 1px solid ${({ theme }) => theme.borderStrong};
  transition: background 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${({ elevated, theme }) =>
    elevated ? theme.navShadow : theme.navShadowSoft};
`;

const Nav = styled.nav`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0.9rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accentAlt};
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.navPill};
  border: 1px solid ${({ theme }) => theme.navPillBorder};
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  padding: 0.55rem 0.75rem;
  border-radius: 999px;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textSecondary};
  transition: color 0.25s ease, background 0.25s ease, transform 0.25s ease;
  cursor: pointer;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.accent};
    background: ${({ theme }) => theme.accentSoft};
    transform: translateY(-2px);
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const ThemeToggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.navPillBorder};
  background: ${({ theme }) => theme.navPill};
  color: ${({ theme }) => theme.textPrimary};
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.25s ease, color 0.25s ease, border 0.25s ease,
    background 0.25s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
    background: ${({ theme }) => theme.accentSoft};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: ${({ theme }) => theme.navPill};
  border: 1px solid ${({ theme }) => theme.navPillBorder};
  border-radius: 12px;
  padding: 0.6rem 0.7rem;
  cursor: pointer;
  color: ${({ theme }) => theme.textPrimary};

  @media (max-width: 900px) {
    display: inline-flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  span {
    width: 20px;
    height: 2px;
    background: currentColor;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  &.open span:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    gap: 0.4rem;
    margin: 0 1.2rem 1.2rem;
    padding: 1rem;
    border-radius: 20px;
    background: ${({ theme }) => theme.navBackdropElevated};
    border: 1px solid ${({ theme }) => theme.border};
  }
`;

const MobileLink = styled(Link)`
  padding: 0.75rem 1rem;
  border-radius: 14px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textPrimary};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: background 0.25s ease, color 0.25s ease;

  &:hover,
  &.active {
    background: ${({ theme }) => theme.accentSoft};
    color: ${({ theme }) => theme.accent};
  }
`;

const navItems = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Journey", to: "journey" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contactus" },
];

const Navbar = ({ themeMode, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setElevated(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <Header elevated={elevated}>
      <Nav>
        <Logo to="home" smooth duration={600} offset={-80}>
          {"<Dhyey Modi />"}
        </Logo>
        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              smooth
              duration={600}
              offset={-80}
              activeClass="active"
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
        <NavActions>
          <ThemeToggle type="button" onClick={onToggleTheme} aria-label="Toggle theme">
            {themeMode === "dark" ? <FiSun size={14} /> : <FiMoon size={14} />}
            {themeMode === "dark" ? "Light" : "Dark"}
          </ThemeToggle>
          <MenuButton
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={menuOpen ? "open" : ""}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </MenuButton>
        </NavActions>
      </Nav>
      <MobileMenu open={menuOpen}>
        {navItems.map((item) => (
          <MobileLink
            key={item.to}
            to={item.to}
            smooth
            duration={600}
            offset={-70}
            onClick={handleNavClick}
            activeClass="active"
          >
            {item.label}
          </MobileLink>
        ))}
      </MobileMenu>
    </Header>
  );
};

export default Navbar;
