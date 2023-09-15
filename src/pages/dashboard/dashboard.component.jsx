import React, { useState } from "react";

import { Grid, Stack, Zoom } from "@mui/material";

import cube from "../../assets/cube-outlined.png";
import cubeFilled from "../../assets/cube-filled.png";
import settings from "../../assets/settings-outlined.png";
import threeCubes from "../../assets/three-cubes-outlined.png";
import threeCubesWhite from "../../assets/three-cubes-outlined-white.png";

import AlertsGrid from "../../components/alerts-grid/alerts-grid.component";
import FullScreenDialog from "../../components/recent-activity/recent-activity.component";
import DashboardButton from "../../components/UI/dashboard-button/dashboard-button.component";
import InfoCard from "../../components/UI/info-cards/info-card-static/info-card-static.component";
import RecentActivityStack from "../../components/UI/recent-activity-stack/recent-activity-stack.component";
import InfoCardExpandable from "../../components/UI/info-cards/info-card-expandable/info-card-expandable.component";
import StrategiesOverwievChart from "../../components/UI/charts/strategies-overwiev-chart/strategies-overwiev-chart.component";
import SaleComparisonOverviewChart from "../../components/UI/charts/sales-comparison-overwiev-chart/sales-comparison-overview-chart.component";

import { alertsData, recentActivityData } from "../../constants";
import { scoChartData, scoChartLegend, soChartData, soChartLegend } from "../../constants/chartsData";

import { DashboardContainer, DashboardHeader, PageTitle, SubTitle } from "./dashboard.styles";

const Dashboard = () => {
  const [isRecentActivityOpen, setIsRecentActivityOpen] = useState(false);

  const handleRecentActivityOpen = () => {
    setIsRecentActivityOpen(true);
  };
  const handleRecentActivityClose = () => {
    setIsRecentActivityOpen(false);
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
              <RecentActivityStack data={recentActivityData} setOpen={handleRecentActivityOpen} />
            </Grid>
          </Zoom>

          <Zoom in={true}>
            <Grid item xs={6}>
              <StrategiesOverwievChart data={soChartData} legend={soChartLegend} />
            </Grid>
          </Zoom>

          <Zoom in={true}>
            <Grid item xs={6}>
              <SaleComparisonOverviewChart data={scoChartData} legend={scoChartLegend} />
            </Grid>
          </Zoom>
        </Grid>

        <FullScreenDialog open={isRecentActivityOpen} onClose={handleRecentActivityClose} />
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
