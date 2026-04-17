import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { personalData } from "../../data/personal-data";
import Profile2 from "./profile_pic.png";
import {
  SectionWrapper,
  SectionIntro,
  SectionEyebrow,
  SectionHeading,
} from "../common/Section";
import { slideUp, staggerContainer } from "../../styles/animations";

const AboutCard = styled(motion.div)`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  align-items: start;
  padding: clamp(1.6rem, 3vw, 2.4rem);
  border-radius: ${({ theme }) => theme.radiusLg};
  background: ${({ theme }) => theme.card};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  box-shadow: ${({ theme }) => theme.cardShadow};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    box-shadow: ${({ theme }) => theme.popShadowSm};
  }
`;

const PhotoWrap = styled.div`
  width: clamp(120px, 14vw, 160px);
  height: clamp(120px, 14vw, 160px);
  border-radius: 24px 24px 24px 4px;
  overflow: hidden;
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  box-shadow: ${({ theme }) => theme.cardShadowViolet};
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    box-shadow: ${({ theme }) => theme.popShadowSm};
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BioContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Name = styled.h3`
  font-family: ${({ theme }) => theme.fontHeading};
  font-size: clamp(1.3rem, 2.2vw, 1.6rem);
  font-weight: 800;
  color: ${({ theme }) => theme.foreground};
  margin: 0;
`;

const Role = styled.span`
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.mutedForeground};
`;

const Bio = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.mutedForeground};
`;

const FactsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Fact = styled.span`
  padding: 0.3rem 0.75rem;
  border-radius: ${({ theme }) => theme.radiusFull};
  border: 1.5px solid ${({ $color }) => $color}50;
  background: ${({ $color }) => $color}12;
  color: ${({ $color }) => $color};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
`;

const HighlightsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const highlightShadows = [
  "6px 6px 0px 0px #8B5CF6",
  "6px 6px 0px 0px #F472B6",
  "6px 6px 0px 0px #FBBF24",
  "6px 6px 0px 0px #34D399",
];

const highlightAccents = ["#8B5CF6", "#F472B6", "#FBBF24", "#34D399"];

const HighlightCard = styled(motion.div)`
  padding: 1.2rem;
  border-radius: ${({ theme }) => theme.radiusMd};
  background: ${({ theme }) => theme.card};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  box-shadow: ${({ $shadow }) => $shadow};
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  transition: all 300ms ${({ theme }) => theme.bouncyEase};

  &:hover {
    transform: translate(-2px, -2px);
  }

  @media (max-width: 768px) {
    box-shadow: ${({ theme }) => theme.popShadowSm};
    &:hover {
      transform: none;
    }
  }
`;

const HighlightTitle = styled.span`
  font-family: ${({ theme }) => theme.fontHeading};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ $accent }) => $accent};
`;

const HighlightDetail = styled.span`
  font-size: 0.92rem;
  color: ${({ theme }) => theme.foreground};
  line-height: 1.5;
  font-weight: 500;
`;

const springIn = { type: "spring", stiffness: 200, damping: 22 };

const proofPoints = [
  {
    title: "Product Adoption",
    detail: "10,000+ daily active users across the apps I've built.",
  },
  {
    title: "Analytics Impact",
    detail: "10+ dashboards and analytical apps delivered end-to-end.",
  },
  {
    title: "ML Automation",
    detail: "5+ ML and automation initiatives shipped with measurable lift.",
  },
  {
    title: "Core Stack",
    detail: "Python, SQL, Power BI, React, Node.js, dbt, Snowflake.",
  },
];

const About = () => (
  <SectionWrapper id="about">
    <SectionIntro>
      <SectionEyebrow
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={springIn}
      >
        About
      </SectionEyebrow>
      <SectionHeading
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ...springIn, delay: 0.1 }}
      >
        Analytics-first builder with a bias for clarity and measurable impact.
      </SectionHeading>
    </SectionIntro>

    <AboutCard
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ ...springIn, delay: 0.1 }}
    >
      <PhotoWrap>
        <Photo src={Profile2} alt={personalData.name} />
      </PhotoWrap>
      <BioContent>
        <div>
          <Role>Data Analyst &middot; Software Engineer</Role>
          <Name>{personalData.name}</Name>
        </div>
        <Bio>
          Data Analyst and Product Builder focused on analytics platforms, ML
          automation, and full-stack delivery. I turn complex datasets into
          executive-ready dashboards, automate pipelines to keep analytics
          reliable, and ship polished products from prototype to production.
        </Bio>
        <FactsRow>
          <Fact $color="#8B5CF6">MS in Data Analytics</Fact>
          <Fact $color="#F472B6">Toronto, Canada</Fact>
          <Fact $color="#FBBF24">Open to collaborations</Fact>
          <Fact $color="#34D399">3+ years experience</Fact>
        </FactsRow>
      </BioContent>
    </AboutCard>

    <HighlightsGrid
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {proofPoints.map((item, index) => (
        <HighlightCard
          key={item.title}
          $shadow={highlightShadows[index]}
          variants={slideUp}
        >
          <HighlightTitle $accent={highlightAccents[index]}>
            {item.title}
          </HighlightTitle>
          <HighlightDetail>{item.detail}</HighlightDetail>
        </HighlightCard>
      ))}
    </HighlightsGrid>
  </SectionWrapper>
);

export default About;
