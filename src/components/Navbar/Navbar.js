import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(18px);
  background: ${({ elevated }) =>
    elevated ? "rgba(5, 8, 22, 0.92)" : "rgba(5, 8, 22, 0.65)"};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  transition: background 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${({ elevated }) =>
    elevated ? "0 12px 40px rgba(2, 6, 23, 0.5)" : "none"};
`;

const Nav = styled.nav`
  max-width: 1180px;
  margin: 0 auto;
  padding: 1.2rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 1rem 1.2rem;
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
  background: ${({ theme }) => theme.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.border};
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  padding: 0.65rem 0.9rem;
  border-radius: 999px;
  font-size: 0.85rem;
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

const MenuButton = styled.button`
  display: none;
  background: ${({ theme }) => theme.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.border};
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
    background: rgba(5, 8, 22, 0.92);
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
  { label: "Education", to: "education" },
  { label: "Experience", to: "experience" },
  { label: "Work", to: "work" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contactus" },
];

const Navbar = () => {
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
