"use client";

import React from "react";
import dynamic from "next/dynamic";

import charts from "@/lib/charts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AnalyticsChart = () => {
  return (
    <Chart
      type="radialBar"
      height={250}
      width={"100%"}
      options={charts.travelAnalytics}
      series={charts.travelAnalytics.series}
    />
  );
};

export default AnalyticsChart;
