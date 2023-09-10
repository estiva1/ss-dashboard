import React, { useState } from "react";

import {
  AssignItemSpanText,
  ButtonContainerHorizontal,
  ChartBody,
  ChartHeader,
  ChartLegendValueText,
  DashboardContainer,
  DashboardHeader,
  DatePickerButton,
  DescriptionText,
  InfotainmentCard,
  PageTitle,
  ResolveButton,
  SecondaryButton,
  SliderText,
  SpanText,
  StatCard,
  StatCardBody,
  StatCardEnlargeable,
  StatCardLabel,
  StatCardLabelBig,
  StatCardMainValue,
  StatCardMainValueSmall,
  StyledSlider,
  SubTitle,
  SwitchContainer,
  TimeFilterButton,
} from "./dashboard.styles";

import {
  Avatar,
  Backdrop,
  Box,
  ButtonGroup,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Stack,
  Tooltip,
  Zoom,
  styled,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CircleIcon from "@mui/icons-material/Circle";

import cube from "../../assets/cube-outlined.png";
import cubeFilled from "../../assets/cube-filled.png";
import settings from "../../assets/settings-outlined.png";
import threeCubes from "../../assets/three-cubes-outlined.png";
import threeCubesWhite from "../../assets/three-cubes-outlined-white.png";

import timeFilter from "../../assets/time-filter.png";
import productImageForTableExample from "../../assets/product-image-for-table-example.png";
import {
  LineChart,
  XAxis,
  Tooltip as RechartTooltip,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  AreaChart,
  Area,
  YAxis,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import { dataBbw, dataSco, dataSo } from "./chartData";
import InfoCard from "../../components/UI/info-cards/info-card-static/info-card-static.component";
import InfoCardExpandable from "../../components/UI/info-cards/info-card-expandable/info-card-expandable.component";
import AlertCardPrimary from "../../components/UI/alert-cards/alert-card-primary/alert-card-primary.component";
import AlertCardRegular from "../../components/UI/alert-cards/alert-card-regular/alert-card-regular.component";
import DashboardButton from "../../components/UI/dashboard-button/dashboard-button.component";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

//for SpeedDial
const actions = [
  {
    icon: <StatCardLabelBig sx={{ textTransform: "none" }}>Expand</StatCardLabelBig>,
    name: "Expand",
  },
];

//for modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 371,
  width: "70%",
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
  //paddingBottom: 18,
};

const percents = 10.364;
const value = 10.364;

const profit = 0.25445;
const sku = "SKU-WM-24566712345678912345789";
const itemName = "Bubba 24 Oz Envy additional name goes here";

const columns = [
  {
    field: "id",
    headerName: "Product",
    width: 300,
    renderCell: (params) => {
      return (
        <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <Avatar sx={{ borderRadius: "0px" }} src={params.value.productImage} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <DescriptionText sx={{ color: "#1565D8 !important" }}>{params.value.productName}</DescriptionText>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "4px" }}>
              <AssignItemSpanText sx={{ fontWeight: "600", color: "#979797 !important" }}>
                Seller's SKU:
              </AssignItemSpanText>
              <AssignItemSpanText sx={{ fontWeight: "600", color: "#4E5969 !important" }}>
                SKU-WM-245667
              </AssignItemSpanText>
            </Box>
          </Box>
        </Box>
      );
    },
  },
  { field: "asin", headerName: "ASIN", width: 200 },
  { field: "oldPrice", headerName: "Old Price", type: "number", width: 120 },
  { field: "newPrice", headerName: "New Price", type: "number", width: 120 },
  {
    field: "difference",
    headerName: "Difference",
    width: 135,
    renderCell: () => {
      return (
        <Box sx={{ marginLeft: "20px" }}>
          <DescriptionText>$58.10</DescriptionText>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <AssignItemSpanText noWrap profit={profit} sx={{ fontWeight: "600" }}>
              {profit.toFixed(2)}
            </AssignItemSpanText>
            {profit > 0 ? (
              <ArrowUpwardIcon sx={{ height: "1rem" }} color="success" />
            ) : profit < 0 ? (
              <ArrowUpwardIcon
                sx={{
                  height: "1rem",
                  transform: "rotate(180deg)",
                }}
                color="error"
              />
            ) : (
              ""
            )}
          </Box>
        </Box>
      );
    },
  },
];

const rows = [
  {
    id: {
      productName: "Bubba 24 Oz Envy Bubba 1",
      productImage: `${productImageForTableExample}`,
    },
    asin: "ASIN379473575",
    oldPrice: "$58.10",
    newPrice: "$58.10",
    difference: "",
  },
  {
    id: {
      productName: "Bubba 24 Oz Envy Bubba 2",
      productImage: `${productImageForTableExample}`,
    },
    asin: "ASIN379473575",
    oldPrice: "$58.10",
    newPrice: "$58.10",
    difference: "",
  },
  {
    id: {
      productName: "Bubba 24 Oz Envy Bubba 3",
      productImage: `${productImageForTableExample}`,
    },
    asin: "ASIN379473575",
    oldPrice: "$58.10",
    newPrice: "$58.10",
    difference: "",
  },
  {
    id: {
      productName: "Bubba 24 Oz Envy Bubba 4",
      productImage: `${productImageForTableExample}`,
    },
    asin: "ASIN379473575",
    oldPrice: "$58.10",
    newPrice: "$58.10",
    difference: "",
  },
  {
    id: {
      productName: "Bubba 24 Oz Envy Bubba 5",
      productImage: `${productImageForTableExample}`,
    },
    asin: "ASIN379473575",
    oldPrice: "$58.10",
    newPrice: "$58.10",
    difference: "",
  },
  {
    id: {
      productName: "Bubba 24 Oz Envy Bubba 6",
      productImage: `${productImageForTableExample}`,
    },
    asin: "ASIN379473575",
    oldPrice: "$58.10",
    newPrice: "$58.10",
    difference: "",
  },
];

const Dashboard = () => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [expandTable, setExpandTable] = useState(false);
  const handleExpandTableClick = () => {
    setExpandTable(!expandTable);
  };

  const [hiddenSpeedDial, setHiddenSpeedDial] = useState(false);

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

            <div style={{ marginBottom: "16px" }}>
              <SubTitle>Alerts</SubTitle>
            </div>

            <Grid container spacing="20px">
              <Zoom in={true}>
                <Grid item xs={4.65}>
                  <AlertCardPrimary
                    alertLabel="Need Review: Alert"
                    alertDescription="Missing Min/Max Price"
                    value="683,562"
                  />
                </Grid>
              </Zoom>

              <Grid item xs={7.35}>
                <Grid container spacing="20px">
                  <Zoom in={true} timeout={500}>
                    <Grid item xs={6}>
                      <AlertCardRegular alertLabel="Missed Events" alertDescription="Missing Cost" value="683,562" />
                    </Grid>
                  </Zoom>

                  <Zoom in={true} timeout={1000}>
                    <Grid item xs={6}>
                      <AlertCardRegular
                        alertLabel="Missed Events"
                        alertDescription="Missing Strategy"
                        value="683,562"
                      />
                    </Grid>
                  </Zoom>

                  <Zoom in={true} timeout={500}>
                    <Grid item xs={6}>
                      <AlertCardRegular
                        alertLabel="Missed Events"
                        alertDescription="Competition Below Min. Price"
                        value="683,562"
                      />
                    </Grid>
                  </Zoom>

                  <Zoom in={true} timeout={1000}>
                    <Grid item xs={6}>
                      <AlertCardRegular
                        alertLabel="Missed Events"
                        alertDescription="Buy Box Suppressed"
                        value="683,562"
                      />
                    </Grid>
                  </Zoom>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Zoom in={true} timeout={1500}>
            <Grid item xs={3}>
              <StatCardEnlargeable sx={{ height: "100%" }}>
                <CardContent sx={{ padding: "20px" }}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <Stack key={index} sx={{ marginBottom: "15px" }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "5px",
                        }}
                      >
                        <Avatar sx={{ borderRadius: "0px" }} src={productImageForTableExample} />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            overflow: "hidden",
                          }}
                        >
                          <Tooltip title={itemName} placement="top">
                            <DescriptionText
                              noWrap
                              sx={{
                                color: "#1565D8 !important",
                              }}
                            >
                              {itemName}
                            </DescriptionText>
                          </Tooltip>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              width: "100%",
                              gap: "4px",
                            }}
                          >
                            <Box sx={{ width: "max-content" }}>
                              <AssignItemSpanText
                                sx={{
                                  width: "max-content",
                                  fontWeight: "600",
                                  color: "#979797 !important",
                                }}
                              >
                                Seller's SKU:
                              </AssignItemSpanText>
                            </Box>
                            <Tooltip title={sku} placement="top">
                              <AssignItemSpanText
                                noWrap
                                sx={{
                                  fontWeight: "600",
                                  color: "#4E5969 !important",
                                }}
                              >
                                {sku}
                              </AssignItemSpanText>
                            </Tooltip>
                          </Box>
                        </Box>
                        <Box sx={{ marginLeft: "20px" }}>
                          <DescriptionText>$58.10</DescriptionText>
                          <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <AssignItemSpanText noWrap profit={profit} sx={{ fontWeight: "600" }}>
                              {profit.toFixed(2)}
                            </AssignItemSpanText>
                            {profit > 0 ? (
                              <ArrowUpwardIcon sx={{ height: "1rem" }} color="success" />
                            ) : profit < 0 ? (
                              <ArrowUpwardIcon
                                sx={{
                                  height: "1rem",
                                  transform: "rotate(180deg)",
                                }}
                                color="error"
                              />
                            ) : (
                              ""
                            )}
                          </Box>
                        </Box>
                      </Box>
                    </Stack>
                  ))}

                  <SpeedDial
                    ariaLabel="SpeedDial for table"
                    hidden={hiddenSpeedDial}
                    icon={<SpeedDialIcon />}
                    direction="left"
                  >
                    {actions.map((action) => (
                      <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        onClick={handleExpandTableClick}
                        sx={{
                          width: "max-content",
                          borderRadius: "4px",
                          padding: "4px 12px",
                        }}
                      />
                    ))}
                  </SpeedDial>
                </CardContent>
              </StatCardEnlargeable>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={expandTable}
                onClose={() => setExpandTable(false)}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                {/* Modal Content */}
                <Box sx={style}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                      },
                    }}
                    pageSizeOptions={[5, 10, 25, 50]}
                    checkboxSelection
                  />
                </Box>
              </Modal>
            </Grid>
          </Zoom>

          <Zoom in={true}>
            <Grid item xs={6}>
              <StatCard sx={{ height: "380px" }}>
                <CardContent sx={{ padding: "20px", height: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <SubTitle>{isOn ? "BuyBox Winners" : "Strategies Overview"}</SubTitle>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end",
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          "& > *": {
                            m: 1,
                          },
                        }}
                      >
                        <ButtonGroup
                          variant="text"
                          aria-label="text button group"
                          sx={{ fontSize: "10px", margin: "8px 0px" }}
                        >
                          <TimeFilterButton
                            isPressed={pressedTimeFilterButton === 1}
                            onClick={() => handleTimeFilterButtonClick(1)}
                          >
                            1 Day
                          </TimeFilterButton>
                          <TimeFilterButton
                            isPressed={pressedTimeFilterButton === 2}
                            onClick={() => handleTimeFilterButtonClick(2)}
                          >
                            1 Week
                          </TimeFilterButton>
                          <TimeFilterButton
                            isPressed={pressedTimeFilterButton === 3}
                            onClick={() => handleTimeFilterButtonClick(3)}
                          >
                            1 Month
                          </TimeFilterButton>
                          <TimeFilterButton
                            isPressed={pressedTimeFilterButton === 4}
                            onClick={() => handleTimeFilterButtonClick(4)}
                          >
                            1 Quarter
                          </TimeFilterButton>
                          <IconButton sx={{ padding: "0px 8px" }} color="primary" aria-label="Pick desired date">
                            <DatePickerButton component="img" src={timeFilter} />
                          </IconButton>
                        </ButtonGroup>
                      </Box>
                      <SwitchContainer>
                        <input type="checkbox" checked={isOn} onChange={handleToggle} />
                        <StyledSlider isOn={isOn} />
                        <SliderText isOn={isOn}>BuyBox only</SliderText>
                      </SwitchContainer>
                    </Box>
                  </Box>

                  {isOn ? (
                    <>
                      <ChartBody>
                        <ResponsiveContainer width="80%" height="75%">
                          <BarChart
                            //width={500}
                            //height={300}
                            data={dataBbw}
                            margin={{
                              top: 20,
                              right: 0,
                              left: 0,
                              bottom: 5,
                            }}
                            barCategoryGap="20%"
                          >
                            <CartesianGrid vertical={false} strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <RechartTooltip />
                            <Bar dataKey="pv" stackId="a" fill="#FFB300" />
                            <Bar dataKey="uv" stackId="a" fill="#29B6F6" />
                            <Bar dataKey="amt" stackId="a" fill="#81D4FA" />
                            <Bar dataKey="cts" stackId="a" fill="#8BC34A" />
                            <Bar dataKey="xjr" stackId="a" fill="#AED581" />
                            <Bar dataKey="cls" stackId="a" fill="#DCEDC8" />
                          </BarChart>
                        </ResponsiveContainer>

                        <List
                          sx={{
                            width: "20%",
                            bgcolor: "background.paper",
                            padding: "10px 0px 0px 8px",
                          }}
                          aria-label="contacts"
                        >
                          <ListItem disablePadding sx={{ gap: "4px" }}>
                            <ListItemIcon sx={{ minWidth: "4px" }}>
                              <CircleIcon sx={{ color: "#DCEDC8", width: "0.625rem" }} />
                            </ListItemIcon>
                            <SpanText>Eligible</SpanText>
                          </ListItem>
                          <ChartLegendValueText gap="0px">200</ChartLegendValueText>

                          <ListItem disablePadding sx={{ gap: "4px" }}>
                            <ListItemIcon sx={{ minWidth: "4px" }}>
                              <CircleIcon sx={{ color: "#AED581", width: "0.625rem" }} />
                            </ListItemIcon>
                            <SpanText>Eligible 6-15/d</SpanText>
                          </ListItem>
                          <ChartLegendValueText gap="0px">200</ChartLegendValueText>

                          <ListItem disablePadding sx={{ gap: "4px" }}>
                            <ListItemIcon sx={{ minWidth: "4px" }}>
                              <CircleIcon sx={{ color: "#8BC34A", width: "0.625rem" }} />
                            </ListItemIcon>
                            <SpanText>Winners</SpanText>
                          </ListItem>
                          <ChartLegendValueText gap="0px">200</ChartLegendValueText>

                          <ListItem disablePadding sx={{ gap: "4px" }}>
                            <ListItemIcon sx={{ minWidth: "4px" }}>
                              <CircleIcon sx={{ color: "#81D4FA", width: "0.625rem" }} />
                            </ListItemIcon>
                            <SpanText>Winner &lt; 6h/d</SpanText>
                          </ListItem>
                          <ChartLegendValueText gap="0px">150</ChartLegendValueText>

                          <ListItem disablePadding sx={{ gap: "4px" }}>
                            <ListItemIcon sx={{ minWidth: "4px" }}>
                              <CircleIcon sx={{ color: "#29B6F6", width: "0.625rem" }} />
                            </ListItemIcon>
                            <SpanText>Winner &gt; 15/d</SpanText>
                          </ListItem>
                          <ChartLegendValueText gap="0px">250</ChartLegendValueText>

                          <ListItem disablePadding sx={{ gap: "4px" }}>
                            <ListItemIcon sx={{ minWidth: "4px" }}>
                              <CircleIcon sx={{ color: "#FFB300", width: "0.625rem" }} />
                            </ListItemIcon>
                            <SpanText>[Text goes here]</SpanText>
                          </ListItem>
                          <ChartLegendValueText gap="0px">100</ChartLegendValueText>
                        </List>
                      </ChartBody>
                    </>
                  ) : (
                    <>
                      <ChartBody>
                        <ResponsiveContainer width="80%" height="75%">
                          <BarChart
                            data={dataSo}
                            margin={{
                              top: 20,
                              right: 0,
                              left: 0,
                              bottom: 5,
                            }}
                          >
                            <defs>
                              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="50%" stopColor="#8BC34A" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#8BC34A" stopOpacity={0} />
                              </linearGradient>
                              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="50%" stopColor="#29B6F6" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#29B6F6" stopOpacity={0} />
                              </linearGradient>
                              <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="50%" stopColor="#FFB300" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#FFB300" stopOpacity={0} />
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <RechartTooltip />
                            <Bar dataKey="pv" fill="url(#colorAmt)" />
                            <Bar dataKey="uv" fill="url(#colorPv)" />
                            <Bar dataKey="amt" fill="url(#colorUv)" />
                          </BarChart>
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
                              <CircleIcon sx={{ color: "#8BC34A", width: "0.625rem" }} />
                            </ListItemIcon>
                            <SpanText>Sales</SpanText>
                          </ListItem>
                          <ChartLegendValueText>600</ChartLegendValueText>

                          <ListItem disablePadding sx={{ gap: "4px" }}>
                            <ListItemIcon sx={{ minWidth: "4px" }}>
                              <CircleIcon sx={{ color: "#29B6F6", width: "0.625rem" }} />
                            </ListItemIcon>
                            <SpanText>Buy Box</SpanText>
                          </ListItem>
                          <ChartLegendValueText>200</ChartLegendValueText>

                          <ListItem disablePadding sx={{ gap: "4px" }}>
                            <ListItemIcon sx={{ minWidth: "4px" }}>
                              <CircleIcon sx={{ color: "#FFB300", width: "0.625rem" }} />
                            </ListItemIcon>
                            <SpanText>Profit Margin</SpanText>
                          </ListItem>
                          <ChartLegendValueText>400</ChartLegendValueText>
                        </List>
                      </ChartBody>
                    </>
                  )}
                </CardContent>
              </StatCard>
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
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
