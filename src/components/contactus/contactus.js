import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { personalData } from "../../data/personal-data";
import {
  SectionWrapper,
  SectionIntro,
  SectionEyebrow,
  SectionHeading,
  SectionDescription,
} from "../common/Section";

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(320px, 1.1fr);
  gap: clamp(2rem, 4vw, 3rem);

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled(motion.div)`
  border-radius: clamp(18px, 3vw, 26px);
  padding: clamp(1.8rem, 3vw, 2.6rem);
  background: ${({ theme }) => theme.panelGradient};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.cardGlow};
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const InfoHeading = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const InfoDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.65;
`;

const InfoList = styled.div`
  display: grid;
  gap: 1.1rem;
`;

const InfoItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 1rem 1.2rem;
  border-radius: 18px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(15, 23, 42, 0.55);
  color: ${({ theme }) => theme.textPrimary};
  transition: transform 0.25s ease, border 0.25s ease, color 0.25s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
  }
`;

const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`;

const InfoLabel = styled.span`
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

const InfoValue = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.textPrimary};
`;

const IconWrapper = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(99, 102, 241, 0.16);
  color: ${({ theme }) => theme.accent};
`;

const FormCard = styled(motion.form)`
  border-radius: clamp(18px, 2.8vw, 24px);
  padding: clamp(1.8rem, 3vw, 2.5rem);
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadowSoft};
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FormHeading = styled.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const FormCopy = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
`;

const InputGroup = styled.div`
  display: grid;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border};
  background: rgba(15, 23, 42, 0.35);
  color: ${({ theme }) => theme.textPrimary};
  font-size: 0.95rem;
  transition: border 0.25s ease, box-shadow 0.25s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border};
  background: rgba(15, 23, 42, 0.35);
  color: ${({ theme }) => theme.textPrimary};
  font-size: 0.95rem;
  resize: vertical;
  min-height: 140px;
  transition: border 0.25s ease, box-shadow 0.25s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
  }
`;

const SubmitButton = styled.button`
  align-self: flex-start;
  padding: 0.9rem 1.8rem;
  border-radius: 999px;
  border: none;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.accent},
    ${({ theme }) => theme.accentAlt}
  );
  color: ${({ theme }) => theme.body};
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 20px 35px rgba(79, 70, 229, 0.35);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 40px rgba(79, 70, 229, 0.45);
  }

  &:active {
    transform: translateY(0px) scale(0.99);
  }
`;

const StatusMessage = styled.span`
  font-size: 0.9rem;
  color: ${({ success, theme }) =>
    success ? theme.accent : "rgb(248, 113, 113)"};
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <SectionWrapper id="contactus">
      <SectionIntro>
        <SectionEyebrow>Connect</SectionEyebrow>
        <SectionHeading
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Let’s build the next data-driven experience together.
        </SectionHeading>
        <SectionDescription
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          Whether you want to validate an idea, modernize analytics, or collaborate
          on novel experiences, I’d love to hear from you.
        </SectionDescription>
      </SectionIntro>

      <ContactGrid>
        <InfoCard
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <InfoHeading>Direct lines</InfoHeading>
          <InfoDescription>
            Prefer a dedicated channel? Reach out via any of the platforms below and
            I’ll respond promptly.
          </InfoDescription>
          <InfoList>
            <InfoItem
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper>
                <IoLogoGithub size={20} />
              </IconWrapper>
              <InfoDetails>
                <InfoLabel>GitHub</InfoLabel>
                <InfoValue>{personalData.github.replace("https://", "")}</InfoValue>
              </InfoDetails>
            </InfoItem>
            <InfoItem
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper>
                <BiLogoLinkedin size={20} />
              </IconWrapper>
              <InfoDetails>
                <InfoLabel>LinkedIn</InfoLabel>
                <InfoValue>
                  {personalData.linkedIn.replace("https://www.", "")}
                </InfoValue>
              </InfoDetails>
            </InfoItem>
            <InfoItem href={`tel:${personalData.phone}`}>
              <IconWrapper>
                <IoMdCall size={20} />
              </IconWrapper>
              <InfoDetails>
                <InfoLabel>Call</InfoLabel>
                <InfoValue>{personalData.phone}</InfoValue>
              </InfoDetails>
            </InfoItem>
            <InfoItem href={personalData.email}>
              <IconWrapper>
                <MdAlternateEmail size={20} />
              </IconWrapper>
              <InfoDetails>
                <InfoLabel>Email</InfoLabel>
                <InfoValue>dhyeymodi21@gmail.com</InfoValue>
              </InfoDetails>
            </InfoItem>
            <InfoItem as="div">
              <IconWrapper>
                <CiLocationOn size={20} />
              </IconWrapper>
              <InfoDetails>
                <InfoLabel>Location</InfoLabel>
                <InfoValue>{personalData.address}</InfoValue>
              </InfoDetails>
            </InfoItem>
          </InfoList>
        </InfoCard>

        <FormCard
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
        >
          <FormHeading>Send a message</FormHeading>
          <FormCopy>
            Share a short brief, your desired timeline, or the challenge you’re solving.
            I’ll respond within 24 hours to plan next steps.
          </FormCopy>
          <InputGroup>
            <Input
              type="text"
              placeholder="Full name *"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              placeholder="Work email *"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextArea
              placeholder="How can I help? *"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <SubmitButton type="submit">Send message</SubmitButton>
          {status === "success" && (
            <StatusMessage success>
              Thanks for reaching out—I’ll get back to you within the next business day.
            </StatusMessage>
          )}
          {status === "error" && (
            <StatusMessage>
              Something went wrong. Please try again or drop a note at dhyeymodi21@gmail.com.
            </StatusMessage>
          )}
        </FormCard>
      </ContactGrid>
    </SectionWrapper>
  );
};

export default ContactUs;
