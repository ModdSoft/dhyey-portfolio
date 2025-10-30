import React, { useMemo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { skillsData } from "../../data/skills";
import { skillsImage } from "../../data/skill-image";
import {
  SectionWrapper,
  SectionIntro,
  SectionEyebrow,
  SectionHeading,
  SectionDescription,
} from "../common/Section";

const SkillsMatrix = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.15rem;
`;

const SkillsLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  color: ${({ theme }) => theme.textMuted};
  font-size: 0.85rem;
`;

const LegendItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};
`;

const ColorDot = styled.span`
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 50%;
  background: ${({ color }) => color};
`;

const SkillCard = styled(motion.div)`
  border-radius: 18px;
  padding: 1.2rem;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  min-height: 170px;
  position: relative;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadowSoft};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ accent }) => accent};
    opacity: 0.18;
    z-index: 0;
  }
`;

const SkillCardContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`;

const SkillIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.28);
  border: 1px solid rgba(148, 163, 184, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    filter: drop-shadow(0 8px 12px rgba(15, 23, 42, 0.35));
  }
`;

const SkillTitle = styled.span`
  font-size: 1.05rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const SkillCategory = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

const categoryPalette = {
  "Data & Intelligence": "linear-gradient(135deg, rgba(34, 211, 238, 0.22), transparent)",
  "Web Engineering": "linear-gradient(135deg, rgba(99, 102, 241, 0.22), transparent)",
  "Systems Programming": "linear-gradient(135deg, rgba(236, 72, 153, 0.2), transparent)",
  "Design Systems": "linear-gradient(135deg, rgba(167, 139, 250, 0.22), transparent)",
  "Platforms & Ops": "linear-gradient(135deg, rgba(45, 212, 191, 0.22), transparent)",
  Tooling: "linear-gradient(135deg, rgba(14, 165, 233, 0.22), transparent)",
};

const categoryColor = {
  "Data & Intelligence": "#22d3ee",
  "Web Engineering": "#6366f1",
  "Systems Programming": "#ec4899",
  "Design Systems": "#a855f7",
  "Platforms & Ops": "#2dd4bf",
  Tooling: "#0ea5e9",
};

const categoryLookup = {
  Python: "Data & Intelligence",
  PowerBi: "Data & Intelligence",
  MySQL: "Data & Intelligence",
  Javascript: "Web Engineering",
  Typescript: "Web Engineering",
  React: "Web Engineering",
  HTML: "Web Engineering",
  CSS: "Web Engineering",
  Tailwind: "Design Systems",
  MaterialUI: "Design Systems",
  C: "Systems Programming",
  "C++": "Systems Programming",
  Java: "Systems Programming",
  Git: "Platforms & Ops",
  Firebase: "Platforms & Ops",
};

const categoryOrder = [
  "Data & Intelligence",
  "Web Engineering",
  "Design Systems",
  "Systems Programming",
  "Platforms & Ops",
  "Tooling",
];

const fallbackIcon = "/logos/logo192.png";

const Skills = () => {
  const groupedSkills = useMemo(() => {
    const groups = new Map();
    skillsData.forEach((skill) => {
      const category = categoryLookup[skill] || "Tooling";
      if (!groups.has(category)) {
        groups.set(category, []);
      }
      groups.get(category).push(skill);
    });

    return categoryOrder
      .filter((category) => groups.has(category))
      .map((category) => ({
        category,
        items: groups.get(category),
      }));
  }, []);

  return (
    <SectionWrapper id="skills">
      <SectionIntro>
        <SectionEyebrow>Capabilities</SectionEyebrow>
        <SectionHeading
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          A multi-disciplinary stack crafted for high-impact data products.
        </SectionHeading>
        <SectionDescription
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          Combining analytics, engineering, and design tooling to build robust,
          insight-led experiences end to end.
        </SectionDescription>
        <SkillsLegend>
          {groupedSkills.map(({ category }) => (
            <LegendItem key={category}>
              <ColorDot color={categoryColor[category]} />
              {category}
            </LegendItem>
          ))}
        </SkillsLegend>
      </SectionIntro>

      <SkillsMatrix>
        {groupedSkills.flatMap(({ category, items }) =>
          items.map((skill, index) => (
            <SkillCard
              key={`${category}-${skill}`}
              accent={categoryPalette[category]}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
            >
              <SkillCardContent>
                <SkillIcon>
                  <img src={skillsImage(skill) || fallbackIcon} alt={skill} />
                </SkillIcon>
                <div>
                  <SkillTitle>{skill}</SkillTitle>
                  <SkillCategory>{category}</SkillCategory>
                </div>
              </SkillCardContent>
            </SkillCard>
          ))
        )}
      </SkillsMatrix>
    </SectionWrapper>
  );
};

export default Skills;
