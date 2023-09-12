import styled from "styled-components";
import { DatePicker } from "@mui/x-date-pickers";

export const StyledDatePicker = styled(DatePicker)(() => ({
  "& .MuiInputBase-root": {
    width: "110px",
    height: "22px",
    color: "#1565D8",
    boxShadow: "inset 0px 0px 0px 1px #1565D8",
    fontSize: "0.625rem",
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "0.625rem",
  },
  "& .MuiSvgIcon-root": {
    width: "14px",
    height: "14px",
    color: "#1565D8",
  },
}));
