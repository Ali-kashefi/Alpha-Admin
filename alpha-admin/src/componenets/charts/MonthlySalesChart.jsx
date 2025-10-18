"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useThemeStore } from "@/store/themeStore";
import useChartTheme from "@/hook/useChartTheme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function MonthlySalesChart({ translate }) {
  
  
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
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales",
        data: [150, 385, 190, 290, 180, 190, 280, 100, 200, 380, 270, 90],
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        borderColor: "rgb(59, 130, 246)",
        borderWidth: 1,
        barThickness: 16,
        borderRadius: {
          topLeft: 8,
          topRight: 8,
        },
      },
    ],
  };

  
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `${translate("cahrts.monthly_sales.0.title")}`,
        color: "dark-mode-text",
        font: {
          size: 20,
        },
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `Sales: ${context.raw}`;
          },
        },
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "#ffffff",
        bodyColor: "#fff",
        borderColor: "#fff",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
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
          min: 0,
          max: 400,
          stepSize: 100,
        },
      },
    },
  };

  return (
    <div className="dark:bg-gray-800 bg-primary-50 p-5 rounded-lg text-white w-full h-full shadow-xl">
      <Bar data={data} options={options} />
    </div>
  );
}
