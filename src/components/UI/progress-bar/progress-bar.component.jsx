import React from "react";
import Box from "@mui/material/Box";
import { linearProgressClasses } from "@mui/material";
import { BorderLinearProgress } from "./progress-bar.styles";

const CustomizedProgressBar = ({ status }) => {

  const COLORS = {
    pending: "#FFCB00",
    error: "#CF0909",
    success: "#009C34",
  };

  const VALUES = {
    pending: 50,
    error: 100,
    success: 100,
  };

  const color = COLORS[status] || "";
  const value = VALUES[status] || 0;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress
        variant="determinate"
        value={value}
        sx={{
          [`& .${linearProgressClasses.bar}`]: {
            backgroundColor: color,
          },
        }}
      />
    </Box>
  );
};

export default CustomizedProgressBar;
