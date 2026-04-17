import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaMedium } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import {
  SectionWrapper,
  SectionIntro,
  SectionEyebrow,
  SectionHeading,
  SectionDescription,
} from "../common/Section";
import { slideUp, staggerContainer } from "../../styles/animations";

const ArticlesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(1.4rem, 3vw, 2rem);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const articleShadows = [
  "8px 8px 0px 0px #8B5CF6",
  "8px 8px 0px 0px #F472B6",
  "8px 8px 0px 0px #FBBF24",
];

const ArticleCard = styled(motion.a)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: clamp(1.4rem, 2.5vw, 2rem);
  border-radius: ${({ theme }) => theme.radiusLg};
  background: ${({ theme }) => theme.card};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  box-shadow: ${({ $shadow }) => $shadow};
  text-decoration: none;
  color: inherit;
  transition: all 300ms ${({ theme }) => theme.bouncyEase};

  &:hover {
    transform: translate(-3px, -3px) rotate(-0.5deg);
    box-shadow: ${({ $shadow }) => {
      const parts = $shadow.split(" ");
      parts[0] = "10px";
      parts[1] = "10px";
      return parts.join(" ");
    }};
  }

  @media (max-width: 768px) {
    box-shadow: ${({ theme }) => theme.popShadowSm};

    &:hover {
      transform: none;
    }
  }
`;

const ArticleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PlatformBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.8rem;
  border-radius: ${({ theme }) => theme.radiusFull};
  background: ${({ theme }) => theme.foreground};
  color: ${({ theme }) => theme.background};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const ArrowCircle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  color: ${({ theme }) => theme.foreground};
  transition: all 300ms ${({ theme }) => theme.bouncyEase};

  ${ArticleCard}:hover & {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accentForeground};
    border-color: ${({ theme }) => theme.borderDark};
  }
`;

const ArticleTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fontHeading};
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  font-weight: 700;
  color: ${({ theme }) => theme.foreground};
  line-height: 1.35;
`;

const ArticleExcerpt = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.mutedForeground};
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: auto;
`;

const tagColors = ["#8B5CF6", "#F472B6", "#FBBF24", "#34D399"];

const Tag = styled.span`
  padding: 0.25rem 0.6rem;
  border-radius: ${({ theme }) => theme.radiusFull};
  background: ${({ $bg }) => $bg}15;
  color: ${({ $bg }) => $bg};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1px solid ${({ $bg }) => $bg}40;
`;

const articles = [
  {
    title:
      "Building a House Price Prediction App: From Dataset to Deployment",
    excerpt:
      "A full walkthrough of building an end-to-end ML pipeline — from data cleaning and feature engineering through XGBoost modeling to a live React + Flask application.",
    platform: "Medium",
    url: "https://medium.com/@dhyeymodi21/building-a-house-price-prediction-app-from-dataset-to-deployment-aebf68a9ae5c",
    tags: ["Machine Learning", "XGBoost", "Full-stack", "Deployment"],
  },
  {
    title: "Bus Route Optimization: Data-Driven Transit Planning",
    excerpt:
      "How Power BI dashboards, predictive analysis, and demand clustering can reshape public transit routes for efficiency and rider satisfaction.",
    platform: "Medium",
    url: "https://medium.com/@dhyeymodi21/bus-route-optimization-7faceecafbac",
    tags: ["Analytics", "Power BI", "Optimization", "Public Policy"],
  },
];

const springIn = { type: "spring", stiffness: 200, damping: 22 };

const Blog = () => (
  <SectionWrapper id="writing">
    <SectionIntro>
      <SectionEyebrow
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={springIn}
      >
        Writing
      </SectionEyebrow>
      <SectionHeading
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ...springIn, delay: 0.1 }}
      >
        Thinking out loud — articles on data, ML, and building products.
      </SectionHeading>
      <SectionDescription
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ ...springIn, delay: 0.15 }}
      >
        I write about the problems I solve, the tools I use, and the lessons
        learned along the way.
      </SectionDescription>
    </SectionIntro>

    <ArticlesGrid
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {articles.map((article, index) => (
        <ArticleCard
          key={article.title}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          $shadow={articleShadows[index % articleShadows.length]}
          variants={slideUp}
        >
          <ArticleHeader>
            <PlatformBadge>
              <FaMedium size={14} />
              {article.platform}
            </PlatformBadge>
            <ArrowCircle>
              <FiArrowUpRight size={16} strokeWidth={2.5} />
            </ArrowCircle>
          </ArticleHeader>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
          <TagRow>
            {article.tags.map((tag, ti) => (
              <Tag key={tag} $bg={tagColors[ti % tagColors.length]}>
                {tag}
              </Tag>
            ))}
          </TagRow>
        </ArticleCard>
      ))}
    </ArticlesGrid>
  </SectionWrapper>
);

export default Blog;
