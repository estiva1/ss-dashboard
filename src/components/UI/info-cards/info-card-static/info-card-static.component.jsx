import React from "react";
import { Stack } from "@mui/material";

import {
  InfoCardBody,
  InfoCardDifferenceValue,
  InfoCardImage,
  InfoCardName,
  InfoCardTooltip,
  InfoCardValue,
} from "./info-card-static.styles";

const InfoCard = ({ name = "N/A", value = 0, percentsValue = 0, image }) => {
  const percents = Number(percentsValue);

  return (
    <InfoCardBody percents={percents}>
      <Stack direction="column" justifyContent="start" spacing="12px">
        <Stack direction="column" spacing="1px">
          <InfoCardName>{name}</InfoCardName>
          <InfoCardValue percents={percents}>${value}</InfoCardValue>
        </Stack>
        <InfoCardDifferenceValue
          percents={percents}
          label={percents > 0 ? `+${percents.toFixed(2)}%` : `${percents.toFixed(2)}%`}
        />
      </Stack>

      <Stack direction="column" justifyContent="space-between" alignItems="end">
        <InfoCardImage component="img" src={image} />
        <InfoCardTooltip>vs last week</InfoCardTooltip>
      </Stack>
    </InfoCardBody>
  );
};

export default InfoCard;
