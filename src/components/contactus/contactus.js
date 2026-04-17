import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import { personalData } from "../../data/personal-data";
import {
  SectionWrapper,
  SectionIntro,
  SectionEyebrow,
  SectionHeading,
  SectionDescription,
} from "../common/Section";
import { FloatingCircle } from "../common/Decorations";
import { slideUp, staggerContainer } from "../../styles/animations";

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: clamp(2rem, 4vw, 3rem);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled(motion.div)`
  border-radius: ${({ theme }) => theme.radiusLg};
  padding: clamp(1.6rem, 3vw, 2.2rem);
  background: ${({ theme }) => theme.card};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  box-shadow: ${({ theme }) => theme.cardShadowViolet};
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  @media (max-width: 768px) {
    box-shadow: ${({ theme }) => theme.popShadowSm};
  }
`;

const InfoHeading = styled.h3`
  font-family: ${({ theme }) => theme.fontHeading};
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.foreground};
`;

const InfoDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.mutedForeground};
  line-height: 1.65;
  font-size: 0.95rem;
`;

const InfoList = styled(motion.div)`
  display: grid;
  gap: 0.85rem;
`;

const contactIconColors = ["#8B5CF6", "#F472B6", "#FBBF24", "#34D399", "#8B5CF6"];

const InfoItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.9rem 1.1rem;
  border-radius: ${({ theme }) => theme.radiusMd};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.foreground};
  box-shadow: ${({ theme }) => theme.popShadowSm};
  transition: all 300ms ${({ theme }) => theme.bouncyEase};
  text-decoration: none;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: ${({ theme }) => theme.popShadow};
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: none;
  }
`;

const IconWrapper = styled.span`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: ${({ $bg }) => $bg};
  color: #ffffff;
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  flex-shrink: 0;
`;

const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 0;
`;

const InfoLabel = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.mutedForeground};
`;

const InfoValue = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.foreground};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const FormCard = styled(motion.form)`
  border-radius: ${({ theme }) => theme.radiusLg};
  padding: clamp(1.6rem, 3vw, 2.2rem);
  background: ${({ theme }) => theme.card};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  box-shadow: ${({ theme }) => theme.cardShadow};
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: 768px) {
    box-shadow: ${({ theme }) => theme.popShadowSm};
  }
`;

const FormHeading = styled.h3`
  font-family: ${({ theme }) => theme.fontHeading};
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.foreground};
`;

const FormCopy = styled.p`
  margin: 0;
  font-size: 0.92rem;
  color: ${({ theme }) => theme.mutedForeground};
  line-height: 1.65;
`;

const InputGroup = styled.div`
  display: grid;
  gap: 1rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-family: ${({ theme }) => theme.fontBody};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.foreground};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: ${({ theme }) => theme.radiusMd};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.inputBorder};
  background: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.foreground};
  font-size: 0.95rem;
  box-shadow: 4px 4px 0px transparent;
  transition: border 0.25s ease, box-shadow 0.25s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
    box-shadow: 4px 4px 0px 0px ${({ theme }) => theme.accent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.mutedForeground};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: ${({ theme }) => theme.radiusMd};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.inputBorder};
  background: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.foreground};
  font-size: 0.95rem;
  resize: vertical;
  min-height: 130px;
  box-shadow: 4px 4px 0px transparent;
  transition: border 0.25s ease, box-shadow 0.25s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
    box-shadow: 4px 4px 0px 0px ${({ theme }) => theme.accent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.mutedForeground};
  }
`;

const SubmitButton = styled.button`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.8rem 1.2rem 0.8rem 1.5rem;
  border-radius: ${({ theme }) => theme.radiusFull};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.accentForeground};
  font-family: ${({ theme }) => theme.fontHeading};
  font-weight: 700;
  font-size: 0.95rem;
  box-shadow: ${({ theme }) => theme.popShadow};
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
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${({ theme }) => theme.accentForeground};
  color: ${({ theme }) => theme.accent};
`;

const StatusMessage = styled.span`
  font-size: 0.88rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radiusMd};
  background: ${({ $success, theme }) =>
    $success ? theme.quaternarySoft : "rgba(239, 68, 68, 0.1)"};
  color: ${({ $success, theme }) =>
    $success ? theme.quaternary : theme.danger};
  border: 1.5px solid
    ${({ $success, theme }) => ($success ? theme.quaternary : theme.danger)};
`;

const springIn = { type: "spring", stiffness: 200, damping: 22 };

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xwpelyng", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const contactItems = [
    {
      icon: <IoLogoGithub size={18} />,
      label: "GitHub",
      value: personalData.github.replace("https://", ""),
      href: personalData.github,
      external: true,
    },
    {
      icon: <BiLogoLinkedin size={18} />,
      label: "LinkedIn",
      value: personalData.linkedIn.replace("https://www.", ""),
      href: personalData.linkedIn,
      external: true,
    },
    {
      icon: <IoMdCall size={18} />,
      label: "Call",
      value: personalData.phone,
      href: `tel:${personalData.phone}`,
      external: false,
    },
    {
      icon: <MdAlternateEmail size={18} />,
      label: "Email",
      value: "dhyeymodi21@gmail.com",
      href: personalData.email,
      external: true,
    },
    {
      icon: <CiLocationOn size={18} />,
      label: "Location",
      value: personalData.address,
      href: null,
      external: false,
    },
  ];

  return (
    <SectionWrapper id="contactus" style={{ position: "relative" }}>
      <FloatingCircle
        $color="#FBBF24"
        $opacity={0.12}
        size="140px"
        style={{ top: "-3rem", right: "0" }}
        $duration="10s"
      />

      <SectionIntro>
        <SectionEyebrow
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={springIn}
        >
          Connect
        </SectionEyebrow>
        <SectionHeading
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...springIn, delay: 0.1 }}
        >
          Let's build the next data-driven experience together.
        </SectionHeading>
        <SectionDescription
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ...springIn, delay: 0.15 }}
        >
          Whether you want to validate an idea, modernize analytics, or
          collaborate on novel experiences, I'd love to hear from you.
        </SectionDescription>
      </SectionIntro>

      <ContactGrid>
        <InfoCard
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...springIn, delay: 0.1 }}
        >
          <InfoHeading>Direct lines</InfoHeading>
          <InfoDescription>
            Prefer a dedicated channel? Reach out via any of the platforms below
            and I'll respond promptly.
          </InfoDescription>
          <InfoList
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {contactItems.map((item, i) => (
              <InfoItem
                key={item.label}
                as={item.href ? "a" : "div"}
                href={item.href || undefined}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                variants={slideUp}
              >
                <IconWrapper $bg={contactIconColors[i]}>
                  {item.icon}
                </IconWrapper>
                <InfoDetails>
                  <InfoLabel>{item.label}</InfoLabel>
                  <InfoValue>{item.value}</InfoValue>
                </InfoDetails>
              </InfoItem>
            ))}
          </InfoList>
        </InfoCard>

        <FormCard
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...springIn, delay: 0.15 }}
        >
          <FormHeading>Send a message</FormHeading>
          <FormCopy>
            Share a short brief, your desired timeline, or the challenge you're
            solving. I'll respond within 24 hours to plan next steps.
          </FormCopy>
          <InputGroup>
            <Label>
              Full Name
              <Input
                type="text"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Email
              <Input
                type="email"
                placeholder="you@company.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Message
              <TextArea
                placeholder="How can I help?"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Label>
          </InputGroup>
          <SubmitButton type="submit">
            Send message
            <IconCircle>
              <FiArrowRight size={14} strokeWidth={2.5} />
            </IconCircle>
          </SubmitButton>
          {status === "success" && (
            <StatusMessage $success>
              Thanks for reaching out — I'll get back to you within the next
              business day.
            </StatusMessage>
          )}
          {status === "error" && (
            <StatusMessage>
              Something went wrong. Please try again or drop a note at
              dhyeymodi21@gmail.com.
            </StatusMessage>
          )}
        </FormCard>
      </ContactGrid>
    </SectionWrapper>
  );
};

export default ContactUs;
