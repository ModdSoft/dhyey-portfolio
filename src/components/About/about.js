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
  SectionDescription,
} from "../common/Section";

const AboutLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 0.95fr) minmax(320px, 1.35fr);
  gap: clamp(2rem, 4vw, 3rem);
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const PortraitCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: clamp(20px, 3vw, 26px);
  background: ${({ theme }) => theme.panelGradient};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.cardGlow};
  display: flex;
  flex-direction: column;
  justify-content: end;
  min-height: clamp(360px, 45vw, 520px);
  padding: clamp(1.4rem, 3vw, 2rem);
`;

const PortraitImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ theme }) => (theme.mode === "light" ? 0.95 : 0.88)};
  filter: ${({ theme }) =>
    theme.mode === "light"
      ? "grayscale(0%) contrast(1.08) saturate(1.05)"
      : "grayscale(8%)"};
`;

const PortraitOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) =>
    theme.mode === "light"
      ? "linear-gradient(180deg, rgba(15, 23, 42, 0) 35%, rgba(15, 23, 42, 0.45) 78%, rgba(15, 23, 42, 0.7) 100%)"
      : theme.imageOverlay};
`;

const PortraitFooter = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  color: ${({ theme }) => theme.textPrimary};
  padding: 1rem 1.1rem;
  border-radius: 16px;
  background: ${({ theme }) =>
    theme.mode === "light"
      ? "linear-gradient(135deg, rgba(15, 23, 42, 0.35), rgba(15, 23, 42, 0.15))"
      : "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))"};
  border: 1px solid
    ${({ theme }) =>
      theme.mode === "light"
        ? "rgba(248, 250, 252, 0.3)"
        : "rgba(255, 255, 255, 0.12)"};
  box-shadow: ${({ theme }) =>
    theme.mode === "light"
      ? "0 10px 24px rgba(15, 23, 42, 0.18)"
      : "0 12px 30px rgba(0, 0, 0, 0.35)"};
  backdrop-filter: blur(8px);
`;

const PortraitName = styled.span`
  font-size: clamp(1.35rem, 2.2vw, 1.7rem);
  font-weight: 600;
  font-family: "Space Grotesk", "Manrope", sans-serif;
  color: ${({ theme }) =>
    theme.mode === "light" ? "#f8fafc" : theme.textPrimary};
`;

const PortraitRole = styled.span`
  font-size: 0.95rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) =>
    theme.mode === "light" ? "rgba(248, 250, 252, 0.75)" : theme.textMuted};
`;

const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const Pill = styled.span`
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1px solid
    ${({ theme }) =>
      theme.mode === "light"
        ? "rgba(248, 250, 252, 0.35)"
        : theme.border};
  background: ${({ theme }) =>
    theme.mode === "light" ? "rgba(248, 250, 252, 0.12)" : theme.surfaceAlt};
  font-size: 0.8rem;
  color: ${({ theme }) =>
    theme.mode === "light" ? "#f8fafc" : theme.textPrimary};
`;

const DetailsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const NarrativeCard = styled(motion.div)`
  border-radius: clamp(18px, 2.6vw, 22px);
  padding: clamp(1.6rem, 3vw, 2.2rem);
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: ${({ theme }) => theme.shadowSoft};
`;

const NarrativeHeading = styled.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const NarrativeParagraph = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.textSecondary};
`;

const BulletList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.65rem;
`;

const BulletItem = styled.li`
  position: relative;
  padding-left: 1.2rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.55rem;
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
    box-shadow: 0 0 0 5px ${({ theme }) => theme.accentSoft};
  }
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const HighlightCard = styled(motion.div)`
  border-radius: 16px;
  padding: 1.2rem;
  background: ${({ theme }) => theme.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const HighlightTitle = styled.span`
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

const HighlightDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 1.5;
`;

const About = () => {
  const proofPoints = [
    {
      title: "Product Adoption",
      detail: "10,000+ daily active users across the apps I’ve built.",
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

  return (
    <SectionWrapper id="about">
      <SectionIntro>
        <SectionEyebrow>About</SectionEyebrow>
        <SectionHeading
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          A concise snapshot of how I build data products that drive decisions.
        </SectionHeading>
        <SectionDescription
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          Analytics-first engineering with a bias for clarity, automation, and
          measurable business impact.
        </SectionDescription>
      </SectionIntro>

      <AboutLayout>
        <PortraitCard
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <PortraitImage src={Profile2} alt={personalData.name} />
          <PortraitOverlay />
          <PortraitFooter>
            <PortraitRole>Data Analyst · Software Engineer</PortraitRole>
            <PortraitName>{personalData.name}</PortraitName>
            <PillRow>
              <Pill>MS in Data Analytics</Pill>
              <Pill>Toronto · Canada</Pill>
              <Pill>Open to collaborations</Pill>
            </PillRow>
          </PortraitFooter>
        </PortraitCard>

        <DetailsColumn>
          <NarrativeCard
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <NarrativeHeading>At a glance</NarrativeHeading>
            <NarrativeParagraph>
              Data Analyst and Product Builder focused on analytics platforms,
              ML automation, and full-stack delivery.
            </NarrativeParagraph>
            <BulletList>
              <BulletItem>
                Turn complex datasets into executive-ready dashboards and
                narrative insights.
              </BulletItem>
              <BulletItem>
                Automate pipelines and quality checks to keep analytics reliable
                and scalable.
              </BulletItem>
              <BulletItem>
                Ship polished products from prototype to production with
                stakeholder alignment.
              </BulletItem>
            </BulletList>
          </NarrativeCard>

          <HighlightsGrid>
            {proofPoints.map((item, index) => (
              <HighlightCard
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <HighlightTitle>{item.title}</HighlightTitle>
                <HighlightDescription>{item.detail}</HighlightDescription>
              </HighlightCard>
            ))}
          </HighlightsGrid>
        </DetailsColumn>
      </AboutLayout>
    </SectionWrapper>
  );
};

export default About;
