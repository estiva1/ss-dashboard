import React from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { StyledDatePicker } from "./date-picker.styles";

const CustomDatePicker = ({ value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDatePicker value={value} onChange={onChange} />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
