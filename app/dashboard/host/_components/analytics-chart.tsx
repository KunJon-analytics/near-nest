"use client";

import React from "react";
import Image from "next/image";
// import dynamic from "next/dynamic";

// import charts from "@/lib/charts";

// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AnalyticsChart = () => {
  return (
    <Image
      className="mx-auto w-full"
      src="/images/coming-soon.png"
      alt="image"
      width="4000"
      height="4000"
    />
    // <Chart
    //   type="radialBar"
    //   height={250}
    //   width={"100%"}
    //   options={charts.travelAnalytics}
    //   series={charts.travelAnalytics.series}
    // />
  );
};

export default AnalyticsChart;
