import React from "react";
import { Doughnut } from "react-chartjs-2";


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);



const DashboardChart = ({ salesChange=75.55 }) => {


  const darkBlueColor = " #5d87ff"; 
  const darkerGrayBackground = " #e5e7eb"; 

  const data = {
    datasets: [
      {
        data: [salesChange, 100 - salesChange],
        backgroundColor: [
          darkBlueColor,
          darkerGrayBackground,
        ],
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
          color: darkBlueColor, 
        }}
      >
        {salesChange.toFixed(1)}%
      </div>
    </div>
  );
};

export default DashboardChart;