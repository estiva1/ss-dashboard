import { styled } from "styled-components";
import { Box } from "@mui/material";

export const ChartContainer = styled(Box)`
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

export const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin-bottom: 20px;
`;

export const ChartName = styled.h2`
  color: #000;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.875rem;
  margin: 0;
`;

export const LabelText = styled.h4`
  color: #4e5969;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.625rem;
  margin: 0;
`;

export const SideLegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: max-content;
  height: auto;
`;

export const LegendItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LegendItemMarker = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.color || "#4E5969"};
  border-radius: 50%;
`;

export const LegendItemValuePrimary = styled.h3`
  color: #000;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  margin: 0;
`;

export const LegendItemValueSecondary = styled(LegendItemValuePrimary)`
  font-weight: 300;
`;

//Tooltip for chart

export const TooltipContainer = styled.div`
  min-width: 100px;
  min-height: 50px;
  width: max-content;
  height: max-content;
  padding: 16px;
  border-radius: 16px !important;
  background-color: #fff;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.12) !important;
`;
