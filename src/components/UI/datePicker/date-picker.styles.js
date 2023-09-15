import styled from "styled-components";
import { DatePicker } from "@mui/x-date-pickers";

export const StyledDatePicker = styled(DatePicker)`
  .MuiInputBase-root {
    width: 130px;
    height: 22px;
    color: #1565D8;
    box-shadow: inset 0px 0px 0px 1px #1565D8;
    font-size: 0.625rem;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 600;
    line-height: 0.625rem;
  }
  .MuiSvgIcon-root {
    width: 14px;
    height: 14px;
    color: #1565D8;
  }
`;
