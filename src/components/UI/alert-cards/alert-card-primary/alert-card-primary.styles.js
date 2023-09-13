import { styled } from "styled-components";
import { Box, Button } from "@mui/material";

export const AlertCardPrimaryBody = styled(Box)`
  position: relative; // for ripple effect
  overflow: hidden; // for ripple effect
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
  height: 100%;
  width: 100%;
  padding: 20px;
  border-radius: 16px !important;
  background-image: linear-gradient(135deg, #1565d8 0%, #090c53 100%);
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.12) !important;

  &::before {
    position: absolute;
    content: "";
    border-radius: 50%;
    width: 200px;
    height: 200px;
    bottom: -90px;
    right: -135px;
    animation: zoom-in-zoom-out 5.18s ease infinite; 
    overflow: hidden;
  }

  &::before {
    background-color: #a0b4d31b;
  }

  &::after {
    position: absolute;
    content: "";
    border-radius: 50%;
    width: 300px;
    height: 300px;
    top: -175px;
    right: -150px;
    animation: zoom-in-zoom-out 4.35s ease infinite;
    animation-delay: 1s;
    overflow: hidden;
  }

  &::after {
    background-color: #a0b4d31b;
  }

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.1, 1.1);
      background-color: #a0b4d344;
    }
    100% {
      transform: scale(1, 1);
    }
  }

  &:hover {
    background: linear-gradient(135deg, #2670d8 0%, #0b0e67 100%);
  }
`;

export const AlertCardLabelText = styled.h3`
  color: #6fd5f6;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0.00375rem;
  text-transform: uppercase;
  margin: 0;
`;

export const SpanText = styled.h4`
  color: #c4c4c4;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0.00375rem;
  margin: 0;
`;

export const AlertCardValue = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.0625rem;
  margin: 0;
`;

export const ResolveButton = styled(Button)`
  padding: 12px 36px !important;
  text-transform: initial !important;
  color: #000 !important;
  background-color: #48d882 !important;
  font-size: 0.8125rem !important;
  font-family: Titillium Web !important;
  font-weight: 700 !important;
  line-height: 1rem !important;
  letter-spacing: 0.01625rem !important;
  z-index: 5;
`;

export const DismissButton = styled(Button)`
  padding: 12px 36px !important;
  color: #c4c4c4 !important;
  justify-content: center !important;
  text-transform: initial !important;
  background-color: none !important;
  font-size: 0.8125rem !important;
  font-family: Titillium Web !important;
  font-weight: 700 !important;
  line-height: 1rem !important;
  letter-spacing: 0.01625rem !important;
  z-index: 5;
`;
