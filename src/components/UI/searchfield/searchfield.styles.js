import { styled } from "styled-components";
import { InputBase } from "@mui/material";

export const StyledPaper = styled.div`
  height: 36px;
  padding-left: 12px;
  display: flex;
  align-items: center;
  box-shadow: none;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
`;

export const StyledInput = styled(InputBase)`
  font-family: "Titillium Web" !important;
  font-size: 0.875rem !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 1rem !important;
`;
