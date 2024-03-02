"use client";

import React from "react";
import Image from "next/image";
// import dynamic from "next/dynamic";

// import charts from "@/lib/charts";

// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const IncomeChart = () => {
  return (
    <Image
      className="mx-auto w-full"
      src="/images/coming-soon.png"
      alt="image"
      width="4000"
      height="4000"
    />
    // <Chart
    //   type="area"
    //   height={180}
    //   width={"100%"}
    //   options={charts.travelIncome}
    //   series={charts.travelIncome.series}
    // />
  );
};

export default IncomeChart;
