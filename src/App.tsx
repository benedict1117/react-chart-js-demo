import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData,
} from "chart.js";
import { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const LABELS = ["Banana", "Apple", "Mango", "Grapes", "Kiwi"];
const COLORS = ["#ef4444", "#3b82f6", "#eab308", "#22c55e", "#a855f7"];

const INITIAL_VALUES = [3, 3, 3, 3, 3];

export default function App() {
  const [values, setValues] = useState<number[]>(INITIAL_VALUES);

  // Update one value
  const handleChangeValue = (index: number, value: number) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  // Bar chart data (Type-safe)
  const barData: ChartData<"bar", number[], string> = {
    labels: LABELS,
    datasets: [
      {
        label: "Favorite Fruits",
        data: values,
        backgroundColor: COLORS,
      },
    ],
  };

  // Pie chart data (Type-safe)
  const pieData: ChartData<"pie", number[], string> = {
    labels: LABELS,
    datasets: [
      {
        label: "Favorite Fruits",
        data: values,
        backgroundColor: COLORS,
      },
    ],
  };

  const barOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "top" }, title: { display: true, text: "Bar Chart" } },
  };

  const pieOptions: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "top" }, title: { display: true, text: "Pie Chart" } },
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl h-[400px]">
        <div className="bg-white p-4 rounded-xl shadow">
          <Bar data={barData} options={barOptions} />
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {LABELS.map((item, index) => (
          <div key={item} className="flex flex-col items-center">
            <label className="mb-1 font-medium">{item}</label>
            <input
              type="number"
              className="w-20 p-1 border-2 border-black rounded text-center"
              value={values[index]}
              onChange={(e) => handleChangeValue(index, Number(e.target.value || 0))}
            />
          </div>
        ))}
      </div>
    </div>
  );
}