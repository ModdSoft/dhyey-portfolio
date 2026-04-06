import React, { Suspense, useEffect, useMemo, useState } from "react";
import styled, { keyframes, useTheme } from "styled-components";
import { personalData } from "../../data/personal-data";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiArrowDown } from "react-icons/fi";
import { RiInstagramFill, RiContactsFill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: clamp(1.6rem, 3.5vw, 3rem);
  align-items: center;
  min-height: calc(100vh - 96px);
  padding: clamp(3rem, 6vw, 4.5rem) 0 clamp(3rem, 6vw, 4.5rem);

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: clamp(2.5rem, 6vw, 4rem) 0;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.2rem, 2.6vw, 1.6rem);

  @media (max-width: 1200px) {
    order: 1;
  }
`;

const Badge = styled.span`
  align-self: flex-start;
  padding: 0.35rem 0.95rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.accentSoft};
  color: ${({ theme }) => theme.accent};
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
`;

const Heading = styled(motion.h1)`
  font-family: "Space Grotesk", "Manrope", sans-serif;
  font-size: clamp(2.1rem, 4.4vw, 3.4rem);
  line-height: 1.05;
  color: ${({ theme }) => theme.textPrimary};
  margin: 0;
  text-wrap: balance;

  @media (max-width: 640px) {
    font-size: clamp(1.9rem, 7vw, 2.6rem);
    line-height: 1.1;
  }
`;

const Accent = styled.span`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.accent},
    ${({ theme }) => theme.accentAlt}
  );
  -webkit-background-clip: text;
  color: transparent;
`;

const SubHeading = styled(motion.p)`
  margin: 0;
  font-size: clamp(0.98rem, 1.9vw, 1.1rem);
  line-height: 1.6;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 32rem;
  min-height: 3.6rem;

  @media (max-width: 640px) {
    max-width: 100%;
    min-height: 3.2rem;
  }
`;

const blink = keyframes`
  0%, 45% {
    opacity: 1;
  }
  55%, 100% {
    opacity: 0;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0.7;
  }
  50% {
    transform: translateY(6px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 0.7;
  }
`;

const TypingText = styled.span`
  white-space: pre-line;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 0.55rem;
  height: 1em;
  margin-left: 0.1rem;
  background: ${({ theme }) => theme.accent};
  border-radius: 999px;
  transform: translateY(2px);
  animation: ${blink} 0.9s steps(1) infinite;
`;

const ScrollHint = styled.div`
  position: absolute;
  left: 50%;
  bottom: clamp(1.2rem, 3vw, 2rem);
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
  pointer-events: none;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.4s ease;

  svg {
    animation: ${float} 1.6s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  align-items: center;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PrimaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.8rem 1.4rem;
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.accent},
    ${({ theme }) => theme.accentAlt}
  );
  color: ${({ theme }) => theme.body};
  font-weight: 600;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
  box-shadow: ${({ theme }) => theme.buttonShadow};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.buttonShadowHover};
  }

  &:active {
    transform: translateY(0px) scale(0.99);
  }
`;

const SocialBar = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.7rem;
  padding: 0.7rem 0.9rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  width: fit-content;
  margin-top: 0;
  box-shadow: ${({ theme }) => theme.shadowSoft};

  @media (max-width: 640px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textPrimary};
  transition:
    border 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease,
    background 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
    transform: translateY(-2px);
    background: ${({ theme }) => theme.accentSoft};
  }
`;

const RightColumn = styled.div`
  position: relative;
  width: 100%;
  min-height: clamp(320px, 40vw, 460px);
  border-radius: clamp(18px, 3vw, 28px);
  overflow: hidden;
  background: ${({ theme }) => theme.panelGradient};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.cardGlow};

  @media (max-width: 1200px) {
    order: 2;
    min-height: clamp(260px, 60vw, 360px);
    max-width: 560px;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    min-height: 260px;
  }
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
`;

const CanvasOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.canvasOverlay};
  z-index: 1;
`;

const InfoPanel = styled(motion.div)`
  position: absolute;
  bottom: clamp(1.4rem, 3vw, 2rem);
  left: clamp(1.4rem, 3vw, 2rem);
  right: clamp(1.4rem, 3vw, 2rem);
  padding: clamp(1rem, 2.2vw, 1.4rem);
  border-radius: clamp(16px, 2.5vw, 20px);
  backdrop-filter: blur(18px);
  background: ${({ theme }) => theme.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  z-index: 2;

  @media (max-width: 640px) {
    position: static;
    margin: 0.8rem;
  }
`;

const InfoTitle = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  color: ${({ theme }) => theme.textMuted};
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const InfoHighlight = styled.span`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const InfoSubtext = styled.span`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const GlowAccent = styled.div`
  position: absolute;
  inset: -40%;
  background: radial-gradient(
    circle at top right,
    ${({ theme }) => theme.accentSoftAlt},
    transparent 65%
  );
  filter: blur(80px);
  opacity: 0.7;
  pointer-events: none;
`;

const typedLines = [
  "I design systems that scale, solve problems that matter, and turn ideas into impact.",
  "MS in Data Analytics. Building ML automation, BI storytelling, and full-stack products.",
  "This portfolio is how I think, build, and keep moving forward.",
];

const HeroScene = () => {
  const theme = useTheme();
  const particlePositions = useMemo(() => {
    const points = new Float32Array(400 * 3);
    for (let i = 0; i < 400; i += 1) {
      const radius = 1.8 + Math.random() * 1.6;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 2.4;
      points[i * 3] = Math.cos(angle) * radius;
      points[i * 3 + 1] = y;
      points[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return points;
  }, []);

  return (
    <Canvas dpr={[1, 2]}>
      <color attach="background" args={[theme.canvasBg]} />
      <ambientLight intensity={0.3} />
      <spotLight
        position={[8, 12, 15]}
        angle={0.45}
        intensity={1.4}
        penumbra={1}
        castShadow
        color={theme.canvasAccent}
      />
      <pointLight
        position={[-8, -6, -10]}
        intensity={1.1}
        color={theme.canvasAccentAlt}
      />
      <Suspense fallback={null}>
        <Float speed={1.5} rotationIntensity={1.2} floatIntensity={2.3}>
          <mesh castShadow>
            <icosahedronGeometry args={[1.15, 1]} />
            <meshStandardMaterial
              color={theme.canvasAccent}
              metalness={0.55}
              roughness={0.25}
              envMapIntensity={1}
            />
          </mesh>
        </Float>

        <Float speed={2} rotationIntensity={0.65} floatIntensity={1.1}>
          <mesh scale={[2.4, 2.4, 2.4]}>
            <torusKnotGeometry args={[0.48, 0.14, 220, 32]} />
            <meshStandardMaterial
              color={theme.canvasAccentAlt}
              metalness={0.3}
              roughness={0.1}
              transparent
              opacity={0.45}
            />
          </mesh>
        </Float>

        <points>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attach="attributes-position"
              array={particlePositions}
              count={particlePositions.length / 3}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.035}
            sizeAttenuation
            color={theme.canvasParticle}
            transparent
            opacity={0.85}
          />
        </points>
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

function Home() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setShowScrollHint(false);
      }
    };

    const hideTimer = setTimeout(() => {
      setShowScrollHint(false);
    }, 6500);

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(hideTimer);
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
        const nextLength = displayed.length + (isDeleting ? -1 : 1);
        setDisplayed(currentLine.slice(0, nextLength));
      },
      isDeleting ? 24 : 42,
    );

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, lineIndex]);

  return (
    <Section id="home">
      <GlowAccent />
      <LeftColumn>
        <Badge>Data Analyst · Software Engineer</Badge>
        <Heading
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I'm <Accent>Dhyey Modi</Accent>.
          <br />I design systems that <Accent>scale</Accent>, solve problems
          that <Accent>matter</Accent>, and turn ideas into{" "}
          <Accent>impact</Accent>.
        </Heading>
        <SubHeading
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <TypingText>{displayed}</TypingText>
          <Cursor />
        </SubHeading>
        <Actions>
          <Link to="contactus" smooth duration={600} offset={-60}>
            <PrimaryButton
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <RiContactsFill size={18} />
              Let’s collaborate
            </PrimaryButton>
          </Link>
          <SocialBar
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <SocialLink
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <BsGithub size={18} />
            </SocialLink>
            <SocialLink
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={18} />
            </SocialLink>
            <SocialLink
              href={personalData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <RiInstagramFill size={18} />
            </SocialLink>
            <SocialLink href={`tel:${personalData.phone}`} aria-label="Phone">
              <IoMdCall size={18} />
            </SocialLink>
            <SocialLink
              href={personalData.email}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <MdAlternateEmail size={18} />
            </SocialLink>
          </SocialBar>
        </Actions>
      </LeftColumn>
      <ScrollHint visible={showScrollHint}>
        Scroll Down
        <FiArrowDown size={18} />
      </ScrollHint>
      <RightColumn>
        <CanvasContainer>
          <HeroScene />
        </CanvasContainer>
        <CanvasOverlay />
        <InfoPanel
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        >
          <InfoTitle>Currently</InfoTitle>
          <InfoContent>
            <InfoHighlight>MS in Data Analytics</InfoHighlight>
            <InfoSubtext>
              Shipping ML automation, BI dashboards, and product tools.
            </InfoSubtext>
          </InfoContent>
        </InfoPanel>
      </RightColumn>
    </Section>
  );
}

export default Home;
