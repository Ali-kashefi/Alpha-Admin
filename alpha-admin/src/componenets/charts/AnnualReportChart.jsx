// AnnualReportChart.js
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
  Filler, // برای پر کردن ناحیه زیر نمودار
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
        borderColor: "rgb(59, 130, 246)", // رنگ خط آبی پررنگ
        backgroundColor: "rgba(59, 130, 246, 0.2)", // رنگ پس‌زمینه ناحیه زیر خط آبی
        fill: true, // این خط ناحیه زیر نمودار را پر می‌کند
        tension: 0.4, // انحنای خط
      },
      {
        label: "Revenue",
        data: [40, 30, 50, 42, 55, 45, 75, 100, 115, 120],
        borderColor: "rgb(147, 197, 253)", // رنگ خط آبی کمرنگ
        backgroundColor: "rgba(147, 197, 253, 0.2)", // رنگ پس‌زمینه ناحیه زیر خط آبی کمرنگ
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
        position: "top", // موقعیت legend را در بالا تنظیم می‌کند
        labels: {
          color: "#fff",
          usePointStyle: true, // از استایل دایره‌ای برای Legend استفاده می‌کند
        },
      },
      title: {
        display: true,
        text: "گزارش سالانه", // عنوان نمودار
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
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#fff",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // خطوط عمودی Grid
        },
        ticks: {
          color: "#888", // رنگ نوشته‌های محور X
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // خطوط افقی Grid
        },
        ticks: {
          color: "#888", // رنگ نوشته‌های محور Y
        },
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#1f2937",
        padding: "20px",
        borderRadius: "8px",
        color: "#fff",
        width: "100%",
        height: "400px",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
}
