import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { experiences } from "../../data/experience";
import {
  SectionWrapper,
  SectionIntro,
  SectionEyebrow,
  SectionHeading,
  SectionDescription,
} from "../common/Section";

const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(340px, 1.35fr) minmax(260px, 0.85fr);
  gap: clamp(2rem, 4vw, 3rem);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceList = styled.div`
  display: grid;
  gap: 1.4rem;
`;

const ExperienceCard = styled(motion.article)`
  border-radius: clamp(18px, 2.8vw, 24px);
  padding: clamp(1.6rem, 3vw, 2.3rem);
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadowSoft};
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(34, 211, 238, 0.12);
    opacity: 0;
    transition: opacity 0.35s ease;
    z-index: 0;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const ExperienceContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ExperienceHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: baseline;
  justify-content: space-between;
`;

const ExperienceRole = styled.h3`
  margin: 0;
  font-size: clamp(1.2rem, 2.2vw, 1.4rem);
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 600;
`;

const ExperienceCompany = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const ExperienceDuration = styled.span`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.textMuted};
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`;

const Tag = styled.span`
  padding: 0.45rem 0.95rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.accentSoft};
  color: ${({ theme }) => theme.accent};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
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
    box-shadow: 0 0 0 5px rgba(34, 211, 238, 0.1);
  }
`;

const SummaryPanel = styled(motion.div)`
  border-radius: clamp(18px, 3vw, 24px);
  padding: clamp(1.8rem, 3vw, 2.4rem);
  background: ${({ theme }) => theme.panelGradient};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.cardGlow};
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const SummaryTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const SummaryText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.65;
`;

const MetricRow = styled.div`
  display: grid;
  gap: 0.85rem;
`;

const Metric = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.95rem 1.1rem;
  border-radius: 16px;
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(148, 163, 184, 0.2);
`;

const MetricValue = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const MetricLabel = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

const Experience = () => {
  const contributions = {
    1: [
      "Built Android features with Kotlin and Jetpack components, keeping flows smooth and offline-first.",
      "Refactored UI layers into reusable modules, reducing feature delivery time for the team.",
      "Integrated REST APIs, tightened error handling, and profiled app performance to improve reliability.",
    ],
    2: [
      "Shipped full-stack features across React and Node.js, aligning closely with user requirements.",
      "Improved CI pipelines and testing coverage to make releases predictable.",
      "Documented deployment workflows and paired with senior engineers to tune system performance.",
    ],
  };

  const tagMap = {
    1: ["Android", "Kotlin", "Offline-first"],
    2: ["Full-stack", "React", "Node.js"],
  };

  const metrics = [
    { value: "2", label: "Engineering internships" },
    { value: "Full-stack", label: "Mobile · Web · APIs" },
    { value: "Reliable", label: "DX & quality focus" },
  ];

  return (
    <SectionWrapper id="experience">
      <SectionIntro>
        <SectionEyebrow>Experience</SectionEyebrow>
        <SectionHeading
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Shipping reliable software through hands-on engineering roles.
        </SectionHeading>
        <SectionDescription
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          These roles sharpened how I design features end to end, keep quality high,
          and collaborate across disciplines to deliver production-ready outcomes.
        </SectionDescription>
      </SectionIntro>

      <Layout>
        <ExperienceList>
          {experiences.map((item, index) => (
            <ExperienceCard
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ translateY: -8 }}
            >
              <ExperienceContent>
                <ExperienceHeader>
                  <div>
                    <ExperienceRole>{item.title}</ExperienceRole>
                    <ExperienceCompany>{item.company}</ExperienceCompany>
                  </div>
                  <ExperienceDuration>{item.duration}</ExperienceDuration>
                </ExperienceHeader>
                <TagRow>
                  {(tagMap[item.id] || ["Engineering"]).map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagRow>
                <BulletList>
                  {(contributions[item.id] || []).map((line) => (
                    <BulletItem key={line}>{line}</BulletItem>
                  ))}
                </BulletList>
              </ExperienceContent>
            </ExperienceCard>
          ))}
        </ExperienceList>

        <SummaryPanel
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <SummaryTitle>Engineering Highlights</SummaryTitle>
          <SummaryText>
            I moved from Android into full-stack delivery - owning code quality,
            deployment rituals, and the collaboration needed to keep shipping faster
            without sacrificing reliability.
          </SummaryText>
          <MetricRow>
            {metrics.map((metric) => (
              <Metric key={metric.label}>
                <MetricValue>{metric.value}</MetricValue>
                <MetricLabel>{metric.label}</MetricLabel>
              </Metric>
            ))}
          </MetricRow>
        </SummaryPanel>
      </Layout>
    </SectionWrapper>
  );
};

export default Experience;
