import React from "react";
import { Stack } from "@mui/material";

import {
  AlertCardLabelText,
  AlertCardRegularBody,
  AlertCardValue,
  DismissButton,
  ResolveButton,
  SpanText,
} from "./alert-card-regular.styles";

const AlertCardRegular = ({ alertLabel = "", alertDescription = "", value = "", resolve, dismiss }) => {
  return (
    <AlertCardRegularBody>
      <Stack spacing="20px">
        <AlertCardLabelText>{alertLabel}</AlertCardLabelText>
        <Stack>
          <SpanText>{alertDescription}</SpanText>
          <AlertCardValue>{value}</AlertCardValue>
        </Stack>
      </Stack>

      <Stack direction="column" spacing="2px" justifyContent="end">
        <ResolveButton onClick={resolve}>Check</ResolveButton>
        <DismissButton onClick={dismiss}>Dismiss</DismissButton>
      </Stack>
    </AlertCardRegularBody>
  );
};

export default AlertCardRegular;
