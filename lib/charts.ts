import { ApexOptions } from "apexcharts";

type ChartType = { travelAnalytics: ApexOptions; travelIncome: ApexOptions };

const charts: ChartType = {
  // Dashboard Travels
  travelAnalytics: {
    colors: ["#4ade80", "#f43f5e", "#a855f7"],
    series: [44, 55, 67],
    chart: {
      height: 250,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 10,
          size: "35%",
        },
        track: {
          margin: 10,
        },
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              return w.config.series.reduce((s: any, v: any) => s + v);
            },
          },
        },
      },
    },
    grid: {
      padding: {
        top: -20,
        bottom: -20,
        right: 0,
        left: 0,
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Booked", "Cancelled", "Unconfirmed"],
  },

  travelIncome: {
    colors: ["#0EA5E9"],
    series: [
      {
        name: "Income",
        data: [82, 25, 60, 30, 50, 20],
      },
    ],
    chart: {
      type: "area",
      stacked: false,
      height: 180,
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      padding: {
        left: 0,
        right: 0,
        top: -20,
        bottom: -8,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.1,
        stops: [20, 100, 100, 100],
      },
    },
    stroke: {
      width: 2,
    },
    tooltip: {
      shared: true,
    },
    legend: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  },
};

export default charts;
