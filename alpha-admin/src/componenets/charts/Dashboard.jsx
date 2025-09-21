"use client";
import React from "react";
// Doughnut component from react-chartjs-2 for the circular chart
import { Doughnut } from "react-chartjs-2";
// Chart.js core and necessary elements for the Doughnut chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// A utility function to calculate sales change between two weeks
import calculateWeeklySalesChange from "@/utils/calculateWeeklySalesChange";
// A custom hook to format numbers based on the user's language
import useFormatNumberByLanguage from "@/hook/useFormatNumberByLanguage";

// Register necessary Chart.js elements before use
ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * A component that displays a Doughnut chart for weekly sales comparison.
 * It shows the sales comparison percentage, the change from the previous week,
 * and a summary of weekly sales.
 * @param {object} props - Component props
 * @param {Array} props.invoices - An array of invoice data
 * @param {function} props.translate - The translation function from next-i18next
 */
function DashboardChart({ invoices, translate }) {
  // Destructure values from the sales calculation utility
  const { comparison, change, currentWeekSales, previousWeekSales } =
    calculateWeeklySalesChange(invoices);

  // Define colors for the chart and UI elements
  const darkBlueColor = "#5d87ff";
  const darkerGrayBackground = "#e5e7eb";

  // Chart data configuration
  const data = {
    datasets: [
      {
        // The data array for the Doughnut chart. 'comparison' is the filled part,
        // and '100 - comparison' is the remaining part of the circle.
        data: [comparison, 100 - comparison],
        backgroundColor: [darkBlueColor, darkerGrayBackground],
        borderWidth: 0, // No border between chart segments
      },
    ],
  };

  // Chart options to configure the appearance and behavior
  const options = {
    rotation: 270, // Start the chart at the top-middle
    circumference: 180, // Make it a half-circle (180 degrees)
    cutout: "90%", // Create a large empty space in the middle of the chart
    plugins: {
      legend: {
        display: false, // Hide the chart legend
      },
      tooltip: {
        enabled: false, // Hide tooltips on hover
      },
    },
    maintainAspectRatio: false, // Allow custom height and width
  };

  // Logic to format the percentage change with a plus sign for positive numbers
  const formattedChange =
    change >= 0 ? `+${change.toFixed(1)}` : `${change.toFixed(1)}`;
  
  // Logic to determine the color of the change text based on the value
  const changeColor =
    change >= 0
      ? "bg-green-500 opacity-50 text-white"
      : "bg-red-800 opacity-75 text-white";

  // Format sales numbers using the custom language hook
  const current_WeekSales = useFormatNumberByLanguage(
    currentWeekSales.toFixed(0)
  );
  const previous_WeekSales = useFormatNumberByLanguage(
    previousWeekSales.toFixed(0)
  );

  return (
    // Main container for the chart and its overlay content
    <div style={{ width: "250px", height: "150px", position: "relative", marginTop:"80px" }} >
      
      {/* The Doughnut chart component */}
      <Doughnut data={data} options={options} />
      
      {/* Absolute positioned div to overlay text on the chart */}
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
        {/* Displays the comparison percentage */}
        <p className={`text-4xl mt-14 font-bold dark:text-white `}>
          {useFormatNumberByLanguage(comparison.toFixed(1))}%
        </p>
        {/* Displays the percentage change from last week, with color-coded background */}
        <p
          className={`mt-2 text-sm w-20 rounded-4xl dark:text-white ${changeColor}`}
        >
          {useFormatNumberByLanguage(formattedChange)}%
        </p>
      </div>
      
      {/* Displays the translated weekly sales summary text */}
      <p className="text-center text-primary-400 mt-8">
        {translate("home.weeklySales.0.Weekly_report", {
          0: current_WeekSales,
          1: previous_WeekSales,
        })}
      </p>
    </div>
  );
}

export default DashboardChart;