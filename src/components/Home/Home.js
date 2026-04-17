import React, { useEffect, useState } from "react";
import styled, { keyframes, useTheme } from "styled-components";
import { personalData } from "../../data/personal-data";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import { RiInstagramFill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { floatY } from "../../styles/animations";
import {
  FloatingCircle,
  FloatingTriangle,
  FloatingSquare,
} from "../common/Decorations";

const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: center;
  min-height: calc(100vh - 96px);
  padding: clamp(3rem, 6vw, 5rem) 0;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: clamp(2.5rem, 5vw, 4rem) 0;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.1rem, 2.5vw, 1.5rem);
  position: relative;
  z-index: 1;
`;

const OpenToWork = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
  padding: 0.35rem 0.9rem;
  border-radius: ${({ theme }) => theme.radiusFull};
  background: ${({ theme }) => theme.quaternarySoft};
  border: 1.5px solid ${({ theme }) => theme.quaternary};
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.foreground};

  @media (max-width: 480px) {
    font-size: 0.68rem;
    padding: 0.3rem 0.7rem;
  }
`;

const PulseDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.quaternary};
  box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.5);
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%,
    100% {
      box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.5);
    }
    50% {
      box-shadow: 0 0 0 6px rgba(52, 211, 153, 0);
    }
  }
`;

const Badge = styled(motion.span)`
  align-self: flex-start;
  padding: 0.4rem 1rem;
  border-radius: ${({ theme }) => theme.radiusFull};
  background: ${({ theme }) => theme.tertiarySoft};
  color: ${({ theme }) => theme.foreground};
  font-family: ${({ theme }) => theme.fontBody};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  box-shadow: ${({ theme }) => theme.popShadowSm};
`;

const Heading = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fontHeading};
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.08;
  color: ${({ theme }) => theme.foreground};
  text-wrap: balance;

  @media (max-width: 640px) {
    font-size: clamp(1.9rem, 7vw, 2.6rem);
    line-height: 1.12;
  }
`;

const AccentText = styled.span`
  color: ${({ theme }) => theme.accent};
`;

const SecondaryText = styled.span`
  color: ${({ theme }) => theme.secondary};
`;

const TertiaryText = styled.span`
  color: ${({ theme }) => theme.tertiary};
`;

const QuaternaryText = styled.span`
  color: ${({ theme }) => theme.quaternary};
`;

const SubHeading = styled(motion.p)`
  margin: 0;
  font-size: clamp(0.98rem, 1.8vw, 1.1rem);
  line-height: 1.65;
  color: ${({ theme }) => theme.mutedForeground};
  max-width: 30rem;
  min-height: 3.4rem;
`;

const blink = keyframes`
  0%, 45% { opacity: 1; }
  55%, 100% { opacity: 0; }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 0.5rem;
  height: 1.1em;
  margin-left: 0.1rem;
  background: ${({ theme }) => theme.accent};
  border-radius: 3px;
  transform: translateY(2px);
  animation: ${blink} 0.9s steps(1) infinite;
`;

const Actions = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CandyButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.1rem 0.75rem 1.4rem;
  border-radius: ${({ theme }) => theme.radiusFull};
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.accentForeground};
  font-family: ${({ theme }) => theme.fontHeading};
  font-weight: 700;
  font-size: 0.95rem;
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  box-shadow: ${({ theme }) => theme.popShadow};
  cursor: pointer;
  transition: all 300ms ${({ theme }) => theme.bouncyEase};

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: ${({ theme }) => theme.popShadowHover};
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: ${({ theme }) => theme.popShadowActive};
  }
`;

const IconCircle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({ theme }) => theme.accentForeground};
  color: ${({ theme }) => theme.accent};
`;


const SocialBar = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({ $bg }) => $bg};
  color: #ffffff;
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  box-shadow: ${({ theme }) => theme.popShadowSm};
  transition: all 300ms ${({ theme }) => theme.bouncyEase};

  &:hover {
    transform: translate(-2px, -2px) rotate(-5deg);
    box-shadow: ${({ theme }) => theme.popShadow};
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: none;
  }
`;

/* ─── Right column: Impact Stats ─── */

const RightColumn = styled(motion.div)`
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    max-width: 480px;
    margin: 0 auto;
    width: 100%;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 380px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

const ImpactCard = styled(motion.div)`
  padding: 1.2rem 1.4rem;
  border-radius: ${({ theme }) => theme.radiusLg};
  background: ${({ theme }) => theme.card};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  box-shadow: ${({ $shadow }) => $shadow};
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  transition: all 300ms ${({ theme }) => theme.bouncyEase};

  &:hover {
    transform: translate(-2px, -2px);
  }

  @media (max-width: 768px) {
    padding: 1rem 1.1rem;
    box-shadow: ${({ theme }) => theme.popShadowSm};
  }
`;

const ImpactNumber = styled.span`
  font-family: ${({ theme }) => theme.fontHeading};
  font-size: clamp(1.6rem, 2.8vw, 2rem);
  font-weight: 800;
  color: ${({ $accent }) => $accent};
  line-height: 1;
`;

const ImpactLabel = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.mutedForeground};
  line-height: 1.3;
`;

const CurrentlyCard = styled(motion.div)`
  margin-top: 1rem;
  padding: 1.1rem 1.4rem;
  border-radius: ${({ theme }) => theme.radiusLg};
  background: ${({ theme }) => theme.foreground};
  color: ${({ theme }) => theme.background};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const CurrentlyLabel = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  opacity: 0.6;
`;

const CurrentlyValue = styled.span`
  font-family: ${({ theme }) => theme.fontHeading};
  font-size: 1.05rem;
  font-weight: 700;
`;

const CurrentlySub = styled.span`
  font-size: 0.82rem;
  opacity: 0.7;
`;

const ScrollHint = styled.div`
  position: absolute;
  left: 50%;
  bottom: clamp(1rem, 2vw, 1.5rem);
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  font-family: ${({ theme }) => theme.fontBody};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.mutedForeground};
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.4s ease;

  svg {
    animation: ${floatY} 1.6s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const impactStats = [
  { number: "10K+", label: "Active users" },
  { number: "20+", label: "Dashboards shipped" },
  { number: "60%", label: "Faster reporting" },
  { number: "5+", label: "ML initiatives" },
];

const typedLines = [
  "I design systems that scale, solve problems that matter, and turn ideas into impact.",
  "MS in Data Analytics. Building ML automation, BI storytelling, and full-stack products.",
  "This portfolio is how I think, build, and keep moving forward.",
];

const springIn = { type: "spring", stiffness: 200, damping: 22 };

function Home() {
  const theme = useTheme();
  const [lineIndex, setLineIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);

  const socialColors = theme.confetti;
  const impactAccents = theme.confetti;
  const impactShadows = impactAccents.map(
    (c) => `6px 6px 0px 0px ${c}`,
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) setShowScrollHint(false);
    };
    const timer = setTimeout(() => setShowScrollHint(false), 6500);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const currentLine = typedLines[lineIndex];
    if (!isDeleting && displayed === currentLine) {
      const pause = setTimeout(() => setIsDeleting(true), 1300);
      return () => clearTimeout(pause);
    }
    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setLineIndex((prev) => (prev + 1) % typedLines.length);
      return;
    }
    const timeout = setTimeout(
      () => {
        const next = displayed.length + (isDeleting ? -1 : 1);
        setDisplayed(currentLine.slice(0, next));
      },
      isDeleting ? 22 : 40,
    );
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, lineIndex]);

  return (
    <Section id="home">
      <FloatingCircle
        $color={theme.tertiary}
        $opacity={0.15}
        size="200px"
        style={{ top: "-5%", left: "-8%" }}
        $duration="9s"
      />
      <FloatingTriangle
        $color={theme.secondary}
        size="36"
        $rotation={25}
        $opacity={0.4}
        style={{ bottom: "25%", left: "45%" }}
        $duration="7s"
        $delay="1s"
      />
      <FloatingSquare
        $color={theme.quaternary}
        size="24px"
        style={{ bottom: "15%", left: "2%" }}
        $duration="16s"
      />

      <LeftColumn>
        <OpenToWork
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...springIn, delay: 0.05 }}
        >
          <PulseDot />
          Open to full-time roles in Data Analytics &amp; ML Engineering in
          Canada
        </OpenToWork>

        <Badge
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ ...springIn, delay: 0.12 }}
        >
          Data Analyst &middot; Software Engineer
        </Badge>

        <Heading
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springIn, delay: 0.2 }}
        >
          Hi, I'm <AccentText>Dhyey Modi</AccentText>.
          <br />I build <SecondaryText>data products</SecondaryText> that drive{" "}
          <TertiaryText>decisions</TertiaryText> and{" "}
          <QuaternaryText>impact</QuaternaryText>.
        </Heading>

        <SubHeading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springIn, delay: 0.35 }}
        >
          {displayed}
          <Cursor />
        </SubHeading>

        <Actions
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springIn, delay: 0.45 }}
        >
          <Link to="contactus" smooth duration={600} offset={-60}>
            <CandyButton>
              Let's collaborate
              <IconCircle>
                <FiArrowRight size={16} strokeWidth={2.5} />
              </IconCircle>
            </CandyButton>
          </Link>

        </Actions>

        <SocialBar
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springIn, delay: 0.55 }}
        >
          {[
            {
              icon: <BsGithub size={15} />,
              href: personalData.github,
              label: "GitHub",
            },
            {
              icon: <BsLinkedin size={15} />,
              href: personalData.linkedIn,
              label: "LinkedIn",
            },
            {
              icon: <RiInstagramFill size={15} />,
              href: personalData.instagram,
              label: "Instagram",
            },
            {
              icon: <IoMdCall size={15} />,
              href: `tel:${personalData.phone}`,
              label: "Phone",
            },
            {
              icon: <MdAlternateEmail size={15} />,
              href: personalData.email,
              label: "Email",
            },
          ].map((s, i) => (
            <SocialLink
              key={s.label}
              href={s.href}
              target={s.href.startsWith("tel:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              $bg={socialColors[i % socialColors.length]}
            >
              {s.icon}
            </SocialLink>
          ))}
        </SocialBar>
      </LeftColumn>

      <RightColumn
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springIn, delay: 0.3 }}
      >
        <StatsGrid>
          {impactStats.map((stat, i) => (
            <ImpactCard
              key={stat.label}
              $shadow={impactShadows[i]}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...springIn, delay: 0.35 + i * 0.08 }}
            >
              <ImpactNumber $accent={impactAccents[i]}>
                {stat.number}
              </ImpactNumber>
              <ImpactLabel>{stat.label}</ImpactLabel>
            </ImpactCard>
          ))}
        </StatsGrid>
        <CurrentlyCard
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springIn, delay: 0.7 }}
        >
          <CurrentlyLabel>Currently</CurrentlyLabel>
          <CurrentlyValue>MS in Data Analytics</CurrentlyValue>
          <CurrentlySub>
            Shipping ML automation, BI dashboards &amp; product tools
          </CurrentlySub>
        </CurrentlyCard>
      </RightColumn>

      <ScrollHint $visible={showScrollHint}>
        Scroll Down
        <FiArrowDown size={18} strokeWidth={2.5} />
      </ScrollHint>
    </Section>
  );
}

export default Home;
