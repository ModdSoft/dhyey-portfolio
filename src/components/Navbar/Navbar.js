import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FiSun, FiMoon } from "react-icons/fi";

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.background};
  border-bottom: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  box-shadow: 0 4px 0px 0px ${({ theme }) => theme.border};
  transition: background-color 0.35s ease, border-color 0.35s ease,
    box-shadow 0.35s ease;
`;

const Nav = styled.nav`
  max-width: 1152px;
  margin: 0 auto;
  padding: 0.85rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0.75rem 1.2rem;
  }
`;

const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: ${({ theme }) => theme.fontHeading};
  font-size: 1.05rem;
  font-weight: 800;
  color: ${({ theme }) => theme.accentForeground};
  background: ${({ theme }) => theme.accent};
  padding: 0.45rem 1rem;
  border-radius: ${({ theme }) => theme.radiusFull};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  box-shadow: ${({ theme }) => theme.popShadowSm};
  cursor: pointer;
  transition: all 300ms ${({ theme }) => theme.bouncyEase};

  &:hover {
    transform: translate(-1px, -1px);
    box-shadow: ${({ theme }) => theme.popShadow};
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: none;
  }

  @media (max-width: 480px) {
    font-size: 0.88rem;
    padding: 0.4rem 0.8rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.35rem;

  @media (max-width: 960px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  padding: 0.5rem 0.85rem;
  border-radius: ${({ theme }) => theme.radiusFull};
  font-family: ${({ theme }) => theme.fontBody};
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.foreground};
  border: ${({ theme }) => theme.borderWidth} solid transparent;
  transition: all 300ms ${({ theme }) => theme.bouncyEase};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.tertiary};
    border-color: ${({ theme }) => theme.borderDark};
    box-shadow: ${({ theme }) => theme.popShadowSm};
    transform: translateY(-2px);
  }

  &.active {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accentForeground};
    border-color: ${({ theme }) => theme.borderDark};
    box-shadow: ${({ theme }) => theme.popShadowSm};
  }
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CircleBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.foreground};
  box-shadow: ${({ theme }) => theme.popShadowSm};
  transition: all 300ms ${({ theme }) => theme.bouncyEase};

  &:hover {
    background: ${({ theme }) => theme.tertiary};
    transform: translate(-1px, -1px) rotate(-8deg);
    box-shadow: ${({ theme }) => theme.popShadow};
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: none;
  }

  @media (max-width: 960px) {
    width: 34px;
    height: 34px;
  }
`;


const MenuButton = styled.button`
  display: none;
  background: ${({ theme }) => theme.card};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  border-radius: ${({ theme }) => theme.radiusMd};
  box-shadow: ${({ theme }) => theme.popShadowSm};
  padding: 0.55rem 0.65rem;
  color: ${({ theme }) => theme.foreground};
  transition: all 200ms ease;

  @media (max-width: 960px) {
    display: inline-flex;
    flex-direction: column;
    gap: 0.28rem;
  }

  span {
    width: 20px;
    height: 2.5px;
    background: currentColor;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  &.open span:nth-child(1) {
    transform: translateY(6.5px) rotate(45deg);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: translateY(-6.5px) rotate(-45deg);
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: none;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    gap: 0.4rem;
    margin: 0 1rem 1rem;
    padding: 1rem;
    border-radius: ${({ theme }) => theme.radiusLg};
    background: ${({ theme }) => theme.card};
    border: ${({ theme }) => theme.borderWidth} solid
      ${({ theme }) => theme.borderDark};
    box-shadow: ${({ theme }) => theme.popShadow};
  }
`;

const MobileLink = styled(Link)`
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.radiusMd};
  font-family: ${({ theme }) => theme.fontBody};
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.foreground};
  border: ${({ theme }) => theme.borderWidth} solid transparent;
  transition: all 200ms ease;
  cursor: pointer;

  &:hover,
  &.active {
    background: ${({ theme }) => theme.tertiary};
    border-color: ${({ theme }) => theme.borderDark};
  }
`;

const MobileAction = styled.button`
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.radiusMd};
  font-family: ${({ theme }) => theme.fontBody};
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.foreground};
  background: transparent;
  border: ${({ theme }) => theme.borderWidth} solid transparent;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: all 200ms ease;

  &:hover {
    background: ${({ theme }) => theme.tertiary};
    border-color: ${({ theme }) => theme.borderDark};
  }
`;

const navItems = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Journey", to: "journey" },
  { label: "Projects", to: "projects" },
  { label: "Writing", to: "writing" },
  { label: "Contact", to: "contactus" },
];

const Navbar = ({ themeMode, toggleTheme, onResumeOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <Header>
      <Nav>
        <Logo to="home" smooth duration={600} offset={-80}>
          Dhyey Modi
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
              spy
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
        <RightGroup>
          <CircleBtn
            type="button"
            onClick={toggleTheme}
            aria-label={
              themeMode === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            {themeMode === "dark" ? (
              <FiSun size={16} strokeWidth={2.5} />
            ) : (
              <FiMoon size={16} strokeWidth={2.5} />
            )}
          </CircleBtn>
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
        </RightGroup>
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
        <MobileAction type="button" onClick={toggleTheme}>
          {themeMode === "dark" ? (
            <FiSun size={16} strokeWidth={2.5} />
          ) : (
            <FiMoon size={16} strokeWidth={2.5} />
          )}
          {themeMode === "dark" ? "Light Mode" : "Dark Mode"}
        </MobileAction>
      </MobileMenu>
    </Header>
  );
};

export default Navbar;
