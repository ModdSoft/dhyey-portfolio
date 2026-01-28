import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  SectionWrapper,
  SectionIntro,
  SectionEyebrow,
  SectionHeading,
  SectionDescription,
} from "../common/Section";

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const StatCard = styled(motion.div)`
  border-radius: 18px;
  padding: 1.1rem 1.4rem;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  box-shadow: ${({ theme }) => theme.shadowSoft};
`;

const StatValue = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const StatLabel = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

const GroupGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(1.4rem, 3vw, 2rem);
`;

const GroupCard = styled(motion.article)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding: clamp(1.8rem, 3vw, 2.4rem);
  border-radius: clamp(18px, 2.4vw, 26px);
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadowSoft};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ accent }) => accent};
    opacity: 0.2;
  }
`;

const GroupContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const GroupTitle = styled.h3`
  margin: 0;
  font-size: clamp(1.25rem, 2.2vw, 1.45rem);
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const GroupSubtitle = styled.span`
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

const GroupDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.65;
`;

const HighlightList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.65rem;
`;

const HighlightItem = styled.li`
  position: relative;
  padding-left: 1.2rem;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 1.55;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
    box-shadow: 0 0 0 6px rgba(34, 211, 238, 0.12);
  }
`;

const ChipSet = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Chip = styled.span`
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  background: rgba(34, 211, 238, 0.16);
  color: ${({ theme }) => theme.accent};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const ToolkitPanel = styled(motion.div)`
  margin-top: clamp(2rem, 3vw, 2.6rem);
  border-radius: clamp(18px, 2.6vw, 26px);
  padding: clamp(1.8rem, 3vw, 2.4rem);
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadowSoft};
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ToolkitHeading = styled.h4`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const ToolkitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.1rem;
`;

const ToolkitColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

const ToolkitLabel = styled.span`
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

const stats = [
  { value: "25+", label: "Production releases shipped" },
  { value: "6+", label: "End-to-end products delivered" },
  { value: "Multi-stack", label: "Web · Mobile · Cloud" },
];

const skillGroups = [
  {
    title: "Platform & Backend Engineering",
    subtitle: "Services · APIs · Reliability",
    description:
      "Designing services and data flows that stay fast, observable, and easy to evolve.",
    highlights: [
      "Build REST and GraphQL services with structured logging and defensive error handling.",
      "Design data models for PostgreSQL/MongoDB, with caching and queues where it counts.",
      "Instrument services with metrics and tracing to catch regressions before users do.",
    ],
    tools: ["Node.js", "Go", "PostgreSQL", "MongoDB", "Redis", "Docker"],
    accent: "linear-gradient(135deg, rgba(34, 211, 238, 0.16), transparent)",
  },
  {
    title: "Frontend Engineering & UX",
    subtitle: "Web · Mobile · Design systems",
    description:
      "Crafting responsive interfaces that stay performant and accessible across devices.",
    highlights: [
      "Ship React/Next.js experiences with reusable components and accessible patterns.",
      "Balance performance budgets with rich motion via Framer Motion and thoughtful asset loading.",
      "Evolve design systems and theming so teams move quickly without sacrificing polish.",
    ],
    tools: ["React", "Next.js", "TypeScript", "React Native", "Styled Components", "Framer Motion"],
    accent: "linear-gradient(135deg, rgba(168, 85, 247, 0.18), transparent)",
  },
  {
    title: "AI & Automation",
    subtitle: "LLM features · Workflows · Ops",
    description:
      "Bringing AI-assisted features into products with the guardrails they need to stay trustworthy.",
    highlights: [
      "Ship RAG-powered assistants with evaluation harnesses and feedback loops.",
      "Automate data refresh pipelines and background jobs to keep features fresh.",
      "Build task runners and integrations in Python/TypeScript to remove manual toil.",
    ],
    tools: ["LangChain", "OpenAI API", "Azure OpenAI", "FastAPI", "Python", "RAG Pipelines"],
    accent: "linear-gradient(135deg, rgba(59, 130, 246, 0.18), transparent)",
  },
];

const toolkitSections = [
  {
    label: "Backend & Infra",
    items: ["Node.js", "Go", "PostgreSQL", "MongoDB", "Redis", "Docker"],
  },
  {
    label: "Frontend & Mobile",
    items: ["React", "Next.js", "TypeScript", "React Native", "Styled-components", "Framer Motion"],
  },
  {
    label: "DevOps & Quality",
    items: ["GitHub Actions", "CI/CD", "Testing Automation", "Linting/Prettier", "Monitoring", "Technical Writing"],
  },
  {
    label: "AI & Data",
    items: ["LangChain", "Vector Search", "Prompt Engineering", "Python", "Power BI", "SQL"],
  },
];

const Skills = () => (
  <SectionWrapper id="skills">
    <SectionIntro>
      <SectionEyebrow>Capabilities</SectionEyebrow>
      <SectionHeading
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Software engineering toolkit built to ship and scale products.
      </SectionHeading>
      <SectionDescription
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      >
        I design APIs, craft interfaces, and wire up automation so features move from
        idea to production with confidence - and keep performing once they’re live.
      </SectionDescription>
    </SectionIntro>

    <StatsRow>
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
          whileHover={{ translateY: -4 }}
        >
          <StatValue>{stat.value}</StatValue>
          <StatLabel>{stat.label}</StatLabel>
        </StatCard>
      ))}
    </StatsRow>

    <GroupGrid>
      {skillGroups.map((group, index) => (
        <GroupCard
          key={group.title}
          accent={group.accent}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, delay: index * 0.1, ease: "easeOut" }}
          whileHover={{ translateY: -6 }}
        >
          <GroupContent>
            <div>
              <GroupSubtitle>{group.subtitle}</GroupSubtitle>
              <GroupTitle>{group.title}</GroupTitle>
            </div>
            <GroupDescription>{group.description}</GroupDescription>
            <HighlightList>
              {group.highlights.map((item) => (
                <HighlightItem key={item}>{item}</HighlightItem>
              ))}
            </HighlightList>
            <ChipSet>
              {group.tools.map((tool) => (
                <Chip key={tool}>{tool}</Chip>
              ))}
            </ChipSet>
          </GroupContent>
        </GroupCard>
      ))}
    </GroupGrid>

    <ToolkitPanel
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <ToolkitHeading>Expanded toolkit</ToolkitHeading>
      <SectionDescription
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        Beyond the spotlight areas, these are the stacks I lean on to keep delivery fast,
        observable, and maintainable.
      </SectionDescription>
      <ToolkitGrid>
        {toolkitSections.map((section) => (
          <ToolkitColumn key={section.label}>
            <ToolkitLabel>{section.label}</ToolkitLabel>
            <ChipSet>
              {section.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ChipSet>
          </ToolkitColumn>
        ))}
      </ToolkitGrid>
    </ToolkitPanel>
  </SectionWrapper>
);

export default Skills;
