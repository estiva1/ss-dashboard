import React from "react";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { StyledInput, StyledPaper } from "./searchfield.styles";

const CustomizedSearchField = ({ placeholder = "Search...", ariaLabel, value, onChange, disabled }) => {
  return (
    <StyledPaper>
      <StyledInput
        sx={{ flex: 1 }}
        placeholder={placeholder}
        inputProps={{ "aria-label": ariaLabel }}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      <IconButton type="button" aria-label="search">
        <SearchIcon sx={{ color: "#1565D8", width: "16px", height: "16px" }} />
      </IconButton>
    </StyledPaper>
  );
};

export default CustomizedSearchField;
