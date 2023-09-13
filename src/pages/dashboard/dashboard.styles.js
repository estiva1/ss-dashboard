import { styled } from "styled-components";
import { Box } from "@mui/material";

export const DashboardHeader = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 8px;
`;

export const PageTitle = styled.h2`
  color: #000;
  margin-left: 32px;
  font-size: 2rem;
  font-weight: 700;
  line-height: 3.0625rem;
  margin: 0;
`;

export const SubTitle = styled.h3`
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;
  margin: 0;
`;

export const DashboardContainer = styled(Box)`
  padding: 24px 16px;
  border-radius: 20px;
  background: #f8fafb;
`;