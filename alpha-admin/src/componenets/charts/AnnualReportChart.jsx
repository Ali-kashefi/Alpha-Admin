"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function AnnualReportChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        label: "Sales",
        data: [180, 192, 168, 158, 175, 165, 170, 205, 220, 240],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Revenue",
        data: [40, 30, 50, 42, 55, 45, 75, 100, 115, 120],
        borderColor: "rgb(147, 197, 253)",
        backgroundColor: "rgba(147, 197, 253, 0.2)",

        fill: true,
        tension: 0.4,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#fff",
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: "گزارش سالانه",
        color: "#fff",
        font: {
          size: 20,
        },
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "dark-mode-text",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#fff",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#888",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#888",
        },
      },
    },
  };

  return (
    <div className="dark:bg-gray-800 bg-primary-50 p-5 rounded-lg w-full h-[400px] li ">
      <Line data={data} options={options} />
    </div>
  );
}
