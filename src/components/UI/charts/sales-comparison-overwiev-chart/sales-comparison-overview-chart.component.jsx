import React, { useEffect, useState } from "react";

import { Grid, Stack } from "@mui/material";
import CustomDatePicker from "../../datePicker/date-picker.component";

import {
  Chart as ChartJS,
  CategoryScale,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart, Line } from "react-chartjs-2";

import {
  ChartContainer,
  ChartHeader,
  ChartName,
  LabelText,
  LegendItem,
  LegendItemMarker,
  LegendItemValuePrimary,
  LegendItemValueSecondary,
  LegendItems,
  SideLegendContainer,
  TooltipContainer,
  TooltipLabel,
  TooltipValue,
} from "./sales-comparison-overview-chart.styles";
import dayjs from "dayjs";

ChartJS.register(CategoryScale, Filler, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const getOrCreateTooltip = (chart) => {
  let tooltipEl = chart.canvas.parentNode.querySelector("div");

  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.style.background = "rgb(255, 255, 255)";
    tooltipEl.style.borderRadius = "16px";
    tooltipEl.style.boxShadow = "4px 4px 8px 0px rgba(0, 0, 0, 0.12)";
    tooltipEl.style.color = "black";
    tooltipEl.style.opacity = 1;
    tooltipEl.style.pointerEvents = "none";
    tooltipEl.style.position = "absolute";
    tooltipEl.style.transform = "translate(-50%, 0)";
    tooltipEl.style.transition = "all .3s ease-out";

    const table = document.createElement("table");
    table.style.margin = "0px";

    tooltipEl.appendChild(table);
    chart.canvas.parentNode.appendChild(tooltipEl);
  }

  return tooltipEl;
};

const externalTooltipHandler = (context) => {
  // Tooltip Element
  const { chart, tooltip } = context;
  const tooltipEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set Text
  if (tooltip.body) {
    const titleLines = tooltip.title || [];
    const bodyLines = tooltip.body.map((b) => b.lines);

    const tableHead = document.createElement("thead");

    //weeks on XAxis
    titleLines.forEach((title) => {
      const tr = document.createElement("tr");
      tr.style.borderWidth = 0;

      const th = document.createElement("th");
      th.style.borderWidth = 0;
      const text = document.createTextNode(title);

      th.appendChild(text);
      tr.appendChild(th);
      tableHead.appendChild(tr);
    });

    const tableBody = document.createElement("tbody");
    bodyLines.forEach((body, i) => {
      const colors = tooltip.labelColors[i];

      const span = document.createElement("span");
      span.style.background = colors.backgroundColor;
      span.style.borderColor = colors.borderColor;
      span.style.borderWidth = "2px";
      span.style.marginRight = "10px";
      span.style.height = "10px";
      span.style.width = "10px";
      span.style.display = "inline-block";

      const tr = document.createElement("tr");
      tr.style.backgroundColor = "inherit";
      tr.style.borderWidth = 0;

      const td = document.createElement("td");
      td.style.borderWidth = 0;

      const text = document.createTextNode(body);

      td.appendChild(span);
      td.appendChild(text);
      tr.appendChild(td);
      tableBody.appendChild(tr);
    });

    const tableRoot = tooltipEl.querySelector("table");

    // Remove old children
    while (tableRoot.firstChild) {
      tableRoot.firstChild.remove();
    }

    // Add new children
    tableRoot.appendChild(tableHead);
    tableRoot.appendChild(tableBody);
  }

  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.left = positionX + tooltip.caretX + "px";
  tooltipEl.style.top = positionY + tooltip.caretY + "px";
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.padding = tooltip.options.padding + "px " + tooltip.options.padding + "px";
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: {
        //color: "#979797",
        usePointStyle: true,
        pointStyle: "circle",
        font: {
          size: 8,
        },
      },
      // onHover: (event) => {
      //   event.native.target.style.cursor = "pointer";
      // },
    },
    title: {
      display: false,
      //text: "",
    },
    tooltip: {
      enabled: false,
      position: "nearest",
      external: externalTooltipHandler,
    },
  },
  elements: {
    point: {
      radius: 3,
      hoverRadius: 6,
      pointStyle: "circle",
    },
  },
};

const SalesComparisonOverviewChart = ({ data, legend }) => {
  const [chartData, setChartData] = useState(data);
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [compareToDate, setCompareToDate] = useState(dayjs());

  const legendItems = legend.map(({ markerColor, itemName, primaryValue, secondaryValue }) => {
    return {
      markerColor,
      itemName,
      primaryValue,
      secondaryValue,
    };
  });

  const generateWeeks = (selectedDate) => {
    const weeks = [];
    const startDate = new Date(selectedDate.year(), selectedDate.month(), 1);
    const endDate = new Date(selectedDate.year(), selectedDate.month() + 1, 0);
    const currentDate = new Date(startDate);

    let lastWeekEndDate = null;

    while (currentDate <= endDate) {
      const startOfWeek = new Date(currentDate);
      const endOfWeek = new Date(currentDate);

      endOfWeek.setDate(endOfWeek.getDate() + 6);

      if (currentDate >= startDate && endOfWeek <= endDate) {
        weeks.push({
          start: `${startOfWeek.getDate()} ${startOfWeek.toLocaleString("en-US", { month: "short" })}`,
          end: `${endOfWeek.getDate()} ${endOfWeek.toLocaleString("en-US", { month: "short" })}`,
        });

        lastWeekEndDate = new Date(endOfWeek);
      }

      currentDate.setDate(currentDate.getDate() + 7);
    }

    // Include any remaining days in the last week
    if (lastWeekEndDate) {
      while (lastWeekEndDate < endDate) {
        lastWeekEndDate.setDate(lastWeekEndDate.getDate() + 1);
      }

      weeks[weeks.length - 1].end = `${lastWeekEndDate.getDate()} ${lastWeekEndDate.toLocaleString("en-US", {
        month: "short",
      })}`;
    }

    return weeks.map((week) => `${week.start} - ${week.end}`);
  };

  //const weeks = generateWeeks(currentDate);

  const updateLabels = (newLabels) => {
    const updatedChartData = {
      ...chartData,
      labels: newLabels,
    };
    setChartData(updatedChartData);
  };

  const handleCurrentDataChange = (newCurrentData) => {
    setCurrentDate(dayjs(newCurrentData));
    updateLabels(generateWeeks(currentDate)); //updateLabels(weeks)
  };

  return (
    <ChartContainer>
      <ChartHeader>
        <ChartName>Sales Comparison Overview</ChartName>
        <Stack direction="column" spacing="14px">
          <Stack direction="row" spacing="10px" alignItems="center">
            <LabelText>Current period:</LabelText>
            <CustomDatePicker label="Controlled picker" value={currentDate} onChange={handleCurrentDataChange} />
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <LabelText>Compare to:</LabelText>
            <CustomDatePicker
              label="Controlled picker"
              value={compareToDate}
              onChange={(newCompareToDate) => setCompareToDate(newCompareToDate)}
            />
          </Stack>
        </Stack>
      </ChartHeader>

      <Grid container spacing="20px">
        <Grid item xs={9.5}>
          <Line options={options} data={chartData} />
        </Grid>

        <Grid item xs={2.5}>
          <SideLegendContainer>
            <LegendItems>
              {legendItems.map(({ markerColor, itemName, primaryValue, secondaryValue }) => (
                <LegendItem>
                  <Stack direction="row" gap="4px" alignItems="center">
                    <LegendItemMarker color={markerColor} />
                    <LabelText>{itemName}</LabelText>
                  </Stack>
                  <Stack direction="column" gap="2px" marginLeft="12px">
                    <LegendItemValuePrimary>${primaryValue}</LegendItemValuePrimary>
                    <LegendItemValueSecondary>(${secondaryValue})</LegendItemValueSecondary>
                  </Stack>
                </LegendItem>
              ))}
            </LegendItems>
          </SideLegendContainer>
        </Grid>
      </Grid>
    </ChartContainer>
  );
};

export default SalesComparisonOverviewChart;
