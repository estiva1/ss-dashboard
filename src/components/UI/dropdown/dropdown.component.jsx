import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { ListItem, PrimaryText, StyledAutocomplete } from "./dropdown.styles";

const Dropdown = ({ data = {}, placeholder = "Select", setSelectedValue, disabled }) => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleValueChange = (event, newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  return (
    <StyledAutocomplete
      id="controllable-states-demo"
      size="small"
      disabled={disabled}
      value={value}
      options={data}
      inputValue={inputValue}
      onChange={handleValueChange}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      getOptionLabel={(option) => `${option}`}
      renderInput={(params) => <TextField label={placeholder} {...params} />}
      renderOption={(props, option, state) => {
        return (
          <ListItem {...props}>
            <PrimaryText>{option}</PrimaryText>
          </ListItem>
        );
      }}
    />
  );
};

export default Dropdown;
