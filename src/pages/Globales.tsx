import { Row, Col, Card } from 'react-bootstrap';
import { CardFallecidos } from "../components/CardFallecidos";
import { useFetch } from "../hooks/useFetch";

import { CardInfectados } from "../components/CardInfectados";
import { CovidDate, FetchData, CovidCountry, CovidGlobal } from '../interfaces/interfaces';
import { CardPlaceholder } from "../components/CardPlaceholder";
import { CardWithHeader } from '../components/CardWithHeader';
import { yesterdayDate, dateMonthAgo } from "../helpers/formattedDates";

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
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { chartData, chartOptions } from '../data/charts_data';

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

//* Estilos de progressBar 
const progressBarStyles = buildStyles({
  pathTransitionDuration: 0.5,
  pathColor: "var(--second-color)",
  textColor: "var(--second-color)",
  trailColor: "var(--gray-light-color)",
});

const labels = ["Casos", "Muertes","Sanados"];

//* Fecha del día de ayer y hace un mes
const YESTERDAY_DATE: string = yesterdayDate();
const MONTH_AGO_DATE: string = dateMonthAgo();

//* Total de paises y territorios en el mundo
const TOTAL_COUNTRIES = 244;

export const Globales = () => {
  let globals: FetchData<CovidGlobal> = useFetch(import.meta.env.VITE_GLOBALS_COVID);
  const covidYesterday: FetchData<CovidDate> = useFetch(import.meta.env.VITE_YESTERDAY_COVID);
  const covidMonthAgo: FetchData<CovidDate> = useFetch(import.meta.env.VITE_MONTH_AGO_COVID);
  const covidChile: FetchData<CovidCountry> = useFetch(import.meta.env.VITE_CHILE_COVID, 'chile');
  
  const { data } = globals;
  const { cases, affectedCountries } = data ?? {};

  //* Obteniendo datos del día de ayer
  const CASES_YESTERDAY: number = covidYesterday?.data?.cases[YESTERDAY_DATE];
  const DEATHS_YESTERDAY: number = covidYesterday?.data?.deaths[YESTERDAY_DATE];
  const RECOVERED_YESTERDAY: number = covidYesterday?.data?.recovered[YESTERDAY_DATE];

  //* Obteniendo datos de hace un mes
  const CASES_MONTH_AGO: number = covidMonthAgo?.data?.cases[MONTH_AGO_DATE];
  const DEATHS_MONTH_AGO: number = covidMonthAgo?.data?.deaths[MONTH_AGO_DATE];
  const RECOVERED_MONTH_AGO: number =
    covidMonthAgo?.data?.recovered[MONTH_AGO_DATE];

  //* Data del día de ayer
  const dataYesterday: number[] = [
    CASES_YESTERDAY,
    DEATHS_YESTERDAY,
    RECOVERED_YESTERDAY,
  ];

  //* Data de hace un mes
  const dataMonthAgo: number[] = [
    CASES_MONTH_AGO,
    DEATHS_MONTH_AGO,
    RECOVERED_MONTH_AGO,
  ];

  //* Incremento de casos a comporacion del día de ayer y hace un mes
  const increaseCasesYesterday: string =
    (((cases - CASES_YESTERDAY) * 100) / cases || 0).toFixed(1);
  const increaseCasesMonthAgo: string =
    (((cases - CASES_MONTH_AGO) * 100) / cases || 0).toFixed(1);

  //* % de paises afectados
  const percentageCountriesAffected: string =
    ((affectedCountries * 100) / TOTAL_COUNTRIES || 0).toFixed(1);

  //* % de datos sobre chile 
  const percentageCasesChile: string = (
    (covidChile?.data?.cases * 100) / cases || 0
  ).toFixed(1);
  

  return (
    <>
      <Row className="justify-content-center align-items-center gap-5 gap-xl-2 mw-100">
        <Col lg={5} xl={4} className="p-lg-0">
          {data ? (
            <CardWithHeader
              cardTitle="Casos covid-19 el día de ayer"
              footerText={
                <>
                  A comparación de ayer crecieron en un{" "}
                  <span className="text-second-color fw-bolder">
                    {increaseCasesYesterday}%
                  </span>
                </>
              }
            >
              <Card.Text className="d-flex flex-column align-items-center m-0">
                <span className="display-5 text-first-color">
                  +{increaseCasesYesterday}%
                </span>
              </Card.Text>

              <Card.Text className="text-gray-dark-color fw-bold">
                <small>(Aumento a comparación del día de ayer)</small>
              </Card.Text>

              <Line
                data={chartData(labels, dataYesterday)}
                options={chartOptions("Casos el día de ayer")}
              />
            </CardWithHeader>
          ) : (
            <CardPlaceholder />
          )}
        </Col>

        <Col lg={5} xl={4} className="p-lg-0">
          {data ? (
            <CardWithHeader
              cardTitle="Casos covid-19 hace 1 mes"
              footerText={
                <>
                  A comparación de hace 1 mes crecieron en un{" "}
                  <span className="text-second-color fw-bolder">
                    {increaseCasesMonthAgo}%
                  </span>
                </>
              }
            >
              <Card.Text className="d-flex flex-column align-items-center m-0">
                <span className="display-5 text-first-color">
                  +{increaseCasesMonthAgo}%
                </span>
              </Card.Text>

              <Card.Text className="text-gray-dark-color fw-bold">
                <small>(Aumento a comparación de hace 1 mes)</small>
              </Card.Text>

              <Line
                data={chartData(labels, dataMonthAgo)}
                options={chartOptions("Casos hace 1 mes")}
              />
            </CardWithHeader>
          ) : (
            <CardPlaceholder />
          )}
        </Col>

        <Col sm={8} lg={6} xl={3} className="p-lg-0">
          <CardFallecidos />
        </Col>
      </Row>

      <Row className="justify-content-center align-items-center gap-3 gap-xl-2 w-100 mt-4 mt-xl-2">
        <Col sm={9} md={7} lg={5} xl={4} className="p-lg-0">
          <CardInfectados />
        </Col>

        <Col sm={9} md={5} lg={5} xl={3} className="p-lg-0">
          <CardWithHeader
            cardTitle="% paises y territorios afectados"
            footerText={
              <>
                De{" "}
                <span className="text-second-color fw-bolder">
                  {TOTAL_COUNTRIES}
                </span>{" "}
                países y territorios el{" "}
                <span className="text-second-color fw-bolder">
                  {percentageCountriesAffected}%
                </span>{" "}
                fué afectado por el covid-19
              </>
            }
          >
            <CircularProgressbar
              value={Number(percentageCountriesAffected)}
              text={`${percentageCountriesAffected}%`}
              strokeWidth={6}
              styles={progressBarStyles}
            />
          </CardWithHeader>
        </Col>

        <Col sm={9} md={5} lg={5} xl={3} className="p-lg-0">
          <CardWithHeader
            cardTitle="Infectados en chile"
            footerText={
              <>
                <span className="text-second-color fw-bolder">
                  {covidChile.data?.cases.toLocaleString()}
                </span>{" "}
                casos en chile son el{" "}
                <span className="text-second-color fw-bolder">
                  {percentageCasesChile}%
                </span>{" "}
                de infectados en el mundo
              </>
            }
          >
            <CircularProgressbar
              value={Number(percentageCountriesAffected)}
              text={`${percentageCasesChile}%`}
              strokeWidth={6}
              styles={progressBarStyles}
            />
          </CardWithHeader>
        </Col>
      </Row>
    </>
  );
};
