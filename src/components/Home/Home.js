import React, { Suspense, useMemo } from "react";
import styled from "styled-components";
import { personalData } from "../../data/personal-data";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RiInstagramFill, RiContactsFill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: center;
  padding: clamp(4rem, 8vw, 6rem) 0 clamp(5rem, 8vw, 7rem);
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3vw, 2rem);
`;

const Badge = styled.span`
  align-self: flex-start;
  padding: 0.4rem 1.1rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.accentSoft};
  color: ${({ theme }) => theme.accent};
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
`;

const Heading = styled(motion.h1)`
  font-family: "Space Grotesk", "Inter", sans-serif;
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  line-height: 1.08;
  color: ${({ theme }) => theme.textPrimary};
  margin: 0;
  text-wrap: balance;
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
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.7;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 34rem;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
`;

const PrimaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.85rem 1.6rem;
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.accent},
    ${({ theme }) => theme.accentAlt}
  );
  color: ${({ theme }) => theme.body};
  font-weight: 600;
  font-size: 0.95rem;
  border: none;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease,
    background 0.25s ease;
  box-shadow: 0 18px 35px rgba(79, 70, 229, 0.35);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(79, 70, 229, 0.45);
  }

  &:active {
    transform: translateY(0px) scale(0.99);
  }
`;

const SocialBar = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.4rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  width: fit-content;
  margin-top: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadowSoft};
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textPrimary};
  transition: border 0.25s ease, color 0.25s ease, transform 0.25s ease,
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
  min-height: clamp(360px, 45vw, 520px);
  border-radius: clamp(18px, 3vw, 28px);
  overflow: hidden;
  background: ${({ theme }) => theme.panelGradient};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.cardGlow};
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
  background: radial-gradient(
    circle at center,
    rgba(15, 23, 42, 0.05),
    transparent 45%
  );
  z-index: 1;
`;

const InfoPanel = styled(motion.div)`
  position: absolute;
  bottom: clamp(1.4rem, 3vw, 2rem);
  left: clamp(1.4rem, 3vw, 2rem);
  right: clamp(1.4rem, 3vw, 2rem);
  padding: clamp(1.2rem, 2.5vw, 1.8rem);
  border-radius: clamp(16px, 2.5vw, 20px);
  backdrop-filter: blur(18px);
  background: rgba(7, 11, 22, 0.72);
  border: 1px solid rgba(34, 211, 238, 0.32);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  z-index: 2;
`;

const InfoTitle = styled.span`
  font-size: 0.75rem;
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
  font-size: clamp(1.1rem, 2.2vw, 1.35rem);
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const InfoSubtext = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const GlowAccent = styled.div`
  position: absolute;
  inset: -40%;
  background: radial-gradient(
    circle at top right,
    rgba(34, 211, 238, 0.28),
    transparent 65%
  );
  filter: blur(80px);
  opacity: 0.7;
  pointer-events: none;
`;

const HeroScene = () => {
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
      <color attach="background" args={["#030712"]} />
      <ambientLight intensity={0.3} />
      <spotLight
        position={[8, 12, 15]}
        angle={0.45}
        intensity={1.4}
        penumbra={1}
        castShadow
        color="#22d3ee"
      />
      <pointLight position={[-8, -6, -10]} intensity={1.1} color="#a855f7" />
      <Suspense fallback={null}>
        <Float speed={1.5} rotationIntensity={1.2} floatIntensity={2.3}>
          <mesh castShadow>
            <icosahedronGeometry args={[1.15, 1]} />
            <meshStandardMaterial
              color="#22d3ee"
              metalness={0.6}
              roughness={0.2}
              envMapIntensity={1}
            />
          </mesh>
        </Float>

        <Float speed={2} rotationIntensity={0.65} floatIntensity={1.1}>
          <mesh scale={[2.4, 2.4, 2.4]}>
            <torusKnotGeometry args={[0.48, 0.14, 220, 32]} />
            <meshStandardMaterial
              color="#8b5cf6"
              metalness={0.35}
              roughness={0.15}
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
          color="#38bdf8"
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
  return (
    <Section id="home">
      <GlowAccent />
      <LeftColumn>
        <Badge>Software Engineer · Builder</Badge>
        <Heading
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hello, I’m <Accent>{personalData.name}</Accent>. I build resilient{" "}
          <Accent>software</Accent> across the web, cloud, and{" "}
          <Accent>AI-first</Accent> products.
        </Heading>
        <SubHeading
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          Full-stack engineer focused on TypeScript, cloud-native services, and
          developer experience. I prototype fast, automate quality, and deliver
          production-ready features that ship to real users.
        </SubHeading>
        <Actions>
          <Link to="contactus" smooth duration={600} offset={-60}>
            <PrimaryButton whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <RiContactsFill size={18} />
              Let’s collaborate
            </PrimaryButton>
          </Link>
        </Actions>
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
      </LeftColumn>
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
            <InfoHighlight>Building distributed features for AI-backed platforms</InfoHighlight>
            <InfoSubtext>
              Designing TypeScript and Go services, event-driven pipelines, and UI layers
              that keep cross-functional teams shipping with confidence.
            </InfoSubtext>
          </InfoContent>
        </InfoPanel>
      </RightColumn>
    </Section>
  );
}

export default Home;
