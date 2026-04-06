# React ChartJS Demo
Simple tutorial for visualizing data.

## To run this project:
1. Clone this repository `git clone https://github.com/khianvictorycalderon/react-chart-js-demo.git`
2. Run `npm install`
3. Run `npm run dev`

---

## Prerequisites
- NodeJS

---

## Dependencies & Configuration
The following is a list of installed dependencies and configuration settings used in this project.
You don’t need to install anything manually, as all dependencies are already managed through `package.json`.
This section is provided for reference only, to give you insight into how the project was set up.

## Dependencies
- `npm install tailwindcss @tailwindcss/vite chart.js react-chartjs-2`

## Configuration Dependencies
- Update `vite.config.ts`:
  ```ts
  import tailwindcss from '@tailwindcss/vite'

  export default defineConfig({
    plugins: [
      tailwindcss(),
    ],
  })
  ```