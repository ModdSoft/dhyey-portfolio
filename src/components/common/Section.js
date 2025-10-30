import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 4vw, 3rem);
`;

export const SectionIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 720px;
`;

export const SectionEyebrow = styled.span`
  align-self: flex-start;
  padding: 0.35rem 1rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.accentSoftAlt};
  color: ${({ theme }) => theme.accentAlt};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

export const SectionHeading = styled(motion.h2)`
  font-size: clamp(2rem, 3.6vw, 2.75rem);
  line-height: 1.15;
  color: ${({ theme }) => theme.textPrimary};
  margin: 0;
  font-family: "Space Grotesk", "Inter", sans-serif;
  text-wrap: balance;
`;

export const SectionDescription = styled(motion.p)`
  margin: 0;
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  line-height: 1.65;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 60ch;
`;
