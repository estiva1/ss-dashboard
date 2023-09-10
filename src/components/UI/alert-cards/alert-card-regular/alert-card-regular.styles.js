import { styled } from "styled-components";
import { Box, Button } from "@mui/material";

export const AlertCardRegularBody = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
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

export const AlertCardLabelText = styled.h3`
  color: #00a3ff;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0.00375rem;
  text-transform: uppercase;
  margin: 0;
`;

export const SpanText = styled.h4`
  color: #4e5969;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0.00375rem;
  margin: 0;
`;

export const AlertCardValue = styled.h2`
  color: #000;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.875rem;
  margin: 0;
`;

export const ResolveButton = styled(Button)`
  padding: 4px !important;
  text-transform: initial !important;
  color: #009c34 !important;
  background-color: none !important;
  font-size: 0.8125rem !important;
  font-family: Titillium Web !important;
  font-weight: 700 !important;
  line-height: 1rem !important;
  letter-spacing: 0.01625rem !important;
`;

export const DismissButton = styled(Button)`
  padding: 4px !important;
  color: #c4c4c4 !important;
  justify-content: center !important;
  text-transform: initial !important;
  background-color: none !important;
  font-size: 0.8125rem !important;
  font-family: Titillium Web !important;
  font-weight: 700 !important;
  line-height: 1rem !important;
  letter-spacing: 0.01625rem !important;
`;
