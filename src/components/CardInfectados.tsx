import { Card, Stack, ProgressBar, Placeholder } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { useContext } from "react";
import { CovidContext } from "../context/CovidContext";
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
  Legend
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

export const CardInfectados = () => {
  const { globals } = useContext(CovidContext);
  const { data } = globals;
  const {
    active,
    cases,
    critical,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
  } = data ?? {};

  const dataChart = {
    labels,
    datasets: [
      {
        data: [todayCases, todayDeaths, todayRecovered],
        backgroundColor: ["#145A32", "#0E6655", "#239B56"],
      },
    ],
  };

  const activePercentage: number = (active * 100) / cases;
  const criticalPercentage: number = (critical * 100) / cases;
  const recoveredPercentage: number = (recovered * 100) / cases;

  return (
    <Card className="shadow-lg">
      <Card.Header className="text-center border-0 bg-transparent">
        <h3 className="text-uppercase fw-light text-gray-dark-color">
          Total Infectados
        </h3>
        {data ? (
          <Card.Text className="h1 text-color fw-bolder">
            {cases?.toLocaleString()}
          </Card.Text>
        ) : (
          <Placeholder xs={8} size="lg" />
        )}
      </Card.Header>

      <Card.Body className="pt-0">
        <Stack className="gap-3 pb-3">
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
              now={activePercentage}
            />

            {data ? (
              <Card.Text className="fw-bold text-first-color">
                {activePercentage.toFixed(2)}%
              </Card.Text>
            ) : (
              <Placeholder xs={1} />
            )}
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
              now={criticalPercentage}
            />

            {data ? (
              <Card.Text className="fw-bold text-first-color">
                {criticalPercentage.toFixed(2)}%
              </Card.Text>
            ) : (
              <Placeholder xs={1} />
            )}
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
              now={recoveredPercentage}
            />

            {data ? (
              <Card.Text className="fw-bold text-first-color">
                {recoveredPercentage.toFixed(1)}%
              </Card.Text>
            ) : (
              <Placeholder xs={1} />
            )}
          </Stack>
        </Stack>

        {data ? (
          <Bar data={dataChart} options={options} />
        ) : (
          <>
            <Placeholder xs={12} size="lg" />
            <Placeholder xs={12} size="lg" />
            <Placeholder xs={12} size="lg" />
            <Placeholder xs={12} size="lg" />
          </>
        )}
      </Card.Body>
    </Card>
  );
};
