import React from "react";
import styled, { useTheme } from "styled-components";
import { floatY, slowSpin } from "../../styles/animations";

export const FloatingCircle = styled.div`
  position: absolute;
  width: ${({ size }) => size || "80px"};
  height: ${({ size }) => size || "80px"};
  border-radius: 50%;
  background: ${({ $color }) => $color};
  opacity: ${({ $opacity }) => $opacity || 0.6};
  pointer-events: none;
  z-index: 0;
  animation: ${floatY} ${({ $duration }) => $duration || "6s"} ease-in-out
    infinite;
  animation-delay: ${({ $delay }) => $delay || "0s"};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FloatingTriangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: ${({ size }) => `${(parseInt(size) || 30) / 2}px`} solid
    transparent;
  border-right: ${({ size }) => `${(parseInt(size) || 30) / 2}px`} solid
    transparent;
  border-bottom: ${({ size }) => `${parseInt(size) || 30}px`} solid
    ${({ $color }) => $color};
  opacity: ${({ $opacity }) => $opacity || 0.6};
  pointer-events: none;
  z-index: 0;
  transform: rotate(${({ $rotation }) => $rotation || 0}deg);
  animation: ${floatY} ${({ $duration }) => $duration || "7s"} ease-in-out
    infinite;
  animation-delay: ${({ $delay }) => $delay || "0s"};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FloatingSquare = styled.div`
  position: absolute;
  width: ${({ size }) => size || "36px"};
  height: ${({ size }) => size || "36px"};
  background: ${({ $color }) => $color};
  border-radius: ${({ theme }) => theme.radiusSm};
  opacity: ${({ $opacity }) => $opacity || 0.5};
  pointer-events: none;
  z-index: 0;
  animation: ${slowSpin} ${({ $duration }) => $duration || "20s"} linear
    infinite;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DotGridBg = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image: radial-gradient(
    circle,
    ${({ theme }) => theme.border} 1px,
    transparent 1px
  );
  background-size: 28px 28px;
  opacity: 0.45;
`;

const SquiggleSvg = styled.svg`
  display: block;
  width: 100%;
  height: 24px;
  margin: 0 auto;
`;

export const SquiggleDivider = ({ color, ...props }) => {
  const theme = useTheme();
  return (
    <SquiggleSvg
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 12C50 12 50 4 100 4C150 4 150 20 200 20C250 20 250 4 300 4C350 4 350 20 400 20C450 20 450 4 500 4C550 4 550 20 600 20C650 20 650 4 700 4C750 4 750 20 800 20C850 20 850 4 900 4C950 4 950 20 1000 20C1050 20 1050 4 1100 4C1150 4 1150 12 1200 12"
        stroke={color || theme.border}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </SquiggleSvg>
  );
};
