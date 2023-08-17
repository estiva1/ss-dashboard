import { Box, Button, Chip, Paper, Typography } from "@mui/material";
import { styled } from "styled-components";

export const PageTitle = styled(Typography)`
  color: #000 !important;
  margin-left: 32px !important;
  font-size: 2rem !important;
  font-family: Titillium Web !important;
  font-weight: 700 !important;
  line-height: 3.0625rem !important;
`;

export const SubTitle = styled(Typography)`
  color: #000 !important;
  font-family: Titillium Web !important;
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  line-height: 1.5rem !important;
`;

export const DashboardContainer = styled(Box)`
  display: flex;
  min-height: 300px;
  margin: 16px;
  padding: 24px 16px;
  border-radius: 20px;
  background: #f8fafb;
`;

export const StatCard = styled(Paper)`
  min-height: 100px;
  width: 100%;
  border-radius: 16px !important;
  background: ${({ value }) => (value >= 0 ? "#E8F1EB" : value < 0 ? "#FCF2F2" : "")} !important;
  box-shadow: ${({ expanded }) =>
    expanded
      ? "inset 0px 0px 0px 2px #1565d8"
      : "inset 0px 0px 0px 1px #e6e6e6, 4px 4px 8px 0px rgba(0, 0, 0, 0.12)"} !important;
  -webkit-transition: all 0.25s ease-out !important;
  -moz-transition: all 0.25s ease-out !important;
  -o-transition: all 0.25s ease-out !important;
  transition: all 0.25s ease-out !important;

  &:hover {
    box-shadow: ${({ expanded }) =>
      expanded ? "inset 0px 0px 0px 2px #1565d8" : "inset 0px 0px 0px 1px #1565d8"} !important;
    -webkit-transition: all 0.25s ease-out;
    -moz-transition: all 0.25s ease-out;
    -o-transition: all 0.25s ease-out;
    transition: all 0.25s ease-out;
  }
`;

export const StatCardEnlargeable = styled(Paper)`
  min-height: 100px;
  width: 100%;
  border-radius: 16px !important;
  background: ${({ value }) => (value >= 0 ? "#E8F1EB" : value < 0 ? "#FCF2F2" : "")} !important;
  box-shadow: ${({ expanded }) =>
    expanded
      ? "inset 0px 0px 0px 2px #1565d8"
      : "inset 0px 0px 0px 1px #e6e6e6, 4px 4px 8px 0px rgba(0, 0, 0, 0.12)"} !important;
  -webkit-transition: all 0.25s ease-out !important;
  -moz-transition: all 0.25s ease-out !important;
  -o-transition: all 0.25s ease-out !important;
  transition: all 0.25s ease-out !important;

  &:hover {
    box-shadow: ${({ expanded }) =>
      expanded ? "inset 0px 0px 0px 2px #1565d8" : "inset 0px 0px 0px 1px #1565d8"} !important;
    -webkit-transition: all 0.25s ease-out;
    -moz-transition: all 0.25s ease-out;
    -o-transition: all 0.25s ease-out;
    transition: all 0.25s ease-out;
  }
`;

export const StatCardHeader = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const StatCardContentBox = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StatCardLabel = styled(Typography)`
  color: ${(props) => props.color || "#4e5969"} !important;
  font-family: Titillium Web !important;
  font-size: 0.75rem !important;
  font-weight: 600 !important;
  line-height: 1rem !important;
  letter-spacing: 0.00375rem !important;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const StatCardLabelBig = styled(Typography)`
  color: ${(props) => props.color || "#4e5969"} !important;
  font-family: Titillium Web !important;
  font-size: 1rem !important;
  font-weight: 700 !important;
  line-height: 1rem !important;
  letter-spacing: 0.005rem !important;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const StatCardImage = styled(Box)`
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  background-color: #fff;
  padding: 8px;
  border-radius: 50% !important;
`;

export const StatCardBody = styled(Box)`
  display: flex;
  align-items: end;
  justify-content: space-between;
  align-self: stretch;
`;

export const StatCardMainValue = styled(Typography)`
  color: ${({ value }) => (value > 0 ? "#009C34" : value < 0 ? "#CF0909" : "")} !important;
  font-family: Titillium Web !important;
  font-size: 2rem !important;
  font-weight: 700 !important;
  line-height: 2.5rem !important;
`;

export const StatCardMainValueSmall = styled(Typography)`
  color: ${(props) => props.color || "#000"} !important;
  font-family: Titillium Web !important;
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  line-height: 1.875rem !important;
`;

export const StatCardDifferenceValue = styled(Chip)`
  font-size: 0.75rem !important;
  font-weight: 600 !important;
  line-height: 0.75rem !important;
  padding: 8px 12px !important;
  background-color: ${({ value }) => (value > 0 ? "#C9E8D5" : value < 0 ? "#F8DBDB" : "")} !important;
  color: ${({ value }) => (value > 0 ? "#009C34" : value < 0 ? "#CF0909" : "")} !important;
  -webkit-transition: all 0.25s ease-out !important;
  -moz-transition: all 0.25s ease-out !important;
  -o-transition: all 0.25s ease-out !important;
  transition: all 0.25s ease-out !important;
`;

export const StatCardCollapseContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const CollapseContainerLabelText = styled(Typography)`
  color: #979797 !important;
  font-family: Titillium Web !important;
  font-weight: 600 !important;
  font-size: 0.625rem !important;
  line-height: 0.625rem !important;
`;

export const SecondaryText = styled(Typography)`
  color: ${(props) => props.color || "#4e5969"} !important;
  font-family: Titillium Web !important;
  font-size: 0.875rem !important;
  font-weight: 700 !important;
  line-height: 1rem !important;
  padding-bottom: 20px;
`;

export const InfotainmentCard = styled(Paper)`
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 16px !important;
  background-image: linear-gradient(135deg, #1565d8 0%, #090c53 100%);
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.12) !important;

  &:hover {
    background: linear-gradient(135deg, #2670d8 0%, #0b0e67 100%);
  }
`;

export const CardLabelText = styled(Typography)`
  color: #6fd5f6;
  font-family: Titillium Web !important;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0.00375rem;
`;

export const ButtonContainerHorizontal = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const ButtonContainerVertical = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: start;
`;

export const ResolveButton = styled(Button)`
  padding: 12px 36px !important;
  text-transform: initial !important;
  color: #000 !important;
  background-color: #48d882 !important;
  font-size: 0.8125rem !important;
  font-weight: 700 !important;
  line-height: 1rem !important;
  letter-spacing: 0.01625rem !important;
`;

export const SecondaryButton = styled(Button)`
  padding: ${(props) => props.padding || "12px 36px"} !important;
  color: ${(props) => props.fontColor || "#c4c4c4"} !important;
  justify-content: ${(props) => props.justifyContent || "center"} !important;
  text-transform: initial !important;
  background-color: none !important;
  font-size: 0.8125rem !important;
  font-weight: 700 !important;
  line-height: 1rem !important;
  letter-spacing: 0.01625rem !important;
  min-width: 30px !important;
`;

export const DescriptionText = styled(Typography)`
  margin: auto;
  font-family: Titillium Web !important;
  font-size: 1rem !important;
  color: #4e5969 !important;
`;

export const AssignItemSpanText = styled(Typography)`
  font-size: 0.75rem !important;
  color: ${({ profit }) => (profit > 0 ? "#009C34" : profit < 0 ? "#CF0909" : "#4e5969")} !important;
  font-family: Titillium Web !important;
  line-height: 18px !important;
`;
//-------------------------------

export const SwitchContainer = styled.label`
  display: inline-block;
  position: relative;
  width: 110px;
  height: 24px;
  margin: 0px 8px;
`;

export const StyledSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.isOn ? "#1565D8" : "#fff")};
  box-shadow: inset 0px 0px 0px 1px #1565d8;
  transition: 0.4s;
  border-radius: 12px; //half the height of switch

  &::before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: ${(props) => (props.isOn ? "#fff" : "#C4C4C4")};
    transition: 0.4s ease;
    border-radius: 50%;
    transform: ${(props) => (props.isOn ? "translateX(86px)" : "translateX(0)")};
  }
`;

export const SliderText = styled(Typography)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: ${(props) => (props.isOn ? "12px" : "28px")} !important;
  color: ${(props) => (props.isOn ? "#fff" : "#C4C4C4")};
  font-family: Titillium Web !important;
  font-size: 0.75rem !important;
  font-weight: 600 !important;
  line-height: 1rem !important;
  letter-spacing: 0.004rem !important;
  cursor: pointer;
`;

export const TimeFilterButton = styled(Button)`
  color: ${(props) => (props.isPressed ? "#000" : "#c4c4c4")} !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  border-color: #c4c4c4 !important;
  font-size: 0.75rem !important;
  font-weight: 600 !important;
  line-height: 1rem !important;
  letter-spacing: 0.00375rem !important;
  text-transform: initial !important;
`;

export const DatePickerButton = styled(Box)`
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  border-radius: none !important;
`;

export const SpanText = styled(Typography)`
  color: ${(props) => props.color || "#4e5969"} !important;
  font-family: Titillium Web !important;
  font-size: 0.6875rem !important;
  font-weight: 600 !important;
  line-height: 0.6875rem !important;
`;

export const ChartLegendValueText = styled(Typography)`
  margin-left: 14px !important;
  margin-bottom: ${(props) => props.gap || "22px"} !important;
  font-family: Titillium Web !important;
  color: #000 !important;
  font-size: 0.875rem !important;
  font-weight: 700 !important;
  line-height: 1rem !important;
`;

//------------------------

export const ChartHeader = styled(Box)`
  display: flex;
  flex-direction: row;
  height: 15%;
`;

export const ChartBody = styled(Box)`
  display: flex;
  flex-direction: row;
  font-size: 1rem !important;
  height: 100%;
  width: 100%;
  align-items: start;
  gap: 10px;
`;
