import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#F0F0F0",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
  },
}));

const CustomizedProgressBar = ({ status }) => {
  let color = "";
  let value = 0;

  if (status === "pending") {
    color = "#FFCB00";
    value = 50;
  } else if (status === "error") {
    color = "#CF0909";
    value = 100;
  } else if (status === "success") {
    color = "#009C34";
    value = 100;
  }

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
