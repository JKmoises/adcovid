import { Card, Stack, ProgressBar } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  barThickness: 20,
  borderRadius: 8,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = ["Casos hoy", "Muertes hoy", "Sanados hoy"];

const data = {
  labels,
  datasets: [
    {
      data: [76703, 7350, 75285],
      backgroundColor: ["#145A32", "#0E6655", "#239B56"],
    },
  ],
};
export const CardInfectados = () => {
  return (
    <Card className="shadow-lg">
      <Card.Header className="text-center border-0 bg-transparent">
        <h3 className="text-uppercase fw-light text-gray-dark-color">
          Total Infectados
        </h3>
        <Card.Text className="h1 text-color fw-bolder">666.574.231</Card.Text>
      </Card.Header>

      <Card.Body className="pt-0">
        <Stack className="gap-3">
          <Stack className="flex-row align-items-center gap-3">
            <div className="display-5 text-color">
              <i className="bi bi-activity"></i>
            </div>

            <Card.Text className="w-6 m-0 fs-5 text-gray-dark-color">
              Activos
            </Card.Text>
            <ProgressBar
              className="progress-second-color w-75"
              animated
              now={13}
            />
            <Card.Text className="fw-bold text-first-color">0.3%</Card.Text>
          </Stack>

          <Stack className="flex-row align-items-center justify-content-between gap-3">
            <div className="display-5 text-color">
              <i className="bi bi-exclamation-square"></i>
            </div>

            <Card.Text className="w-6 m-0 fs-5 text-gray-dark-color">
              Críticos
            </Card.Text>
            <ProgressBar
              className="progress-second-color w-75"
              animated
              now={6}
            />
            <Card.Text className="fw-bold text-first-color">0.06%</Card.Text>
          </Stack>

          <Stack className="flex-row align-items-center justify-content-between gap-3">
            <div className="display-5 text-color">
              <i className="bi bi-bandaid"></i>
            </div>

            <Card.Text className="w-6 m-0 fs-5 text-gray-dark-color">
              Sanados
            </Card.Text>
            <ProgressBar
              className="progress-second-color w-75"
              animated
              now={95.7}
            />
            <Card.Text className="fw-bold text-first-color">95.7%</Card.Text>
          </Stack>
        </Stack>

        <Bar data={data} options={options} />
      </Card.Body>
    </Card>
  );
}
