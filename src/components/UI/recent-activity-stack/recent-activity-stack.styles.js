import { Box } from "@mui/material";
import { css, styled } from "styled-components";

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

const applyClampStyles = (props) => {
  if (props.clamp) {
    return css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    `;
  }
  return "";
};

export const PrimaryText = styled.h3`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;
`;

export const PrimaryTextHighlighted = styled(PrimaryText)`
  color: #1565d8;
  ${applyClampStyles}
`;

export const SmallText = styled.h4`
  color: ${({ difference }) => (difference > 0 ? "#009C34" : difference < 0 ? "#CF0909" : "#4e5969")};
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.625rem;
  margin: 0;

  ${applyClampStyles}
`;
