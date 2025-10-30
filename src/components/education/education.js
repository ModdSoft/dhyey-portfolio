import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { education } from "../../data/education";
import {
  SectionWrapper,
  SectionIntro,
  SectionEyebrow,
  SectionHeading,
  SectionDescription,
} from "../common/Section";

const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(320px, 1.3fr) minmax(260px, 0.9fr);
  gap: clamp(2rem, 4vw, 3rem);

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: clamp(1.5rem, 3vw, 2rem);
  display: flex;
  flex-direction: column;
  gap: 2.2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0.6rem;
    bottom: 0.6rem;
    left: clamp(0.35rem, 1vw, 0.6rem);
    width: 2px;
    background: linear-gradient(
      180deg,
      rgba(99, 102, 241, 0),
      rgba(99, 102, 241, 0.45),
      rgba(34, 211, 238, 0)
    );
  }
`;

const TimelineItem = styled(motion.article)`
  position: relative;
  padding: 1.6rem;
  border-radius: 18px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadowSoft};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  &::before {
    content: "";
    position: absolute;
    left: calc(-1.85rem);
    top: 1.6rem;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.body};
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.accent},
      ${({ theme }) => theme.accentAlt}
    );
    box-shadow: 0 0 0 6px rgba(99, 102, 241, 0.15);
  }
`;

const TimelineTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const TimelineInstitution = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const TimelineDuration = styled.span`
  font-size: 0.9rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

const CapsuleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.4rem;
`;

const Capsule = styled.span`
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.accentSoft};
  color: ${({ theme }) => theme.accent};
  font-size: 0.85rem;
  font-weight: 500;
`;

const SummaryCard = styled(motion.div)`
  border-radius: clamp(18px, 3vw, 24px);
  padding: clamp(1.8rem, 3vw, 2.5rem);
  background: ${({ theme }) => theme.panelGradient};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.cardGlow};
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const SummaryHeading = styled.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const SummaryText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.65;
`;

const SummaryList = styled.ul`
  display: grid;
  gap: 0.85rem;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const SummaryItem = styled.li`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textPrimary};

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.accent},
      ${({ theme }) => theme.accentAlt}
    );
    box-shadow: 0 0 0 6px rgba(99, 102, 241, 0.1);
  }
`;

const Education = () => {
  const focus = [
    "Machine learning experimentation with measurable business outcomes",
    "Advanced analytics & visualization for strategic storytelling",
    "Graduate research exploring predictive modelling and automation",
  ];

  const capsuleMap = {
    1: ["Graduate Program", "Data Analytics", "Niagara Falls"],
    2: ["Bachelor's Program", "Electronics", "Gujarat, India"],
  };

  return (
    <SectionWrapper id="education">
      <SectionIntro>
        <SectionEyebrow>Education</SectionEyebrow>
        <SectionHeading
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          A rigorous academic journey blending analytics, engineering, and
          leadership.
        </SectionHeading>
        <SectionDescription
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          Each program sharpened my ability to translate complex data into
          solutions that move organizations forward.
        </SectionDescription>
      </SectionIntro>

      <Layout>
        <Timeline>
          {education.map((item, index) => (
            <TimelineItem
              key={item.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, delay: index * 0.1, ease: "easeOut" }}
            >
              <TimelineDuration>{item.duration}</TimelineDuration>
              <TimelineTitle>{item.title}</TimelineTitle>
              <TimelineInstitution>{item.company}</TimelineInstitution>
              <CapsuleList>
                {(capsuleMap[item.id] || ["Innovation", "Leadership"]).map(
                  (label) => (
                    <Capsule key={label}>{label}</Capsule>
                  )
                )}
              </CapsuleList>
            </TimelineItem>
          ))}
        </Timeline>

        <SummaryCard
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <SummaryHeading>Academic Focus</SummaryHeading>
          <SummaryText>
            I invest my academic energy in blending technical depth with strategic
            thinking—building a toolkit that spans quantitative reasoning,
            engineering discipline, and human-centered storytelling.
          </SummaryText>
          <SummaryList>
            {focus.map((item) => (
              <SummaryItem key={item}>{item}</SummaryItem>
            ))}
          </SummaryList>
        </SummaryCard>
      </Layout>
    </SectionWrapper>
  );
};

export default Education;
