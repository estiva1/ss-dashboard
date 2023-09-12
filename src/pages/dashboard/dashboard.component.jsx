import React, { useState } from "react";

import {
  ChartBody,
  ChartHeader,
  ChartLegendValueText,
  DashboardContainer,
  DashboardHeader,
  DatePickerButton,
  PageTitle,
  SliderText,
  SpanText,
  StatCard,
  StyledSlider,
  SubTitle,
  SwitchContainer,
  TimeFilterButton,
} from "./dashboard.styles";

import {
  Box,
  ButtonGroup,
  CardContent,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Tooltip,
  Zoom,
} from "@mui/material";

import CircleIcon from "@mui/icons-material/Circle";

import cube from "../../assets/cube-outlined.png";
import cubeFilled from "../../assets/cube-filled.png";
import settings from "../../assets/settings-outlined.png";
import threeCubes from "../../assets/three-cubes-outlined.png";
import threeCubesWhite from "../../assets/three-cubes-outlined-white.png";

import timeFilter from "../../assets/time-filter.png";
import {
  XAxis,
  Tooltip as RechartTooltip,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  YAxis,
  BarChart,
  Bar,
} from "recharts";
import { dataBbw, dataSco, dataSo } from "./chartData";
import InfoCard from "../../components/UI/info-cards/info-card-static/info-card-static.component";
import InfoCardExpandable from "../../components/UI/info-cards/info-card-expandable/info-card-expandable.component";
import DashboardButton from "../../components/UI/dashboard-button/dashboard-button.component";
import RecentActivityStack from "../../components/UI/recent-activity-stack/recent-activity-stack.component";
import { alertsData, recentActivityStackData } from "../../constants";
import FullScreenDialog from "../../components/recent-activity/recent-activity.component";
import AlertsGrid from "../../components/alerts-grid/alerts-grid.component";
import SaleComparisonOverviewChart from "../../components/UI/charts/sales-comparison-overwiev-chart/sales-comparison-overview-chart.component";

const Dashboard = () => {
  const [isRecentActivityOpen, setIsRecentActivityOpen] = useState(false);

  const handleRecentActivityOpen = () => {
    setIsRecentActivityOpen(true);
  };
  const handleRecentActivityClose = () => {
    setIsRecentActivityOpen(false);
  };

  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const [pressedTimeFilterButton, setPressedTimeFilterButton] = useState(null);
  const handleTimeFilterButtonClick = (buttonIndex) => {
    setPressedTimeFilterButton(buttonIndex);
  };

  return (
    <>
      <DashboardHeader>
        <Stack direction="row" alignItems="center" gap="16px">
          <PageTitle>Dashboard</PageTitle>
          <DashboardButton buttonText="Go to Products" buttonImage={threeCubesWhite} textIcon />
        </Stack>
        <DashboardButton buttonImage={settings} gapless />
      </DashboardHeader>

      <DashboardContainer>
        <div style={{ marginBottom: "16px" }}>
          <SubTitle>Key Activity Overview</SubTitle>
        </div>
        <Grid container spacing="20px">
          <Grid item xs={9}>
            <Grid container spacing="20px" marginBottom="24px">
              <Zoom in={true}>
                <Grid item xs={4}>
                  <InfoCardExpandable
                    name="Total Profit"
                    value="2,580"
                    percentsValue="23.569"
                    image={threeCubes}
                    profitToday="978"
                    profitTotal="2,982"
                  />
                </Grid>
              </Zoom>

              <Zoom in={true} timeout={500}>
                <Grid item xs={4}>
                  <InfoCard name="Total Sales" value="2,580" percentsValue="-11.423" image={cube} />
                </Grid>
              </Zoom>

              <Zoom in={true} timeout={1000}>
                <Grid item xs={4}>
                  <InfoCard name="Total Margin" value="2,580" percentsValue="0" image={cubeFilled} />
                </Grid>
              </Zoom>
            </Grid>

            <AlertsGrid alertsData={alertsData} />
          </Grid>

          <Zoom in={true} timeout={1500}>
            <Grid item xs={3}>
              <RecentActivityStack data={recentActivityStackData} setOpen={handleRecentActivityOpen} />
            </Grid>
          </Zoom>

          <Zoom in={true}>
            <Grid item xs={6}>
              <SaleComparisonOverviewChart data={scoChartData} />
            </Grid>
          </Zoom>

          <Zoom in={true} timeout={1500}>
            <Grid item xs={6}>
              <StatCard sx={{ height: "380px" }}>
                <CardContent sx={{ padding: "20px", height: "100%" }}>
                  <ChartHeader>
                    <Box sx={{ width: "70%" }}>
                      <SubTitle>Sales Comparison Overview</SubTitle>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end",
                        width: "30%",
                      }}
                    >
                      <Stack
                        direction="row"
                        sx={{
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <SpanText>Current period:</SpanText>
                        <Box
                          sx={{
                            padding: "4px 8px",
                            border: "1px solid #1565D8",
                            borderRadius: "4px",
                            cursor: "not-allowed",
                          }}
                        >
                          <SpanText color="#1565D8">Jun, 2023</SpanText>
                        </Box>
                      </Stack>
                      <Stack direction="row" sx={{ alignItems: "center", gap: "10px" }}>
                        <SpanText>Compare to:</SpanText>
                        <Box
                          sx={{
                            padding: "4px 8px",
                            border: "1px solid #1565D8",
                            borderRadius: "4px",
                            cursor: "not-allowed",
                          }}
                        >
                          <SpanText color="#1565D8">Feb, 2022</SpanText>
                        </Box>
                      </Stack>
                    </Box>
                  </ChartHeader>

                  <ChartBody>
                    <ResponsiveContainer width="80%" height="75%">
                      <AreaChart
                        //width={100}
                        //height={300}
                        data={dataSco}
                        margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="colorTnp" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="colorPm" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="colorTsa" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ff7300" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#ff7300" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <RechartTooltip />
                        <YAxis />
                        <CartesianGrid vertical={false} />
                        <Tooltip />
                        <Area type="monotone" dataKey="tnp" stroke="#8884d8" fillOpacity={1} fill="url(#colorTnp)" />
                        <Area type="monotone" dataKey="pm" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPm)" />
                        <Area type="monotone" dataKey="tsa" stroke="#ff7300" fillOpacity={1} fill="url(#colorTsa)" />
                      </AreaChart>
                    </ResponsiveContainer>

                    <List
                      sx={{
                        width: "20%",
                        bgcolor: "background.paper",
                        padding: "40px 0px 0px 8px",
                      }}
                      aria-label="contacts"
                    >
                      <ListItem disablePadding sx={{ gap: "4px" }}>
                        <ListItemIcon sx={{ minWidth: "4px" }}>
                          <CircleIcon sx={{ color: "#8884d8", width: "0.625rem" }} />
                        </ListItemIcon>
                        <SpanText>Total Net Profit</SpanText>
                      </ListItem>
                      <ChartLegendValueText>$236,88</ChartLegendValueText>

                      <ListItem disablePadding sx={{ gap: "4px" }}>
                        <ListItemIcon sx={{ minWidth: "4px" }}>
                          <CircleIcon sx={{ color: "#82ca9d", width: "0.625rem" }} />
                        </ListItemIcon>
                        <SpanText>Profit Margin</SpanText>
                      </ListItem>
                      <ChartLegendValueText>$36,65</ChartLegendValueText>

                      <ListItem disablePadding sx={{ gap: "4px" }}>
                        <ListItemIcon sx={{ minWidth: "4px" }}>
                          <CircleIcon sx={{ color: "#ff7300", width: "0.625rem" }} />
                        </ListItemIcon>
                        <SpanText>Total Sale Amount</SpanText>
                      </ListItem>
                      <ChartLegendValueText>$977,34</ChartLegendValueText>
                    </List>
                  </ChartBody>
                </CardContent>
              </StatCard>
            </Grid>
          </Zoom>
        </Grid>
        <FullScreenDialog open={isRecentActivityOpen} onClose={handleRecentActivityClose}></FullScreenDialog>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
