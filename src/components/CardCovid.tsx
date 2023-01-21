/* eslint-disable import/first */
import { Card } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Line } from "react-chartjs-2";


type AppProps = {
  cardTitle: string;
  bodyText: string;
  footerText: string;
};

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

const options = {
  fill: true,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Casos el día de ayer",
      position: "bottom" as const,
    },
  },
};

const labels = ["Casos", "Muertes", "Sanados"];

const data = {
  labels,
  datasets: [
    {
      data: labels.map((label) => label.length),
      borderColor: "#0E6655",
      backgroundColor: "#73C6B670",
      tension: 0.5
    },
  ],
};

export const CardCovid = ({ cardTitle, bodyText, footerText }: AppProps) => {
  
  return (
    <Card className="shadow border-0 p-0">
      <Card.Header className="bg-third-color border-0">
        <Card.Title className="text-center fw-bold text-white m-0">
          {cardTitle}
        </Card.Title>
      </Card.Header>

      <Card.Body className="d-flex flex-column flex-xxl-row justify-content-around align-items-center pb-0">
        <Card.Text className="d-flex flex-column align-items-center text-gray-dark-color fw-bold m-0">
          <span className="display-5 text-first-color">+11%</span>
          <small>{bodyText}</small>
        </Card.Text>

        <section>
          <Card.Text className="fs-5 text-center">
            <Line data={data} options={options} />
          </Card.Text>
        </section>
      </Card.Body>

      <Card.Footer className="bg-white border-0">
        <Card.Text className="text-center text-lg-start text-gray-dark-color">
          <small>
            {footerText} <span className="text-second-color">11%</span>
          </small>
        </Card.Text>
      </Card.Footer>
    </Card>
  );
};
