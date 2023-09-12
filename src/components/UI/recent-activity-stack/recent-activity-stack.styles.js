import { Box, Typography } from "@mui/material";
import { styled } from "styled-components";

export const RecentActivityStackBody = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: end; // for button "See all"
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 16px !important;
  background-color: #fff;
  box-shadow: inset 0px 0px 0px 1px #e6e6e6, 4px 4px 8px 0px rgba(0, 0, 0, 0.12) !important;
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

export const RecentItemContainer = styled.div``;

export const CardName = styled.h2`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin: 0;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
`;

export const PrimaryText = styled(Typography)`
  color: #4e5969 !important;
  font-family: Titillium Web !important;
  font-size: 0.875rem !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 1rem !important;
  margin: 0 !important;
`;

export const PrimaryTextHighlighted = styled(PrimaryText)`
  color: #1565d8 !important;
`;

export const SecondaryText = styled(Typography)`
  color: ${({ difference }) => (difference > 0 ? "#009C34" : difference < 0 ? "#CF0909" : "#4e5969")};
  font-family: Titillium Web !important;
  font-size: 0.625rem !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 0.625rem !important;
  display: inline-flex;
  margin: 0 !important;
`;
