import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  RadialLinearScale,
  PolarAreaController,
  LineController,
  BubbleController,
  ScatterController,
  type ChartOptions,
  type ChartData,
} from "chart.js";
import { useState } from "react";
import { Bar, Pie, Line, Doughnut, Radar, PolarArea, Bubble, Scatter } from "react-chartjs-2";

// Register all Chart.js components we need
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  RadialLinearScale,
  PolarAreaController,
  LineController,
  BubbleController,
  ScatterController
);

const LABELS = ["Banana", "Apple", "Mango", "Grapes", "Kiwi"];
const COLORS = ["#ef4444", "#3b82f6", "#eab308", "#22c55e", "#a855f7"];
const INITIAL_VALUES = [3, 5, 2, 4, 1];

export default function App() {
  const [values, setValues] = useState<number[]>(INITIAL_VALUES);

  const handleChangeValue = (index: number, value: number) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  // Derived chart data
  const barData: ChartData<"bar", number[], string> = {
    labels: LABELS,
    datasets: [{ label: "Favorite Fruits", data: values, backgroundColor: COLORS }],
  };

  const pieData: ChartData<"pie", number[], string> = {
    labels: LABELS,
    datasets: [{ label: "Favorite Fruits", data: values, backgroundColor: COLORS }],
  };

  const doughnutData: ChartData<"doughnut", number[], string> = {
    labels: LABELS,
    datasets: [{ label: "Favorite Fruits", data: values, backgroundColor: COLORS }],
  };

  const lineData: ChartData<"line", number[], string> = {
    labels: LABELS,
    datasets: [{ label: "Favorite Fruits", data: values, borderColor: "#3b82f6", backgroundColor: "#93c5fd", fill: true }],
  };

  const radarData: ChartData<"radar", number[], string> = {
    labels: LABELS,
    datasets: [
      {
        label: "Favorite Fruits",
        data: values,
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "#3b82f6",
        borderWidth: 1,
      },
    ],
  };

  const polarAreaData: ChartData<"polarArea", number[], string> = {
    labels: LABELS,
    datasets: [{ label: "Favorite Fruits", data: values, backgroundColor: COLORS }],
  };

  const scatterData: ChartData<"scatter", { x: number; y: number }[], string> = {
    labels: LABELS,
    datasets: [
      {
        label: "Favorite Fruits Scatter",
        data: values.map((v, i) => ({ x: i + 1, y: v })),
        backgroundColor: "#3b82f6",
      },
    ],
  };

  const bubbleData: ChartData<"bubble", { x: number; y: number; r: number }[], string> = {
    labels: LABELS,
    datasets: [
      {
        label: "Favorite Fruits Bubble",
        data: values.map((v, i) => ({ x: i + 1, y: v, r: v * 3 })),
        backgroundColor: "#ef4444",
      },
    ],
  };

  // Common options
  const barOptions: ChartOptions<"bar"> = { responsive: true, plugins: { legend: { position: "top" } } };
  const pieOptions: ChartOptions<"pie"> = { responsive: true, plugins: { legend: { position: "top" } } };
  const doughnutOptions: ChartOptions<"doughnut"> = { responsive: true, plugins: { legend: { position: "top" } } };
  const lineOptions: ChartOptions<"line"> = { responsive: true, plugins: { legend: { position: "top" } } };
  const radarOptions: ChartOptions<"radar"> = { responsive: true, plugins: { legend: { position: "top" } } };
  const polarAreaOptions: ChartOptions<"polarArea"> = { responsive: true, plugins: { legend: { position: "top" } } };
  const scatterOptions: ChartOptions<"scatter"> = { responsive: true, plugins: { legend: { position: "top" } } };
  const bubbleOptions: ChartOptions<"bubble"> = { responsive: true, plugins: { legend: { position: "top" } } };
  
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-6 bg-gray-100 min-h-screen">
      {/* Inputs */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {LABELS.map((item, index) => (
          <div key={item} className="flex flex-col items-center">
            <label className="mb-1 font-medium">{item}</label>
            <input
              type="number"
              className="w-20 p-1 border-2 border-black rounded text-center"
              value={values[index] || undefined}
              onChange={(e) => handleChangeValue(index, Number(e.target.value || 0))}
            />
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        <div className="h-[300px] bg-white p-4 rounded-xl shadow">
          <Bar data={barData} options={barOptions} />
        </div>
        <div className="h-[300px] bg-white p-4 rounded-xl shadow">
          <Pie data={pieData} options={pieOptions} />
        </div>
        <div className="h-[300px] bg-white p-4 rounded-xl shadow">
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
        <div className="h-[300px] bg-white p-4 rounded-xl shadow">
          <Line data={lineData} options={lineOptions} />
        </div>
        <div className="h-[300px] bg-white p-4 rounded-xl shadow">
          <Radar data={radarData} options={radarOptions} />
        </div>
        <div className="h-[300px] bg-white p-4 rounded-xl shadow">
          <PolarArea data={polarAreaData} options={polarAreaOptions} />
        </div>
        <div className="h-[300px] bg-white p-4 rounded-xl shadow">
          <Scatter data={scatterData} options={scatterOptions} />
        </div>
        <div className="h-[300px] bg-white p-4 rounded-xl shadow">
          <Bubble data={bubbleData} options={bubbleOptions} />
        </div>
      </div>
    </div>
  );
}