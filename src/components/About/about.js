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
  opacity: 0.88;
  filter: grayscale(8%);
`;

const PortraitOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
      180deg,
      rgba(15, 23, 42, 0.15),
      rgba(15, 23, 42, 0.8)
    ),
    radial-gradient(circle at top right, rgba(34, 211, 238, 0.24), transparent);
`;

const PortraitFooter = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  color: ${({ theme }) => theme.textPrimary};
`;

const PortraitName = styled.span`
  font-size: clamp(1.35rem, 2.2vw, 1.7rem);
  font-weight: 600;
  font-family: "Space Grotesk", "Inter", sans-serif;
`;

const PortraitRole = styled.span`
  font-size: 0.95rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const Pill = styled.span`
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.3);
  background: rgba(15, 23, 42, 0.6);
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textPrimary};
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
  const narrative = [
    personalData.description,
    personalData.goals,
    personalData.extra_curricular,
    personalData.extra_curricular2,
    personalData.connect,
  ];

  const focusAreas = [
    "Systems & API design for performant services",
    "Frontend engineering with React and TypeScript",
    "Cloud-native delivery, CI/CD, and observability",
    "AI-assisted product features with safe guardrails",
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
          Designing software that balances reliability, velocity, and user delight.
        </SectionHeading>
        <SectionDescription
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          From architecture to delivery, I build systems that hold up in
          production - translating complex ideas into intuitive experiences that
          teams can ship and scale.
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
            <PortraitRole>Software Engineer · Full-stack</PortraitRole>
            <PortraitName>{personalData.name}</PortraitName>
            <PillRow>
              <Pill>M.Tech in Data Analytics</Pill>
              <Pill>Mississauga · Canada</Pill>
              <Pill>Open to engineering roles</Pill>
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
            <NarrativeHeading>A product-minded software engineer</NarrativeHeading>
            {narrative.map((item, index) => (
              <NarrativeParagraph key={index}>{item}</NarrativeParagraph>
            ))}
          </NarrativeCard>

          <HighlightsGrid>
            {focusAreas.map((item, index) => (
              <HighlightCard
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              >
                <HighlightTitle>Focus Area</HighlightTitle>
                <HighlightDescription>{item}</HighlightDescription>
              </HighlightCard>
            ))}
          </HighlightsGrid>
        </DetailsColumn>
      </AboutLayout>
    </SectionWrapper>
  );
};

export default About;
