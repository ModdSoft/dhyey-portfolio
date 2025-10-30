import React from "react";
import styled from "styled-components";
import { personalData } from "../../data/personal-data";

const FooterWrapper = styled.footer`
  position: relative;
  margin-top: 6rem;
  padding: 3rem 1.5rem;
  background: rgba(20, 14, 10, 0.82);
  backdrop-filter: blur(18px);
  border-top: 1px solid rgba(255, 211, 182, 0.2);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
`;

const Signature = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textPrimary};
`;

const ExternalLink = styled.a`
  color: ${({ theme }) => theme.accent};
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.25s ease;

  &:hover {
    opacity: 0.75;
  }
`;

const Disclaimer = styled.span`
  font-size: 0.8rem;
  opacity: 0.75;
`;

const Footer = () => (
  <FooterWrapper>
    <Signature>© {new Date().getFullYear()} Dhyey Modi — Portfolio</Signature>
    <span>
      Crafted with curiosity and intention. View the source on{" "}
      <ExternalLink
        href={personalData.portfoliogithub}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </ExternalLink>
      .
    </span>
    <span>Made with thoughtful engineering & a lot of ☕️.</span>
    <Disclaimer>
      Logos and trademarks belong to their respective owners.
    </Disclaimer>
  </FooterWrapper>
);

export default Footer;
