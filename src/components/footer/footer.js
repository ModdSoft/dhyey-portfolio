import React from "react";
import styled from "styled-components";
import { personalData } from "../../data/personal-data";

const FooterWrapper = styled.footer`
  position: relative;
  overflow: hidden;
  margin-top: 4rem;
  padding: 3rem 1.5rem;
  background: ${({ theme }) => theme.card};
  border-top: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  text-align: center;
`;

const DecoCircle = styled.div`
  position: absolute;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  background: ${({ $color }) => $color};
  opacity: 0.15;
  pointer-events: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Signature = styled.span`
  font-family: ${({ theme }) => theme.fontHeading};
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.foreground};
`;

const SubText = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.mutedForeground};
  line-height: 1.6;
`;

const ExternalLink = styled.a`
  color: ${({ theme }) => theme.accent};
  font-weight: 700;
  text-decoration: none;
  border-bottom: 2px solid ${({ theme }) => theme.accent};
  transition: all 200ms ease;

  &:hover {
    color: ${({ theme }) => theme.secondary};
    border-color: ${({ theme }) => theme.secondary};
  }
`;

const Disclaimer = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.mutedForeground};
  opacity: 0.7;
  margin-top: 0.5rem;
`;

const Footer = () => (
  <FooterWrapper>
    <DecoCircle
      $color="#8B5CF6"
      size="100px"
      style={{ top: "-30px", left: "8%" }}
    />
    <DecoCircle
      $color="#F472B6"
      size="60px"
      style={{ top: "10px", right: "12%" }}
    />
    <DecoCircle
      $color="#FBBF24"
      size="40px"
      style={{ bottom: "-10px", left: "35%" }}
    />

    <Signature>
      &copy; {new Date().getFullYear()} Dhyey Modi &mdash; Portfolio
    </Signature>
    <SubText>
      Crafted with curiosity and intention. View the source on{" "}
      <ExternalLink
        href={personalData.portfoliogithub}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </ExternalLink>
      .
    </SubText>
    <SubText>Made with thoughtful engineering &amp; a lot of coffee.</SubText>
    <Disclaimer>
      Logos and trademarks belong to their respective owners.
    </Disclaimer>
  </FooterWrapper>
);

export default Footer;
