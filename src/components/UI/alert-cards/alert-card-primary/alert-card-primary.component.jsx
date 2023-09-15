import React from "react";

import { Stack } from "@mui/material";
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
  );
};

export default AlertCardPrimary;
