import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, 5vw, 3.5rem);
`;

export const SectionIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 720px;
`;

export const SectionEyebrow = styled(motion.span)`
  align-self: flex-start;
  padding: 0.4rem 1.1rem;
  border-radius: ${({ theme }) => theme.radiusFull};
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.accentForeground};
  font-family: ${({ theme }) => theme.fontHeading};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  border: ${({ theme }) => theme.borderWidth} solid ${({ theme }) => theme.borderDark};
  box-shadow: ${({ theme }) => theme.popShadowSm};
`;

export const SectionHeading = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fontHeading};
  font-size: clamp(2rem, 3.6vw, 2.75rem);
  font-weight: 800;
  line-height: 1.15;
  color: ${({ theme }) => theme.foreground};
  text-wrap: balance;
`;

export const SectionDescription = styled(motion.p)`
  margin: 0;
  font-family: ${({ theme }) => theme.fontBody};
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  font-weight: 400;
  line-height: 1.7;
  color: ${({ theme }) => theme.mutedForeground};
  max-width: 58ch;
`;
