import { styled } from "styled-components";
import { Box, Chip } from "@mui/material";

export const InfoCardBody = styled(Box)`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
  min-height: 100px;
  height: max-content;
  border-radius: 16px !important;
  padding: 20px;
  box-shadow: inset 0px 0px 0px 1px #e6e6e6, 4px 4px 8px 0px rgba(0, 0, 0, 0.12) !important;
  background: ${({ percents }) => (percents > 0 ? "#F2FAF5" : percents < 0 ? "#FCF2F2" : "#e3f2f7 ")} !important;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;

  &:hover {
    box-shadow: inset 0px 0px 0px 1px #1565d8 !important;
    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    -o-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }
`;

export const InfoCardName = styled.h3`
  color: #4e5969;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: 0.005rem;
  margin: 7px 0px;
`;

export const InfoCardValue = styled.h2`
  color: ${({ percents }) => (percents > 0 ? "#009C34" : percents < 0 ? "#CF0909" : "")};
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.5rem;
`;

export const InfoCardDifferenceValue = styled(Chip)`
  font-size: 0.75rem !important;
  font-weight: 600 !important;
  line-height: 0.75rem !important;
  padding: 8px 12px !important;
  background-color: ${({ percents }) => (percents > 0 ? "#C9E8D5" : percents < 0 ? "#F8DBDB" : "")} !important;
  color: ${({ percents }) => (percents > 0 ? "#009C34" : percents < 0 ? "#CF0909" : "")} !important;
  -webkit-transition: all 0.25s ease-out !important;
  -moz-transition: all 0.25s ease-out !important;
  -o-transition: all 0.25s ease-out !important;
  transition: all 0.25s ease-out !important;
`;

export const InfoCardImage = styled(Box)`
  width: 50px;
  height: 50px;
  background-color: #fff;
  padding: 10px;
  border-radius: 50% !important;
`;

export const InfoCardTooltip = styled.h4`
  color: #4e5969;
  text-align: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;
`;
