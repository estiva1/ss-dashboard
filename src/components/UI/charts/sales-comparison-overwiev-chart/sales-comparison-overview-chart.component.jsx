import React, { useState } from "react";

import { Stack } from "@mui/material";
import CustomDatePicker from "../../datePicker/date-picker.component";
import { CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

import {
  ChartContainer,
  ChartHeader,
  ChartName,
  LabelText,
  LegendItem,
  LegendItemMarker,
  LegendItemValuePrimary,
  LegendItemValueSecondary,
  SideLegendContainer,
  TooltipContainer,
} from "./sales-comparison-overview-chart.styles";

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

const SalesComparisonOverviewChart = ({ data, legend }) => {
  const legendItems = legend.map(({ markerColor, itemName, primaryValue, secondaryValue }) => {
    return {
      markerColor,
      itemName,
      primaryValue,
      secondaryValue,
    };
  });

  const [activeChart, setActiveChart] = useState(null);
  const [hoveredLine, setHoveredLine] = useState(null);

  const handleMouseEnter = (lineName) => {
    setHoveredLine(lineName);
  };
  const handleMouseLeave = () => {
    setHoveredLine(null);
  };
  const handleClick = (chartName) => {
    setActiveChart(activeChart === chartName ? null : chartName);
  };

  const isChartActive = (chartName) => activeChart === chartName;

  return (
    <ChartContainer>
      <ChartHeader>
        <ChartName>Sales Comparison Overview</ChartName>
        <Stack direction="column" spacing="14px">
          <Stack direction="row" spacing="10px" alignItems="center">
            <LabelText>Current period:</LabelText>
            <CustomDatePicker />
          </Stack>

          <Stack direction="row" spacing="10px" alignItems="center">
            <LabelText>Current period:</LabelText>
            <CustomDatePicker />
          </Stack>
        </Stack>
      </ChartHeader>

      <Stack direction="row" gap="10px">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={data} onMouseLeave={handleMouseLeave}>
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8BC34A" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8BC34A" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#29B6F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#29B6F6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFB300" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFB300" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fill: "#979797", fontSize: "0.625rem", fontWeight: 600 }} />
            <YAxis tick={{ fill: "#979797", fontSize: "0.625rem", fontWeight: 600 }} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dot
              dataKey="pv"
              stroke="#8BC34A"
              strokeWidth={2}
              fill={hoveredLine === "pv" ? "url(#colorPv)" : "transparent"}
              onMouseEnter={() => handleMouseEnter("pv")}
              onClick={() => handleClick("pv")}
            />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#29B6F6"
              fill={hoveredLine === "uv" ? "url(#colorUv)" : "transparent"}
              onMouseEnter={() => handleMouseEnter("uv")}
            />
            <Area
              type="monotone"
              dot
              dataKey="amt"
              stroke="#FFB300"
              fill={hoveredLine === "amt" ? "url(#colorAmt)" : "transparent"}
              onMouseEnter={() => handleMouseEnter("amt")}
            />
          </AreaChart>
        </ResponsiveContainer>

        <SideLegendContainer>
          {legendItems.map(({ markerColor, itemName, primaryValue, secondaryValue }) => (
            <LegendItem>
              <Stack direction="row" gap="4px" alignItems="center">
                <LegendItemMarker color={markerColor} />
                <LabelText>{itemName}</LabelText>
              </Stack>
              <Stack direction="column" gap="2px">
                <LegendItemValuePrimary>${primaryValue}</LegendItemValuePrimary>
                <LegendItemValueSecondary>(${secondaryValue})</LegendItemValueSecondary>
              </Stack>
            </LegendItem>
          ))}
        </SideLegendContainer>
      </Stack>
    </ChartContainer>
  );
};

export default SalesComparisonOverviewChart;
