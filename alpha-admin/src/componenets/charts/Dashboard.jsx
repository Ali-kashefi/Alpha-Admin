"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import calculateWeeklySalesChange from "@/utils/calculateWeeklySalesChange";
import useFormatNumberByLanguage from "@/hook/useFormatNumberByLanguage";

ChartJS.register(ArcElement, Tooltip, Legend);

function DashboardChart({ invoices }) {
  const { comparison, change } = calculateWeeklySalesChange(invoices);

  const darkBlueColor = "#5d87ff";
  const darkerGrayBackground = "#e5e7eb";

  const data = {
    datasets: [
      {
        data: [comparison, 100 - comparison],
        backgroundColor: [darkBlueColor, darkerGrayBackground],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    rotation: 270,
    circumference: 180,
    cutout: "90%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    maintainAspectRatio: false,
  };

  const formattedChange = change >= 0 ? `+${change.toFixed(1)}` : `${change.toFixed(1)}`;
  const changeColor = change >= 0 ? "bg-green-500 opacity-50 text-white" : " bg-red-600 opacity-25 text-white";

  return (
    <div style={{ width: "250px", height: "150px", position: "relative" }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        <p className={`text-4xl mt-14 font-bold dark:text-white  `}>
          {useFormatNumberByLanguage(comparison.toFixed(1))}%
        </p>
        <p className={`mt-2 text-sm w-20  rounded-4xl dark:text-white  ${changeColor} `}>
          {useFormatNumberByLanguage(formattedChange)}%
        </p>
        <p></p>
      </div>
    </div>
  );
}

export default DashboardChart;