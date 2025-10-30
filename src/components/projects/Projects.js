import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  CiSaveUp1 as LaunchIcon,
} from "react-icons/ci";
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(1.6rem, 3vw, 2.2rem);
`;

const ProjectCard = styled(motion.article)`
  display: flex;
  flex-direction: column;
  border-radius: clamp(18px, 2.4vw, 24px);
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadowSoft};
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 60px rgba(15, 23, 42, 0.45);
  }
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 62%;
  overflow: hidden;
  background: rgba(15, 23, 42, 0.65);
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
  gap: 1rem;
  padding: clamp(1.5rem, 3vw, 2rem);
  flex: 1;
`;

const ProjectCategory = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.65;
`;

const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const StackChip = styled.span`
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.accentSoftAlt};
  color: ${({ theme }) => theme.accentAlt};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const MetricsRow = styled.div`
  display: grid;
  gap: 0.6rem;
`;

const Metric = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.textPrimary};
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const MetricLabel = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: auto;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textPrimary};
  font-size: 0.9rem;
  font-weight: 500;
  transition: border 0.25s ease, transform 0.25s ease, color 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
    transform: translateY(-2px);
  }
`;

const iconMap = {
  launch: <LaunchIcon size={18} />,
  github: <FaGithub size={18} />,
  kaggle: <FaKaggle size={18} />,
  article: <FaMedium size={18} />,
};

const projects = [
  {
    title: "House Price Prediction Platform",
    category: "Applied Machine Learning",
    description:
      "End-to-end system forecasting home valuations with XGBoost, a React experience, and a production-ready Flask API.",
    stack: ["Python", "XGBoost", "React", "Flask", "Power BI"],
    image: Images.house_price_website,
    metrics: [
      { value: "0.9146 R²", label: "Model accuracy" },
      { value: "Full-stack", label: "Web · API · BI" },
    ],
    links: [
      { type: "launch", label: "Live app", url: projectData.housePriceLive },
      { type: "kaggle", label: "Kaggle dataset", url: projectData.housePriceKaggle },
      { type: "article", label: "Case study", url: projectData.housePriceMedium },
    ],
  },
  {
    title: "Bus Route Optimization",
    category: "Analytics Engineering",
    description:
      "Power BI dashboards, predictive analysis, and a web explorer to identify optimal transit routes and demand clusters.",
    stack: ["Power BI", "Python", "React", "Automation"],
    image: Images.bus_route_main,
    metrics: [
      { value: "15+ KPIs", label: "Operational insights" },
      { value: "Realtime", label: "Dynamic dashboards" },
    ],
    links: [
      { type: "launch", label: "Interactive app", url: projectData.busRouteLive },
      { type: "article", label: "Article", url: projectData.busRouteMedium },
    ],
  },
  {
    title: "Retail Intelligence Suite",
    category: "Business Intelligence",
    description:
      "Walmart & Blinkit analytics at scale—automated ETL, forecasting, and decision dashboards for commercial leaders.",
    stack: ["Power BI", "Python", "SQL"],
    image: Images.walmart_second,
    metrics: [
      { value: "3 Domains", label: "Revenue · Inventory · Demand" },
      { value: "Self-serve", label: "Executive dashboards" },
    ],
    links: [
      { type: "github", label: "Walmart analysis", url: projectData.walmartGithub },
      { type: "github", label: "Blinkit analysis", url: projectData.blinkitGithub },
    ],
  },
  {
    title: "JJSG - School ERP Apps",
    category: "Full-stack Mobile",
    description:
      "Dual Android applications for parents and administrators featuring live attendance, analytics, and async messaging.",
    stack: ["React Native", "Firebase", "Redux"],
    image: Images.jjsgmultiscreen,
    metrics: [
      { value: "10K+", label: "Active users" },
      { value: "2 Apps", label: "Parents · Admin" },
    ],
    links: [
      { type: "launch", label: "Parents app", url: projectData.jjsgUserPlayStore },
      { type: "launch", label: "Admin app", url: projectData.jjsgAdminPlayStore },
    ],
  },
  {
    title: "Atharava Vidyalaya Platform",
    category: "EdTech Engineering",
    description:
      "Integrated web presence plus teacher & student apps that streamline school operations and parent engagement.",
    stack: ["React Native", "Firebase", "Node.js"],
    image: Images.avwebsite,
    metrics: [
      { value: "3 Products", label: "Web · Student · Teacher" },
      { value: "Realtime", label: "Performance tracking" },
    ],
    links: [
      { type: "launch", label: "Website", url: projectData.atharavaWebsite },
      { type: "launch", label: "Student app", url: projectData.atharavaStudentPlayStore },
      { type: "launch", label: "Teacher app", url: projectData.atharavaTeacherPlayStore },
    ],
  },
  {
    title: "Fun ABC Learning",
    category: "Creative Learning",
    description:
      "Gamified Android experience that helps children grasp alphabets through interactive storytelling and rewards.",
    stack: ["React Native", "Animations"],
    image: Images.kidsApp,
    metrics: [
      { value: "Play Store", label: "Published" },
      { value: "Kid-centric", label: "UX & Visuals" },
    ],
    links: [
      { type: "launch", label: "Live on Play Store", url: projectData.kidsPlayStore },
      { type: "github", label: "Source code", url: projectData.kidsGithub },
    ],
  },
];

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <SectionIntro>
        <SectionEyebrow>Selected Work</SectionEyebrow>
        <SectionHeading
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Blending analytics and engineering into products people can trust.
        </SectionHeading>
        <SectionDescription
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          A curation of recent products that demonstrate my range—from predictive
          intelligence to large-scale mobile ecosystems.
        </SectionDescription>
      </SectionIntro>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: index * 0.05, ease: "easeOut" }}
          >
            <ProjectImageWrapper>
              <ProjectImage src={project.image} alt={project.title} />
            </ProjectImageWrapper>
            <ProjectContent>
              <ProjectCategory>{project.category}</ProjectCategory>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <StackList>
                {project.stack.map((item) => (
                  <StackChip key={item}>{item}</StackChip>
                ))}
              </StackList>
              <MetricsRow>
                {project.metrics.map((metric) => (
                  <Metric key={metric.label}>
                    {metric.value}
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
