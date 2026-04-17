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
// animations imported at section level

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
    border-left: 2px dashed ${({ theme }) => theme.border};
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

const nodeColors = ["#8B5CF6", "#F472B6", "#FBBF24", "#34D399"];

const Node = styled.span`
  position: absolute;
  top: 1.6rem;
  left: 50%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  box-shadow: ${({ theme }) => theme.popShadowSm};
  transform: translateX(-50%);
  z-index: 2;

  @media (max-width: 960px) {
    left: 1.1rem;
    transform: none;
    width: 14px;
    height: 14px;
  }
`;

const CardSlot = styled.div`
  grid-column: ${({ $align }) => ($align === "left" ? "1" : "2")};
  justify-self: ${({ $align }) => ($align === "left" ? "end" : "start")};

  @media (max-width: 960px) {
    grid-column: 1;
    justify-self: stretch;
  }
`;

const cardShadows = [
  "6px 6px 0px 0px #FBBF24",
  "6px 6px 0px 0px #F472B6",
  "6px 6px 0px 0px #34D399",
  "6px 6px 0px 0px #8B5CF6",
  "6px 6px 0px 0px #F472B6",
  "6px 6px 0px 0px #FBBF24",
  "6px 6px 0px 0px #34D399",
];

const Card = styled(motion.article)`
  max-width: 520px;
  border-radius: ${({ theme }) => theme.radiusLg};
  padding: 1.2rem 1.4rem;
  background: ${({ theme }) => theme.card};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  box-shadow: ${({ $shadow }) => $shadow};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: all 300ms ${({ theme }) => theme.bouncyEase};

  &:hover {
    transform: rotate(-1deg) scale(1.02);
  }

  @media (max-width: 768px) {
    box-shadow: ${({ theme }) => theme.popShadowSm};

    &:hover {
      transform: none;
    }
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.6rem;
  flex-wrap: wrap;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;
  flex: 1;
`;

const iconBgColors = ["#8B5CF6", "#F472B6", "#FBBF24", "#34D399"];

const IconWrap = styled.span`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: ${({ $bg }) => $bg};
  color: #ffffff;
  font-size: 1.2rem;
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  flex-shrink: 0;
`;

const DateText = styled.span`
  font-family: ${({ theme }) => theme.fontBody};
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.mutedForeground};
`;

const Title = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fontHeading};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.foreground};

  @media (max-width: 480px) {
    font-size: 0.98rem;
  }
`;

const Subtitle = styled.span`
  font-size: 0.92rem;
  color: ${({ theme }) => theme.mutedForeground};
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-shrink: 0;
`;

const Badge = styled.span`
  padding: 0.3rem 0.7rem;
  border-radius: ${({ theme }) => theme.radiusFull};
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color || "#FFFFFF"};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1.5px solid ${({ theme }) => theme.borderDark};
`;

const ToggleButton = styled.button`
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.foreground};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.popShadowSm};
  transition: all 300ms ${({ theme }) => theme.bouncyEase};

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    background: ${({ theme }) => theme.tertiary};
    transform: translate(-1px, -1px);
    box-shadow: ${({ theme }) => theme.popShadow};
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: none;
  }
`;

const Summary = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.mutedForeground};
  line-height: 1.65;
  font-size: 0.92rem;
`;

const CardBody = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  overflow: hidden;
`;

const BulletList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.5rem;
`;

const BulletItem = styled.li`
  position: relative;
  padding-left: 1.3rem;
  color: ${({ theme }) => theme.mutedForeground};
  line-height: 1.6;
  font-size: 0.9rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
    border: 1.5px solid ${({ theme }) => theme.borderDark};
  }
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

const tagColors = ["#8B5CF6", "#F472B6", "#FBBF24", "#34D399"];

const Tag = styled.span`
  padding: 0.3rem 0.7rem;
  border-radius: ${({ theme }) => theme.radiusFull};
  background: ${({ $bg }) => $bg}20;
  color: ${({ theme }) => theme.foreground};
  font-size: 0.72rem;
  font-weight: 600;
  border: 1.5px solid ${({ $bg }) => $bg};
`;

const StoryLine = styled.p`
  margin: 0;
  padding-top: 0.65rem;
  border-top: 2px dashed ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.mutedForeground};
  font-size: 0.88rem;
  font-style: italic;
`;

const badgeStyles = {
  Origin: { bg: "#FBBF24", color: "#1E293B" },
  Work: { bg: "#8B5CF6", color: "#FFFFFF" },
  Education: { bg: "#34D399", color: "#1E293B" },
};

const timelineItems = [
  {
    id: "lab",
    type: "Origin",
    order: 1,
    date: "Early Years",
    title: "Computer Lab Curiosity",
    subtitle: "First time code felt like magic",
    icon: <HiOutlineAcademicCap />,
    summary:
      "The spark that made tech feel like a playground, not a textbook.",
    bullets: [
      "Stayed back to explore small programs and logic puzzles.",
      "Discovered how tiny changes can transform outcomes.",
    ],
    tags: ["Curiosity", "Logic"],
    story:
      "That first lab session flipped a switch — I wanted to know how everything worked.",
  },
  {
    id: "gaming",
    type: "Origin",
    order: 2,
    date: "Early Years",
    title: "Gaming to Systems Thinking",
    subtitle: "Strategy, feedback loops, optimization",
    icon: <HiOutlineAcademicCap />,
    summary:
      "Gaming taught me to think in systems, constraints, and trade-offs.",
    bullets: [
      "Became obsessed with tuning strategies and optimizing outcomes.",
      "Started thinking in loops, inputs, and outputs.",
    ],
    tags: ["Systems", "Optimization"],
    story:
      "Games showed me that great results come from smart systems, not luck.",
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
];

const springIn = { type: "spring", stiffness: 200, damping: 22 };

const Journey = () => {
  const sortedItems = [...timelineItems].sort((a, b) => a.order - b.order);
  const [openId, setOpenId] = useState(
    sortedItems[sortedItems.length - 1]?.id,
  );

  return (
    <SectionWrapper id="journey">
      <SectionIntro>
        <SectionEyebrow
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={springIn}
        >
          Journey
        </SectionEyebrow>
        <SectionHeading
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...springIn, delay: 0.1 }}
        >
          Logs from the build: a story of roles, milestones, and growth.
        </SectionHeading>
        <SectionDescription
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ...springIn, delay: 0.15 }}
        >
          A single timeline that blends work and education into one continuous
          narrative.
        </SectionDescription>
      </SectionIntro>

      <Timeline>
        {sortedItems.map((item, index) => {
          const align = index % 2 === 0 ? "left" : "right";
          const isOpen = openId === item.id;
          const bStyle = badgeStyles[item.type] || badgeStyles.Work;
          return (
            <TimelineRow
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                ...springIn,
                delay: index * 0.06,
              }}
            >
              <Node $color={nodeColors[index % nodeColors.length]} />
              <CardSlot $align={align}>
                <Card
                  $shadow={cardShadows[index % cardShadows.length]}
                  onMouseEnter={() => setOpenId(item.id)}
                  onMouseLeave={() => setOpenId(null)}
                >
                  <CardHeader>
                    <Meta>
                      <IconWrap
                        $bg={iconBgColors[index % iconBgColors.length]}
                      >
                        {item.icon}
                      </IconWrap>
                      <div>
                        <DateText>{item.date}</DateText>
                        <Title>{item.title}</Title>
                        <Subtitle>{item.subtitle}</Subtitle>
                      </div>
                    </Meta>
                    <HeaderActions>
                      <Badge $bg={bStyle.bg} $color={bStyle.color}>
                        {item.type}
                      </Badge>
                      <ToggleButton
                        type="button"
                        onClick={() =>
                          setOpenId((prev) =>
                            prev === item.id ? null : item.id,
                          )
                        }
                        aria-expanded={isOpen}
                        aria-controls={`journey-${item.id}`}
                      >
                        <FiChevronDown
                          size={16}
                          strokeWidth={2.5}
                          style={{
                            transform: isOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          }}
                        />
                      </ToggleButton>
                    </HeaderActions>
                  </CardHeader>

                  <Summary>{item.summary}</Summary>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <CardBody
                        id={`journey-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        <BulletList>
                          {item.bullets.map((bullet) => (
                            <BulletItem key={bullet}>{bullet}</BulletItem>
                          ))}
                        </BulletList>
                        <TagRow>
                          {item.tags.map((tag, ti) => (
                            <Tag
                              key={`${item.id}-${tag}`}
                              $bg={tagColors[ti % tagColors.length]}
                            >
                              {tag}
                            </Tag>
                          ))}
                        </TagRow>
                        <StoryLine>{item.story}</StoryLine>
                      </CardBody>
                    )}
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
