import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CiSaveUp1 as LaunchIcon } from "react-icons/ci";
import { FaGithub, FaKaggle, FaMedium } from "react-icons/fa";
import Images from "../../images";
import { projectData } from "../../data/projects";
import {
  SectionWrapper,
  SectionIntro,
  SectionEyebrow,
  SectionHeading,
  SectionDescription,
} from "../common/Section";
import { FloatingSquare, FloatingTriangle } from "../common/Decorations";
import { slideUp, staggerContainer } from "../../styles/animations";

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(1.8rem, 3vw, 2.4rem);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const cardShadows = [
  "8px 8px 0px 0px #8B5CF6",
  "8px 8px 0px 0px #F472B6",
  "8px 8px 0px 0px #FBBF24",
  "8px 8px 0px 0px #34D399",
  "8px 8px 0px 0px #8B5CF6",
  "8px 8px 0px 0px #F472B6",
];

const ProjectCard = styled(motion.article)`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.radiusLg};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  background: ${({ theme }) => theme.card};
  overflow: hidden;
  box-shadow: ${({ $shadow }) => $shadow};
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

const ProjectImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 58%;
  overflow: hidden;
  background: ${({ theme }) => theme.muted};
  border-bottom: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
`;

const ProjectImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: clamp(1.3rem, 2.5vw, 1.8rem);
  flex: 1;
`;

const ProjectCategory = styled.span`
  font-family: ${({ theme }) => theme.fontBody};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.mutedForeground};
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fontHeading};
  font-size: clamp(1.15rem, 2vw, 1.35rem);
  font-weight: 700;
  color: ${({ theme }) => theme.foreground};
`;

/* ─── Problem → Approach → Result ─── */

const PARList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`;

const PARRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  font-size: 0.88rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.mutedForeground};
`;

const PARDot = styled.span`
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  margin-top: 6px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  border: 1.5px solid ${({ theme }) => theme.borderDark};
`;

const PARLabel = styled.span`
  font-weight: 700;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  flex-shrink: 0;
  min-width: 68px;
`;

const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`;

const chipColors = ["#8B5CF6", "#F472B6", "#FBBF24", "#34D399"];

const StackChip = styled.span`
  padding: 0.25rem 0.6rem;
  border-radius: ${({ theme }) => theme.radiusFull};
  background: ${({ $bg }) => $bg}18;
  color: ${({ $bg }) => $bg};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1.5px solid ${({ $bg }) => $bg}60;
`;

const MetricsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.7rem 0;
  border-top: 2px dashed ${({ theme }) => theme.border};
`;

const metricAccents = ["#8B5CF6", "#F472B6", "#FBBF24", "#34D399"];

const Metric = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

const MetricValue = styled.span`
  font-family: ${({ theme }) => theme.fontHeading};
  font-size: 1.3rem;
  font-weight: 800;
  color: ${({ $accent }) => $accent};
  line-height: 1.1;
`;

const MetricLabel = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.mutedForeground};
`;

const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const FilterTab = styled.button`
  padding: 0.45rem 1rem;
  border-radius: ${({ theme }) => theme.radiusFull};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ $active, theme }) => ($active ? theme.borderDark : theme.border)};
  background: ${({ $active, theme }) =>
    $active ? theme.foreground : theme.card};
  color: ${({ $active, theme }) =>
    $active ? theme.background : theme.foreground};
  font-family: ${({ theme }) => theme.fontBody};
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: all 200ms ease;
  box-shadow: ${({ $active, theme }) =>
    $active ? theme.popShadowSm : "none"};

  &:hover {
    border-color: ${({ theme }) => theme.borderDark};
    background: ${({ $active, theme }) =>
      $active ? theme.foreground : theme.tertiary};
  }
`;

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.9rem;
  border-radius: ${({ theme }) => theme.radiusFull};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  background: transparent;
  color: ${({ theme }) => theme.foreground};
  font-size: 0.82rem;
  font-weight: 600;
  transition: all 300ms ${({ theme }) => theme.bouncyEase};

  &:hover {
    background: ${({ theme }) => theme.tertiary};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.popShadowSm};
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const iconMap = {
  launch: <LaunchIcon size={16} />,
  github: <FaGithub size={16} />,
  kaggle: <FaKaggle size={16} />,
  article: <FaMedium size={16} />,
};

const filterCategories = [
  { key: "all", label: "All" },
  { key: "ml", label: "ML / AI" },
  { key: "bi", label: "Analytics / BI" },
  { key: "mobile", label: "Mobile" },
  { key: "fullstack", label: "Full-stack" },
];

const projects = [
  {
    title: "House Price Prediction Platform",
    category: "Applied Machine Learning",
    filterTag: "ml",
    problem:
      "Buyers and sellers lack accurate, data-driven valuations — manual appraisals are slow and inconsistent.",
    approach:
      "Built XGBoost pipeline with 79 features, React frontend, and production Flask API for real-time predictions.",
    result:
      "0.9146 R² accuracy deployed as a full-stack web app with interactive Power BI dashboard.",
    stack: ["Python", "XGBoost", "React", "Flask", "Power BI"],
    image: Images.house_price_website,
    metrics: [
      { value: "0.9146 R²", label: "Model accuracy" },
      { value: "Full-stack", label: "Web · API · BI" },
    ],
    links: [
      { type: "launch", label: "Live app", url: projectData.housePriceLive },
      {
        type: "kaggle",
        label: "Kaggle dataset",
        url: projectData.housePriceKaggle,
      },
      {
        type: "article",
        label: "Case study",
        url: projectData.housePriceMedium,
      },
    ],
  },
  {
    title: "Bus Route Optimization",
    category: "Analytics Engineering",
    filterTag: "bi",
    problem:
      "City transit planning relied on outdated ridership assumptions, creating underserved routes and wasted capacity.",
    approach:
      "Demand clustering + predictive analytics + Power BI dashboards for real-time route evaluation.",
    result:
      "15+ KPIs surfaced — dynamic dashboards adopted by transit planners for route decisions.",
    stack: ["Power BI", "Python", "React", "Automation"],
    image: Images.bus_route_main,
    metrics: [
      { value: "15+ KPIs", label: "Operational insights" },
      { value: "Realtime", label: "Dynamic dashboards" },
    ],
    links: [
      {
        type: "launch",
        label: "Interactive app",
        url: projectData.busRouteLive,
      },
      { type: "article", label: "Article", url: projectData.busRouteMedium },
    ],
  },
  {
    title: "Retail Intelligence Suite",
    category: "Business Intelligence",
    filterTag: "bi",
    problem:
      "Walmart & Blinkit teams lacked unified visibility into revenue, inventory, and demand trends across stores.",
    approach:
      "Automated ETL pipelines + forecasting models + self-serve Power BI dashboards across 3 business domains.",
    result:
      "3-domain analytics (Revenue · Inventory · Demand) — executive-ready, self-serve dashboards.",
    stack: ["Power BI", "Python", "SQL"],
    image: Images.walmart_second,
    metrics: [
      { value: "3 Domains", label: "Revenue · Inventory · Demand" },
      { value: "Self-serve", label: "Executive dashboards" },
    ],
    links: [
      {
        type: "github",
        label: "Walmart analysis",
        url: projectData.walmartGithub,
      },
      {
        type: "github",
        label: "Blinkit analysis",
        url: projectData.blinkitGithub,
      },
    ],
  },
  {
    title: "JJSG - School ERP Apps",
    category: "Full-stack Mobile",
    filterTag: "mobile",
    problem:
      "Parents had zero real-time visibility into attendance, grades, or school communications.",
    approach:
      "Dual React Native apps (parent + admin) with Firebase real-time sync and async messaging.",
    result:
      "10K+ active users — 2 published Play Store apps serving an entire school ecosystem.",
    stack: ["React Native", "Firebase", "Redux"],
    image: Images.jjsgmultiscreen,
    metrics: [
      { value: "10K+", label: "Active users" },
      { value: "2 Apps", label: "Parents · Admin" },
    ],
    links: [
      {
        type: "launch",
        label: "Parents app",
        url: projectData.jjsgUserPlayStore,
      },
      {
        type: "launch",
        label: "Admin app",
        url: projectData.jjsgAdminPlayStore,
      },
    ],
  },
  {
    title: "Atharava Vidyalaya Platform",
    category: "EdTech Engineering",
    filterTag: "fullstack",
    problem:
      "School operations fragmented across paper, WhatsApp, and disconnected tools — no single source of truth.",
    approach:
      "Integrated website + teacher & student apps built on React Native + Firebase with real-time sync.",
    result:
      "3 products shipped — real-time performance tracking adopted school-wide.",
    stack: ["React Native", "Firebase", "Node.js"],
    image: Images.avwebsite,
    metrics: [
      { value: "3 Products", label: "Web · Student · Teacher" },
      { value: "Realtime", label: "Performance tracking" },
    ],
    links: [
      {
        type: "launch",
        label: "Website",
        url: projectData.atharavaWebsite,
      },
      {
        type: "launch",
        label: "Student app",
        url: projectData.atharavaStudentPlayStore,
      },
      {
        type: "launch",
        label: "Teacher app",
        url: projectData.atharavaTeacherPlayStore,
      },
    ],
  },
  {
    title: "Fun ABC Learning",
    category: "Creative Learning",
    filterTag: "mobile",
    problem:
      "Existing alphabet apps were boring with low engagement, not designed for children's attention spans.",
    approach:
      "Gamified experience with interactive storytelling, rewards, and kid-friendly animations.",
    result:
      "Published on Play Store — kid-centric UX with positive parent feedback.",
    stack: ["React Native", "Animations"],
    image: Images.kidsApp,
    metrics: [
      { value: "Play Store", label: "Published" },
      { value: "Kid-centric", label: "UX & Visuals" },
    ],
    links: [
      {
        type: "launch",
        label: "Live on Play Store",
        url: projectData.kidsPlayStore,
      },
      { type: "github", label: "Source code", url: projectData.kidsGithub },
    ],
  },
];

const parColors = {
  problem: "#EF4444",
  approach: "#8B5CF6",
  result: "#34D399",
};

const springIn = { type: "spring", stiffness: 200, damping: 22 };

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.filterTag === activeFilter);

  return (
    <SectionWrapper id="projects" style={{ position: "relative" }}>
      <FloatingSquare
        $color="#8B5CF6"
        size="32px"
        style={{ top: "-2rem", right: "8%" }}
        $duration="18s"
      />
      <FloatingTriangle
        $color="#F472B6"
        size="28"
        $rotation={40}
        $opacity={0.45}
        style={{ bottom: "5%", left: "0%" }}
        $duration="10s"
        $delay="3s"
      />

      <SectionIntro>
        <SectionEyebrow
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={springIn}
        >
          Selected Work
        </SectionEyebrow>
        <SectionHeading
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...springIn, delay: 0.1 }}
        >
          Blending analytics and engineering into products people can trust.
        </SectionHeading>
        <SectionDescription
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ...springIn, delay: 0.15 }}
        >
          Every project follows the same discipline: define the problem, choose
          the right tools, and measure the impact.
        </SectionDescription>
      </SectionIntro>

      <FilterBar>
        {filterCategories.map((cat) => (
          <FilterTab
            key={cat.key}
            $active={activeFilter === cat.key}
            onClick={() => setActiveFilter(cat.key)}
          >
            {cat.label}
          </FilterTab>
        ))}
      </FilterBar>

      <ProjectsGrid
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {filtered.map((project, index) => (
          <ProjectCard
            key={project.title}
            $shadow={cardShadows[index % cardShadows.length]}
            variants={slideUp}
            layout
          >
            <ProjectImageWrapper>
              <ProjectImage
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
            </ProjectImageWrapper>
            <ProjectContent>
              <ProjectCategory>{project.category}</ProjectCategory>
              <ProjectTitle>{project.title}</ProjectTitle>

              <PARList>
                <PARRow>
                  <PARDot $color={parColors.problem} />
                  <div>
                    <PARLabel $color={parColors.problem}>Challenge</PARLabel>
                    <br />
                    {project.problem}
                  </div>
                </PARRow>
                <PARRow>
                  <PARDot $color={parColors.approach} />
                  <div>
                    <PARLabel $color={parColors.approach}>Approach</PARLabel>
                    <br />
                    {project.approach}
                  </div>
                </PARRow>
                <PARRow>
                  <PARDot $color={parColors.result} />
                  <div>
                    <PARLabel $color={parColors.result}>Impact</PARLabel>
                    <br />
                    {project.result}
                  </div>
                </PARRow>
              </PARList>

              <StackList>
                {project.stack.map((item, si) => (
                  <StackChip
                    key={item}
                    $bg={chipColors[si % chipColors.length]}
                  >
                    {item}
                  </StackChip>
                ))}
              </StackList>
              <MetricsRow>
                {project.metrics.map((metric, mi) => (
                  <Metric key={metric.label}>
                    <MetricValue
                      $accent={metricAccents[mi % metricAccents.length]}
                    >
                      {metric.value}
                    </MetricValue>
                    <MetricLabel>{metric.label}</MetricLabel>
                  </Metric>
                ))}
              </MetricsRow>
              <LinkRow>
                {project.links.map((link) => (
                  <LinkButton
                    key={`${project.title}-${link.label}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {iconMap[link.type]}
                    {link.label}
                  </LinkButton>
                ))}
              </LinkRow>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </SectionWrapper>
  );
};

export default Projects;
