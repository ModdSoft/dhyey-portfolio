import React from "react";
import styled from "styled-components";
import FastMarquee from "react-fast-marquee";

const MarqueeWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 1rem 0;
  border-top: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  border-bottom: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  background: ${({ theme }) => theme.card};
  overflow: hidden;
`;

const chipColors = ["#8B5CF6", "#F472B6", "#FBBF24", "#34D399"];

const SkillPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 1rem;
  margin: 0 0.5rem;
  border-radius: ${({ theme }) => theme.radiusFull};
  background: ${({ $bg }) => $bg}15;
  color: ${({ $bg }) => $bg};
  font-family: ${({ theme }) => theme.fontHeading};
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border: 1.5px solid ${({ $bg }) => $bg}50;
  white-space: nowrap;
`;

const Dot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  margin: 0 1rem;
  flex-shrink: 0;
`;

const skills = [
  "Python",
  "SQL",
  "Power BI",
  "Tableau",
  "Pandas",
  "scikit-learn",
  "TensorFlow",
  "dbt",
  "Snowflake",
  "LangChain",
  "OpenAI API",
  "Azure",
  "RAG Pipelines",
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "GraphQL",
  "Docker",
  "CI/CD",
  "PostgreSQL",
  "Prompt Engineering",
];

const SkillsMarquee = () => (
  <MarqueeWrapper>
    <FastMarquee speed={35} gradient={false} pauseOnHover>
      {skills.map((skill, i) => (
        <React.Fragment key={skill}>
          <SkillPill $bg={chipColors[i % chipColors.length]}>{skill}</SkillPill>
          {i < skills.length - 1 && (
            <Dot $color={chipColors[(i + 1) % chipColors.length]} />
          )}
        </React.Fragment>
      ))}
    </FastMarquee>
  </MarqueeWrapper>
);

export default SkillsMarquee;
