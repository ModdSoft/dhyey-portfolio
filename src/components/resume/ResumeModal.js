import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiDownload } from "react-icons/fi";
import { personalData } from "../../data/personal-data";

const driveId = personalData.resume.match(/\/d\/([^/]+)/)?.[1];
const embedUrl = driveId
  ? `https://drive.google.com/file/d/${driveId}/preview`
  : personalData.resume;

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(6px);
  padding: 1.5rem;
`;

const Panel = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 900px;
  height: 90vh;
  max-height: 900px;
  border-radius: ${({ theme }) => theme.radiusLg};
  background: ${({ theme }) => theme.card};
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  box-shadow: 12px 12px 0px 0px ${({ theme }) => theme.accent};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-height: 100%;
    height: 95vh;
    border-radius: ${({ theme }) => theme.radiusMd};
    box-shadow: ${({ theme }) => theme.popShadow};
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.4rem;
  border-bottom: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  flex-shrink: 0;
`;

const Title = styled.span`
  font-family: ${({ theme }) => theme.fontHeading};
  font-weight: 700;
  font-size: 1rem;
  color: ${({ theme }) => theme.foreground};
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const IconBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.foreground};
  box-shadow: ${({ theme }) => theme.popShadowSm};
  transition: all 250ms ${({ theme }) => theme.bouncyEase};

  &:hover {
    background: ${({ theme }) => theme.tertiary};
    transform: translate(-1px, -1px);
    box-shadow: ${({ theme }) => theme.popShadow};
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: none;
  }
`;

const DownloadLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.borderDark};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.foreground};
  box-shadow: ${({ theme }) => theme.popShadowSm};
  transition: all 250ms ${({ theme }) => theme.bouncyEase};

  &:hover {
    background: ${({ theme }) => theme.quaternary};
    color: #fff;
    transform: translate(-1px, -1px);
    box-shadow: ${({ theme }) => theme.popShadow};
  }
`;

const IframeWrap = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.muted};
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const ResumeModal = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <Panel
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Header>
              <Title>Resume — {personalData.name}</Title>
              <HeaderActions>
                <DownloadLink
                  href={personalData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download resume"
                >
                  <FiDownload size={16} strokeWidth={2.5} />
                </DownloadLink>
                <IconBtn onClick={onClose} aria-label="Close resume viewer">
                  <FiX size={18} strokeWidth={2.5} />
                </IconBtn>
              </HeaderActions>
            </Header>
            <IframeWrap>
              <StyledIframe
                src={embedUrl}
                title="Resume"
                allow="autoplay"
                loading="lazy"
              />
            </IframeWrap>
          </Panel>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
