export const scoChartData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      data: [33, 53, 105, 41],
      label: 'TNP',
      fill: true,
      backgroundColor: ({ chart: { ctx } }) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, 150);
        gradient.addColorStop(0, "#FF990096");
        gradient.addColorStop(1, "#FF990019");
        return gradient;
      },
      borderColor: "#FF9900",
      borderWidth: 2,
      lineTension: 0.3,
    },
    {
      data: [33, 25, 35, 91],
      label: 'PM',
      fill: true,
      backgroundColor: ({ chart: { ctx } }) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, 150);
        gradient.addColorStop(0, "#00A3FF96");
        gradient.addColorStop(1, "#00A3FF19");
        return gradient;
      },
      borderColor: "#00A3FF",
      borderWidth: 2,
      lineTension: 0.3,
    },
    {
      data: [86, 70, 12, 48],
      label: 'TSA',
      fill: true,
      backgroundColor: ({ chart: { ctx } }) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, 150);
        gradient.addColorStop(0, "#009C3496");
        gradient.addColorStop(1, "#009C3419");
        return gradient;
      },
      borderColor: "#009C34",
      borderWidth: 2,
      lineTension: 0.3,
    },
  ],
};

export const soChartData = [
  {
    name: "Strategy 1",
    s: 4000,
    pm: 2400,
    bb: 657,
    ebb: 321,
    wbb: 848,
  },
  {
    name: "Strategy 2",
    s: 3000,
    pm: 1398,
    bb: 856,
    ebb: 651,
    wbb: 499,
  },
  {
    name: "Strategy 3",
    s: 2000,
    pm: 5200,
    bb: 426,
    ebb: 723,
    wbb: 277,
  },
  {
    name: "Strategy 4",
    s: 2780,
    pm: 3908,
    bb: 556,
    ebb: 821,
    wbb: 894,
  },
  {
    name: "Strategy 5",
    s: 1890,
    pm: 4800,
    bb: 722,
    ebb: 278,
    wbb: 390,
  },
];

export const scoChartLegend = [
  {
    markerColor: "#FF9900",
    itemName: "Total Net Profit",
    primaryValue: "236,88",
    secondaryValue: "226,00",
  },
  {
    markerColor: "#00A3FF",
    itemName: "Profit Margin",
    primaryValue: "36,65",
    secondaryValue: "24,88",
  },
  {
    markerColor: "#009C34",
    itemName: "Total Sale Amount",
    primaryValue: "977,34",
    secondaryValue: "977,34",
  },
];

export const soChartLegend = [
  {
    markerColor: "#FF9900",
    itemName: "Sales",
    primaryValue: "600",
  },
  {
    markerColor: "#009C34",
    itemName: "Profit Margin",
    primaryValue: "400",
  },
  {
    markerColor: "#6FD5F6",
    itemName: "Buy Box",
    primaryValue: "200",
  },
  {
    markerColor: "#29B6F6",
    itemName: "Eligible for BuyBox",
    primaryValue: "200",
  },
  {
    markerColor: "#8BC34A",
    itemName: "Won Buy Box",
    primaryValue: "400",
  },
];
