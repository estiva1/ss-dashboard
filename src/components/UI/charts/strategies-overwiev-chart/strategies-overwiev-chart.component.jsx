import React from "react";

import { Stack } from "@mui/material";
import CustomDatePicker from "../../datePicker/date-picker.component";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import {
  ChartContainer,
  ChartHeader,
  ChartName,
  LabelText,
  LegendItem,
  LegendItemMarker,
  LegendItemValuePrimary,
  SelectPeriodButton,
  SideLegendContainer,
  TooltipContainer,
} from "./strategies-overwiev-chart.styles";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <TooltipContainer>
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </TooltipContainer>
    );
  }

  return null;
};

//rounded top corners
const CustomBar = (props) => {
  const { x, y, width, height } = props;
  const r = 4;
  const path = `M${x},${y + r}
    Q${x},${y},${x + r},${y}
    L${x + width - r},${y}
    Q${x + width},${y},${x + width},${y + r}
    L${x + width},${y + height}
    L${x},${y + height}
    Z
  `;

  return <path d={path} fill={props.fill} />;
};

const StrategiesOverwievChart = ({ data, legend }) => {
  const legendItems = legend.map(({ markerColor, itemName, primaryValue }) => {
    return {
      markerColor,
      itemName,
      primaryValue,
    };
  });

  return (
    <ChartContainer>
      <ChartHeader>
        <ChartName>Strategies Overview</ChartName>
        <Stack direction="row" gap="6px" alignItems="center">
          <SelectPeriodButton>1 Day</SelectPeriodButton>
          <SelectPeriodButton>1 Week</SelectPeriodButton>
          <SelectPeriodButton>1 Month</SelectPeriodButton>
          <SelectPeriodButton>1 Quarter</SelectPeriodButton>
          <CustomDatePicker />
        </Stack>
      </ChartHeader>

      <Stack direction="row" gap="10px">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} barGap={0}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fill: "#979797", fontSize: "0.625rem", fontWeight: 600 }} />
            <YAxis tick={{ fill: "#979797", fontSize: "0.625rem", fontWeight: 600 }} />
            <Tooltip />
            <Bar dataKey="s" fill="#FF9900" shape={<CustomBar />} />
            <Bar dataKey="pm" fill="#009C34" shape={<CustomBar />} />
            <Bar dataKey="wbb" stackId="a" fill="#8BC34A" />
            <Bar dataKey="ebb" stackId="a" fill="#29B6F6" />
            <Bar dataKey="bb" stackId="a" fill="#6FD5F6" shape={<CustomBar />} />
          </BarChart>
        </ResponsiveContainer>

        <SideLegendContainer>
          {legendItems.map(({ markerColor, itemName, primaryValue }) => (
            <LegendItem>
              <Stack direction="row" gap="4px" alignItems="center">
                <LegendItemMarker color={markerColor} />
                <LabelText>{itemName}</LabelText>
              </Stack>
              <LegendItemValuePrimary>${primaryValue}</LegendItemValuePrimary>
            </LegendItem>
          ))}
        </SideLegendContainer>
      </Stack>
    </ChartContainer>
  );
};

export default StrategiesOverwievChart;
