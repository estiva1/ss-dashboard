import React from "react";

import { Stack } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { Ripple } from "../../dashboard-button/dashboard-button.component";

import {
  AlertCardLabelText,
  AlertCardPrimaryBody,
  AlertCardValue,
  DismissButton,
  ResolveButton,
  SpanText,
} from "./alert-card-primary.styles";

const AlertCardPrimary = ({ alertLabel = "", alertDescription = "", value = "", resolve, dismiss }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <AlertCardPrimaryBody>
          <Stack spacing="32px">
            <AlertCardLabelText>{alertLabel}</AlertCardLabelText>
            <Stack>
              <SpanText>{alertDescription}</SpanText>
              <AlertCardValue>{value}</AlertCardValue>
            </Stack>
          </Stack>

          <Stack direction="row" spacing="10px">
            <ResolveButton onClick={resolve}>Resolve</ResolveButton>
            <DismissButton onClick={dismiss}>Dismiss</DismissButton>
          </Stack>
          <Ripple />
        </AlertCardPrimaryBody>
      </motion.div>
    </AnimatePresence>
  );
};

export default AlertCardPrimary;
