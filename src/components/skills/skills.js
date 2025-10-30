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
    box-shadow: 0 0 0 6px rgba(99, 102, 241, 0.12);
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
  background: rgba(99, 102, 241, 0.16);
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
  { value: "20+", label: "Dashboards & analytical apps delivered" },
  { value: "15+", label: "Production ML & automation initiatives" },
  { value: "8+", label: "End-to-end product launches" },
];

const skillGroups = [
  {
    title: "Data Intelligence & BI Storytelling",
    subtitle: "Analytics · Warehousing · Visualization",
    description:
      "Designing analytics ecosystems that move from raw data to insight with velocity and clarity.",
    highlights: [
      "Modelled complex datasets into analytics-ready layers, driving faster decision cycles.",
      "Built executive dashboards that translate KPIs into narrative insights for business partners.",
      "Operationalised quality checks and governance to keep self-serve data trustworthy.",
    ],
    tools: ["Python", "SQL", "Power BI", "Tableau", "dbt", "Snowflake"],
    accent: "linear-gradient(135deg, rgba(14, 165, 233, 0.2), transparent)",
  },
  {
    title: "AI, LLMOps & Automation",
    subtitle: "Generative AI · RAG · LLM Engineering",
    description:
      "Shaping intelligent assistants and knowledge engines that reduce manual legal and business workflows.",
    highlights: [
      "Built domain-specific LLM pipelines and retrieval layers to extract legal clauses at scale.",
      "Prototyped conversational copilots powered by LangChain, vector search, and custom prompts.",
      "Measured AI output quality with human-in-the-loop reviews to continually raise trust.",
    ],
    tools: ["LangChain", "OpenAI API", "Azure OpenAI", "RAG Pipelines", "Vector Stores", "Prompt Engineering"],
    accent: "linear-gradient(135deg, rgba(99, 102, 241, 0.24), transparent)",
  },
  {
    title: "Product Engineering & Delivery",
    subtitle: "Full-stack · Cloud · Ops",
    description:
      "Shipping resilient digital experiences that blend thoughtful UX with maintainable engineering.",
    highlights: [
      "Implemented full-stack web and mobile products across React, Node, and cloud-native services.",
      "Introduced CI/CD pipelines, testing practices, and release rituals that keep teams shipping confidently.",
      "Collaborated with stakeholders to translate requirements into roadmap-ready user stories.",
    ],
    tools: ["React", "TypeScript", "Node.js", "GraphQL", "Docker", "GitHub Actions"],
    accent: "linear-gradient(135deg, rgba(236, 72, 153, 0.22), transparent)",
  },
];

const toolkitSections = [
  {
    label: "Analytics Toolkit",
    items: ["Pandas", "NumPy", "scikit-learn", "Power Query", "SQL Server", "PostgreSQL"],
  },
  {
    label: "AI & Automation",
    items: ["LLMOps", "LangChain", "RAG Architectures", "Prompt Design", "Pinecone", "Azure AI Studio"],
  },
  {
    label: "Visualization & Storytelling",
    items: ["Power BI", "Tableau", "DAX", "Storyboarding", "Data Journalism"],
  },
  {
    label: "Engineering Craft",
    items: ["TypeScript", "React", "Next.js", "Node.js", "REST APIs", "Agile Delivery"],
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
        Full-stack data craftsmanship that blends analytics, AI, and product rigor.
      </SectionHeading>
      <SectionDescription
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      >
        I thrive at the intersection of quantitative insight, intelligent automation, and
        delightful user experiences—building end-to-end solutions that people rely on.
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
        Beyond the spotlight areas, I stay hands-on with the tools that keep delivery fast,
        collaborative, and production-ready.
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
