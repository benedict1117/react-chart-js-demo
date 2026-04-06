import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData
} from "chart.js";
import { useState } from "react";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { Bar } from "react-chartjs-2";

const LABELS = ["Banana", "Apple", "Mango", "Grapes", "Kiwi"];

const INITIAL_DATA: ChartData<"bar", number[], string> = {
  labels: LABELS,
  datasets: [
    {
      label: "Favorite Fruits",
      data: [3, 3, 3, 3, 3],
      backgroundColor: [
        "#ef4444", // red-500
        "#3b82f6", // blue-500
        "#eab308", // yellow-500
        "#22c55e", // green-500
        "#a855f7", // purple-500
      ]
    }
  ]
}

const STATIC_OPTIONS: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false, // allow custom height
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Static Chart"
    }
  }
}

export default function App() {

  const [chartData, setChartData] = useState<ChartData<"bar", number[], string>>(INITIAL_DATA);

  const handleChangeChartDate = (index: number, value: number) => {

    // Create new array of values
    const newData = [...chartData.datasets[0].data];
    newData[index] = value;

    // Return new array
    setChartData({
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: newData
        }
      ]
    });

  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="text-center max-w-7xl w-full max-h-[80vh]">
        <Bar data={chartData} options={STATIC_OPTIONS} />
        {LABELS.map((item, index) => (
          <input 
            className="bg-neutral-200 border-2 border-black"
            key={`${item}-${index}`}
            value={chartData.datasets[0].data[index] || undefined}
            onChange={(e) => handleChangeChartDate(index, Number(e.target.value || 0))}
            type="number" 
            />
        ))}
      </div>
    </div>
  )
}