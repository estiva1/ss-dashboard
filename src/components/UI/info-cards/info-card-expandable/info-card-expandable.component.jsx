import React, { useState } from "react";

import { Collapse, Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  AdditionalStats,
  ExpandMore,
  InfoCardBody,
  InfoCardDifferenceValue,
  InfoCardImage,
  InfoCardName,
  InfoCardTooltip,
  InfoCardValue,
  StatName,
  StatValue,
} from "./info-card-expandable.styles";

const InfoCardExpandable = ({
  name = "N/A",
  value = 0,
  percentsValue = 0,
  image,
  profitToday = 0,
  profitTotal = 0,
}) => {
  const percents = Number(percentsValue);
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <InfoCardBody expanded={expanded} percents={percents}>
      <Stack direction="row" justifyContent="space-between">
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
      </Stack>

      <ExpandMore expand={expanded} onClick={handleExpand} aria-expanded={expanded} aria-label="Show more">
        <ExpandMoreIcon />
      </ExpandMore>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <AdditionalStats>
          <Stack direction="column" spacing="4px">
            <StatName>Total Profit Today</StatName>
            <StatValue style={{ color: "#009C34" }}>{profitToday}</StatValue>
          </Stack>

          <Stack direction="column" spacing="4px">
            <StatName>Total Profit</StatName>
            <StatValue style={{ color: "#FF9900" }}>{profitTotal}</StatValue>
          </Stack>
        </AdditionalStats>
      </Collapse>
    </InfoCardBody>
  );
};

export default InfoCardExpandable;
