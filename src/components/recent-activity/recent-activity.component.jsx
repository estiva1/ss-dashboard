import React, { forwardRef } from "react";

import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = ({ open, onClose, children }) => {
  return (
    <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
      {children}
    </Dialog>
  );
};

export default FullScreenDialog;
