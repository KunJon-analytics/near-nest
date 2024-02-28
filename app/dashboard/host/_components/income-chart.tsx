"use client";

import React from "react";
import dynamic from "next/dynamic";

import charts from "@/lib/charts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const IncomeChart = () => {
  return (
    <Chart
      type="area"
      height={180}
      width={"100%"}
      options={charts.travelIncome}
      series={charts.travelIncome.series}
    />
  );
};

export default IncomeChart;
