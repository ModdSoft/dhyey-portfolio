import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CompanyLogo from "./riniratechnologies.png";
import {
  SectionWrapper,
  SectionIntro,
  SectionEyebrow,
  SectionHeading,
  SectionDescription,
} from "../common/Section";

const RolesStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, 4vw, 3.5rem);
`;

const RoleLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) minmax(360px, 1.35fr);
  gap: clamp(2rem, 4vw, 3rem);
  align-items: stretch;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const CompanyCard = styled(motion.div)`
  border-radius: clamp(18px, 3vw, 26px);
  padding: clamp(1.8rem, 3vw, 2.6rem);
  background: ${({ theme }) => theme.panelGradient};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.cardGlow};
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: flex-start;
`;

const LogoWrapper = styled.div`
  width: clamp(110px, 12vw, 140px);
  height: clamp(110px, 12vw, 140px);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surfaceAlt};
  display: grid;
  place-items: center;

  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }
`;

const LogoFallback = styled.div`
  width: clamp(110px, 12vw, 140px);
  height: clamp(110px, 12vw, 140px);
  border-radius: 24px;
  display: grid;
  place-items: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.accent},
    ${({ theme }) => theme.accentAlt}
  );
  border: 1px solid ${({ theme }) => theme.border};
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.body};
`;

const CompanyMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const Role = styled.span`
  font-size: 0.95rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

const CompanyName = styled.h3`
  margin: 0;
  font-size: clamp(1.3rem, 2.4vw, 1.6rem);
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 600;
`;

const Tenure = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const Badge = styled.span`
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.accentSoftAlt};
  color: ${({ theme }) => theme.accentAlt};
  background: ${({ theme }) => theme.accentSoftAlt};
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const ImpactCard = styled(motion.div)`
  border-radius: clamp(18px, 2.6vw, 24px);
  padding: clamp(1.8rem, 3vw, 2.5rem);
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadowSoft};
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.cardAccents.secondary};
    opacity: 0.25;
  }
`;

const ImpactContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ImpactHeading = styled.h4`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const ImpactIntro = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.65;
`;

const BulletList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.85rem;
`;

const BulletItem = styled.li`
  position: relative;
  padding-left: 1.3rem;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 1.6;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.55rem;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
    box-shadow: 0 0 0 6px ${({ theme }) => theme.accentSoft};
  }
`;

const MetricGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.9rem;
`;

const Metric = styled.div`
  padding: 1rem 1.2rem;
  border-radius: 18px;
  background: ${({ theme }) => theme.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const MetricValue = styled.span`
  font-size: 1.35rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const MetricLabel = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

const roles = [
  {
    id: "rinira",
    company: "Rinira Technologies Pvt. Ltd.",
    role: "Software Engineer",
    tenure: "April 2021 — Present",
    badge: "Star Employee of the Year · 2022",
    logo: CompanyLogo,
    impactTitle: "Featured project: Traxo",
    impactIntro:
      "Led the engineering of data ingestion workflows powering global travel intelligence for enterprise stakeholders.",
    highlights: [
      "Architected high-performance Java parsers that reduced processing time by 40% while boosting system throughput by 50%.",
      "Enabled real-time global data ingestion pipelines powering mission-critical analytics experiences for enterprise clients.",
      "Built scalable, maintainable components with continuous optimization to support fast-growing datasets and deployments.",
    ],
    metrics: [
      { value: "40%", label: "Faster ingestion" },
      { value: "50%", label: "System lift" },
      { value: "Global", label: "Client impact" },
    ],
  },
  {
    id: "nobel",
    company: "Nobel AI Legal",
    role: "Data Analyst Intern",
    tenure: "March 2025 - Present",
    badge: null,
    logo: null,
    impactTitle: "AI-first legal intelligence",
    impactIntro:
      "Designed AI workflows that accelerate legal clause discovery and convert unstructured case data into reliable insight.",
    highlights: [
      "Created domain-specific LLM pipelines that extract, classify, and summarise critical clauses across 1,000+ legal documents.",
      "Implemented retrieval-augmented (RAG) workflows to surface relevant precedents, elevating contextual accuracy of AI responses.",
      "Built AI-powered chatbots and bespoke LLM tooling that streamline research for legal teams and reduce repetitive analysis.",
      "Delivered interactive Power BI dashboards that visualise AI findings, cutting legal report turnaround by 60%.",
      "Partnered with cross-functional stakeholders to review outputs, identify gaps, and update standardized documentation.",
    ],
    metrics: [
      { value: "1K+", label: "Legal docs parsed" },
      { value: "60%", label: "Faster reports" },
      { value: "RAG", label: "Contextual accuracy" },
    ],
  },
];

const Work = () => (
  <SectionWrapper id="work">
    <SectionIntro>
      <SectionEyebrow>Work Experience</SectionEyebrow>
      <SectionHeading
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Engineering and analytics roles where measurable outcomes matter most.
      </SectionHeading>
      <SectionDescription
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      >
        From enterprise data platforms to AI-native legal tooling, I focus on building
        systems that deliver clarity, speed, and trust for stakeholders.
      </SectionDescription>
    </SectionIntro>

    <RolesStack>
      {roles.map((role, index) => (
        <RoleLayout key={role.id}>
          <CompanyCard
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
          >
            {role.logo ? (
              <LogoWrapper>
                <img src={role.logo} alt={`${role.company} logo`} />
              </LogoWrapper>
            ) : (
              <LogoFallback>{role.company.charAt(0)}</LogoFallback>
            )}
            <CompanyMeta>
              <Role>{role.role}</Role>
              <CompanyName>{role.company}</CompanyName>
              <Tenure>{role.tenure}</Tenure>
            </CompanyMeta>
            {role.badge && <Badge>{role.badge}</Badge>}
          </CompanyCard>

          <ImpactCard
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.75,
              delay: index * 0.1 + 0.1,
              ease: "easeOut",
            }}
          >
            <ImpactContent>
              <ImpactHeading>{role.impactTitle}</ImpactHeading>
              <ImpactIntro>{role.impactIntro}</ImpactIntro>
              <BulletList>
                {role.highlights.map((item) => (
                  <BulletItem key={item}>{item}</BulletItem>
                ))}
              </BulletList>
              <MetricGrid>
                {role.metrics.map((metric) => (
                  <Metric key={`${role.id}-${metric.label}`}>
                    <MetricValue>{metric.value}</MetricValue>
                    <MetricLabel>{metric.label}</MetricLabel>
                  </Metric>
                ))}
              </MetricGrid>
            </ImpactContent>
          </ImpactCard>
        </RoleLayout>
      ))}
    </RolesStack>
  </SectionWrapper>
);

export default Work;
