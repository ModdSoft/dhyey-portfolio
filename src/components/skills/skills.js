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
import { slideUp, staggerContainer } from "../../styles/animations";

const CategoriesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const categoryColors = ["#8B5CF6", "#F472B6", "#FBBF24"];
const categoryShadows = [
  "6px 6px 0px 0px #8B5CF6",
  "6px 6px 0px 0px #F472B6",
  "6px 6px 0px 0px #FBBF24",
];

const CategoryCard = styled(motion.div)`
  padding: 1.4rem 1.6rem;
  border-radius: ${({ theme }) => theme.radiusLg};
  background: ${({ theme }) => theme.card};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  box-shadow: ${({ $shadow }) => $shadow};
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  transition: all 300ms ${({ theme }) => theme.bouncyEase};

  &:hover {
    transform: translate(-2px, -2px) rotate(-0.5deg);
  }

  @media (max-width: 768px) {
    box-shadow: ${({ theme }) => theme.popShadowSm};
    &:hover {
      transform: none;
    }
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const CategoryDot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  border: 2px solid ${({ theme }) => theme.borderDark};
  flex-shrink: 0;
`;

const CategoryTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fontHeading};
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.foreground};
`;

const CategorySubtitle = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({ theme }) => theme.mutedForeground};
  margin-top: -0.4rem;
`;

const chipColors = ["#8B5CF6", "#F472B6", "#FBBF24", "#34D399"];

const ChipSet = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`;

const Chip = styled.span`
  padding: 0.3rem 0.7rem;
  border-radius: ${({ theme }) => theme.radiusFull};
  background: ${({ $bg }) => $bg}15;
  color: ${({ $bg }) => $bg};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border: 1.5px solid ${({ $bg }) => $bg}45;
`;

const ToolkitRow = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.2rem;
  padding: 1.4rem 1.6rem;
  border-radius: ${({ theme }) => theme.radiusLg};
  background: ${({ theme }) => theme.card};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  box-shadow: ${({ theme }) => theme.cardShadow};

  @media (max-width: 768px) {
    box-shadow: ${({ theme }) => theme.popShadowSm};
  }
`;

const ToolkitColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ToolkitLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.mutedForeground};
`;

const skillCategories = [
  {
    title: "Data Intelligence & BI",
    subtitle: "Analytics, warehousing, and visualization",
    tools: ["Python", "SQL", "Power BI", "Tableau", "dbt", "Snowflake"],
  },
  {
    title: "AI & LLM Engineering",
    subtitle: "Generative AI, RAG, and automation",
    tools: [
      "LangChain",
      "OpenAI API",
      "Azure AI",
      "RAG Pipelines",
      "Prompt Engineering",
    ],
  },
  {
    title: "Product Engineering",
    subtitle: "Full-stack, cloud, and delivery",
    tools: [
      "React",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "Docker",
      "GitHub Actions",
    ],
  },
];

const toolkitSections = [
  {
    label: "Analytics",
    items: ["Pandas", "NumPy", "scikit-learn", "Power Query", "PostgreSQL"],
  },
  {
    label: "AI & Automation",
    items: ["LLMOps", "Pinecone", "Azure AI Studio", "TensorFlow"],
  },
  {
    label: "Visualization",
    items: ["DAX", "Storyboarding", "Data Journalism"],
  },
  {
    label: "Craft",
    items: ["Next.js", "REST APIs", "CI/CD", "Agile"],
  },
];

const springIn = { type: "spring", stiffness: 200, damping: 22 };

const Skills = () => (
  <SectionWrapper id="skills">
    <SectionIntro>
      <SectionEyebrow
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={springIn}
      >
        Capabilities
      </SectionEyebrow>
      <SectionHeading
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ...springIn, delay: 0.1 }}
      >
        Full-stack data craftsmanship — analytics, AI, and product rigor.
      </SectionHeading>
      <SectionDescription
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ ...springIn, delay: 0.15 }}
      >
        Quantitative insight meets intelligent automation meets delightful
        experiences.
      </SectionDescription>
    </SectionIntro>

    <CategoriesGrid
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {skillCategories.map((cat, index) => (
        <CategoryCard
          key={cat.title}
          $shadow={categoryShadows[index]}
          variants={slideUp}
        >
          <CategoryHeader>
            <CategoryDot $color={categoryColors[index]} />
            <CategoryTitle>{cat.title}</CategoryTitle>
          </CategoryHeader>
          <CategorySubtitle>{cat.subtitle}</CategorySubtitle>
          <ChipSet>
            {cat.tools.map((tool, ti) => (
              <Chip key={tool} $bg={chipColors[ti % chipColors.length]}>
                {tool}
              </Chip>
            ))}
          </ChipSet>
        </CategoryCard>
      ))}
    </CategoriesGrid>

    <ToolkitRow
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ ...springIn, delay: 0.1 }}
    >
      {toolkitSections.map((section, si) => (
        <ToolkitColumn key={section.label}>
          <ToolkitLabel>{section.label}</ToolkitLabel>
          <ChipSet>
            {section.items.map((item, ii) => (
              <Chip key={item} $bg={chipColors[(si + ii) % chipColors.length]}>
                {item}
              </Chip>
            ))}
          </ChipSet>
        </ToolkitColumn>
      ))}
    </ToolkitRow>
  </SectionWrapper>
);

export default Skills;
