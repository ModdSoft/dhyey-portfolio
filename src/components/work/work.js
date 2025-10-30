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

const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) minmax(360px, 1.35fr);
  gap: clamp(2rem, 4vw, 3rem);

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
  border: 1px solid rgba(148, 163, 184, 0.22);
  background: rgba(15, 23, 42, 0.6);
  display: grid;
  place-items: center;

  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }
`;

const CompanyName = styled.h3`
  margin: 0;
  font-size: clamp(1.3rem, 2.4vw, 1.6rem);
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 600;
`;

const Role = styled.span`
  font-size: 0.95rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

const Tenure = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const Badge = styled.span`
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  border: 1px solid rgba(236, 72, 153, 0.3);
  color: #f472b6;
  background: rgba(236, 72, 153, 0.12);
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
    background: linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.18),
      rgba(34, 211, 238, 0.12)
    );
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
    box-shadow: 0 0 0 6px rgba(99, 102, 241, 0.14);
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
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(148, 163, 184, 0.2);
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

const Work = () => {
  const highlights = [
    "Architected high-performance Java parsers that reduced processing time by 40% while boosting system throughput by 50%.",
    "Enabled real-time global data ingestion pipelines powering mission-critical analytics experiences for enterprise clients.",
    "Built scalable, maintainable components with continuous optimization to support fast-growing datasets and deployments.",
  ];

  const metrics = [
    { value: "40%", label: "Faster ingestion" },
    { value: "50%", label: "System lift" },
    { value: "Global", label: "Client impact" },
  ];

  return (
    <SectionWrapper id="work">
      <SectionIntro>
        <SectionEyebrow>Work Experience</SectionEyebrow>
        <SectionHeading
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Engineering resilient data platforms at Rinira Technologies.
        </SectionHeading>
        <SectionDescription
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          As a Software Engineer I’ve been trusted with building mission-critical
          parsers and back-end components that drive accurate, timely insights for
          global partners.
        </SectionDescription>
      </SectionIntro>

      <Layout>
        <CompanyCard
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <LogoWrapper>
            <img src={CompanyLogo} alt="Rinira Technologies logo" />
          </LogoWrapper>
          <div>
            <Role>Software Engineer</Role>
            <CompanyName>Rinira Technologies Pvt. Ltd.</CompanyName>
            <Tenure>April 2021 &mdash; Present</Tenure>
          </div>
          <Badge>Star Employee of the Year · 2022</Badge>
        </CompanyCard>

        <ImpactCard
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
        >
          <ImpactContent>
            <ImpactHeading>Featured project: Traxo</ImpactHeading>
            <ImpactIntro>
              Led the engineering of data ingestion workflows powering global travel
              intelligence for enterprise stakeholders.
            </ImpactIntro>
            <BulletList>
              {highlights.map((item) => (
                <BulletItem key={item}>{item}</BulletItem>
              ))}
            </BulletList>
            <MetricGrid>
              {metrics.map((metric) => (
                <Metric key={metric.label}>
                  <MetricValue>{metric.value}</MetricValue>
                  <MetricLabel>{metric.label}</MetricLabel>
                </Metric>
              ))}
            </MetricGrid>
          </ImpactContent>
        </ImpactCard>
      </Layout>
    </SectionWrapper>
  );
};

export default Work;
