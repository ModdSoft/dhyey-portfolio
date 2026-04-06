import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineBriefcase } from "react-icons/hi2";
import { FiChevronDown } from "react-icons/fi";
import {
  SectionWrapper,
  SectionIntro,
  SectionEyebrow,
  SectionHeading,
  SectionDescription,
} from "../common/Section";

const Timeline = styled.div`
  position: relative;
  display: grid;
  gap: clamp(2rem, 4vw, 2.8rem);
  padding: 0.5rem 0 1rem;
  max-width: 1100px;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.border};
  }

  @media (max-width: 960px) {
    &::before {
      left: 1.1rem;
      transform: none;
    }
  }
`;

const TimelineRow = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(1.6rem, 3vw, 2.6rem);
  align-items: flex-start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding-left: 2.6rem;
  }
`;

const Node = styled.span`
  position: absolute;
  top: 1.6rem;
  left: 50%;
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: ${({ theme }) => theme.accent};
  box-shadow: 0 0 0 6px ${({ theme }) => theme.accentSoft};
  transform: translateX(-50%);
  z-index: 2;

  @media (max-width: 960px) {
    left: 1.1rem;
    transform: none;
  }
`;

const CardSlot = styled.div`
  grid-column: ${({ align }) => (align === "left" ? "1" : "2")};
  justify-self: ${({ align }) => (align === "left" ? "end" : "start")};

  @media (max-width: 960px) {
    grid-column: 1;
    justify-self: stretch;
  }
`;

const Card = styled(motion.article)`
  max-width: 520px;
  border-radius: 18px;
  padding: 1.2rem 1.4rem;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) =>
    theme.mode === "light"
      ? "0 14px 28px rgba(15, 23, 42, 0.08)"
      : theme.shadowSoft};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const IconWrap = styled.span`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.accentSoft};
  color: ${({ theme }) => theme.accent};
  font-size: 1.2rem;
`;

const DateText = styled.span`
  font-size: 0.82rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

const Badge = styled.span`
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: ${({ theme, tone }) =>
    tone === "origin" ? theme.accentSoft : theme.accentSoftAlt};
  color: ${({ theme, tone }) =>
    tone === "origin" ? theme.accent : theme.accentAlt};
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 600;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ToggleButton = styled.button`
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surfaceAlt};
  color: ${({ theme }) => theme.textMuted};
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  font-size: 0.9rem;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  justify-content: center;

  svg {
    transition: transform 0.2s ease;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textPrimary};
`;

const Subtitle = styled.span`
  font-size: 0.98rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const Summary = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  font-size: 0.95rem;
`;

const BulletList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.55rem;
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

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.accentSoftMuted};
  color: ${({ theme }) => theme.textPrimary};
  font-size: 0.75rem;
`;

const StoryLine = styled.p`
  margin: 0;
  padding-top: 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textMuted};
  font-size: 0.9rem;
  font-style: italic;
`;

const CardBody = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  overflow: hidden;
`;

const timelineItems = [
  {
    id: "lab",
    type: "Origin",
    order: 1,
    date: "Early Years",
    title: "Computer Lab Curiosity",
    subtitle: "First time code felt like magic",
    icon: <HiOutlineAcademicCap />,
    summary: "The spark that made tech feel like a playground, not a textbook.",
    bullets: [
      "Stayed back to explore small programs and logic puzzles.",
      "Discovered how tiny changes can transform outcomes.",
    ],
    tags: ["Curiosity", "Logic"],
    story:
      "That first lab session flipped a switch - I wanted to know how everything worked.",
  },
  {
    id: "gaming",
    type: "Origin",
    order: 2,
    date: "Early Years",
    title: "Gaming to Systems Thinking",
    subtitle: "Strategy, feedback loops, optimization",
    icon: <HiOutlineAcademicCap />,
    summary: "Gaming taught me to think in systems, constraints, and trade-offs.",
    bullets: [
      "Became obsessed with tuning strategies and optimizing outcomes.",
      "Started thinking in loops, inputs, and outputs.",
    ],
    tags: ["Systems", "Optimization"],
    story:
      "Games showed me that great results come from smart systems, not luck.",
  },
  {
    id: "nobel",
    type: "Work",
    order: 7,
    date: "2025 — Present",
    title: "Data Analyst Intern",
    subtitle: "Nobel AI Legal",
    icon: <HiOutlineBriefcase />,
    summary:
      "AI-first legal intelligence that turns complex documents into trusted insights.",
    bullets: [
      "Built domain-specific LLM pipelines to extract and classify legal clauses.",
      "Implemented RAG workflows to improve contextual accuracy and trust.",
      "Delivered Power BI dashboards that cut report turnaround by 60%.",
    ],
    tags: ["LLMOps", "RAG", "Power BI"],
    story:
      "Took my love for analytics into AI systems that help teams move faster with confidence.",
  },
  {
    id: "rinira",
    type: "Work",
    order: 5,
    date: "2021 — Present",
    title: "Software Engineer",
    subtitle: "Rinira Technologies Pvt. Ltd.",
    icon: <HiOutlineBriefcase />,
    summary:
      "Built global data ingestion systems powering travel intelligence at scale.",
    bullets: [
      "Architected Java parsers reducing processing time by 40%.",
      "Scaled ingestion pipelines, improving throughput by 50%.",
      "Built maintainable systems supporting global travel intelligence.",
    ],
    tags: ["Java", "Data Ingestion", "ETL"],
    story:
      "Learned that performance, reliability, and clean systems design create real-world impact.",
  },
  {
    id: "ms",
    type: "Education",
    order: 6,
    date: "2024 — Present",
    title: "MS in Data Analytics",
    subtitle: "University of Niagara Falls",
    icon: <HiOutlineAcademicCap />,
    summary:
      "Deepening ML, analytics, and storytelling to drive decision-ready products.",
    bullets: [
      "Advanced analytics, experimentation, and BI storytelling.",
      "ML automation and data modeling for decision-ready insights.",
    ],
    tags: ["Python", "SQL", "Power BI"],
    story:
      "Sharpening the craft of turning raw data into insight that teams can act on.",
  },
  {
    id: "btech",
    type: "Education",
    order: 3,
    date: "2019 — 2023",
    title: "B.Tech in Electronics",
    subtitle: "Birla Vishwakarma Mahavidhyalaya",
    icon: <HiOutlineAcademicCap />,
    summary:
      "Built systems thinking through electronics, instrumentation, and projects.",
    bullets: [
      "Built systems thinking through electronics and instrumentation.",
      "Developed a foundation in programming and applied analytics.",
    ],
    tags: ["Electronics", "Systems"],
    story:
      "This is where my curiosity turned into a habit of building and exploring.",
  },
  {
    id: "internships",
    type: "Work",
    order: 4,
    date: "2020 — 2021",
    title: "Software Engineering Internships",
    subtitle: "Rinira Innovations Pvt. Ltd.",
    icon: <HiOutlineBriefcase />,
    summary: "Early hands-on work delivering Android and web features.",
    bullets: [
      "Delivered Android features and reusable UI components.",
      "Partnered with backend teams to integrate APIs and improve flows.",
    ],
    tags: ["Android", "Java", "UI"],
    story:
      "The first time shipping real features made me fall in love with building.",
  },
];

const Journey = () => {
  const sortedItems = [...timelineItems].sort((a, b) => a.order - b.order);
  const [openId, setOpenId] = useState(sortedItems[sortedItems.length - 1]?.id);

  return (
    <SectionWrapper id="journey">
      <SectionIntro>
        <SectionEyebrow>Journey</SectionEyebrow>
        <SectionHeading
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Logs from the build: a story of roles, milestones, and growth.
        </SectionHeading>
        <SectionDescription
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          A single timeline that blends work and education into one continuous
          narrative.
        </SectionDescription>
      </SectionIntro>

      <Timeline>
        {sortedItems.map((item, index) => {
          const align = index % 2 === 0 ? "left" : "right";
          const isOpen = openId === item.id;
          return (
            <TimelineRow
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: "easeOut" }}
            >
              <Node />
              <CardSlot align={align}>
                <Card
                  onMouseEnter={() => setOpenId(item.id)}
                  onMouseLeave={() => setOpenId(null)}
                >
                  <CardHeader>
                    <Meta>
                      <IconWrap>{item.icon}</IconWrap>
                      <div>
                        <DateText>{item.date}</DateText>
                        <Title>{item.title}</Title>
                        <Subtitle>{item.subtitle}</Subtitle>
                      </div>
                    </Meta>
                    <HeaderActions>
                      <Badge tone={item.type === "Origin" ? "origin" : "default"}>
                        {item.type}
                      </Badge>
                      <ToggleButton
                        type="button"
                        onClick={() =>
                          setOpenId((prev) => (prev === item.id ? null : item.id))
                        }
                        aria-expanded={isOpen}
                        aria-controls={`journey-${item.id}`}
                      >
                        <FiChevronDown
                          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        />
                      </ToggleButton>
                    </HeaderActions>
                </CardHeader>
                  <Summary>{item.summary}</Summary>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <CardBody
                        id={`journey-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <BulletList>
                          {item.bullets.map((bullet) => (
                            <BulletItem key={bullet}>{bullet}</BulletItem>
                          ))}
                        </BulletList>
                        <TagRow>
                          {item.tags.map((tag) => (
                            <Tag key={`${item.id}-${tag}`}>{tag}</Tag>
                          ))}
                        </TagRow>
                        <StoryLine>{item.story}</StoryLine>
                      </CardBody>
                    ) : null}
                  </AnimatePresence>
                </Card>
              </CardSlot>
            </TimelineRow>
          );
        })}
      </Timeline>
    </SectionWrapper>
  );
};

export default Journey;
