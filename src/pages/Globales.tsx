import { Row, Col, Card, Stack, ProgressBar } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import { CardPlaceholder } from "../components/CardPlaceholder";
import { CardIcon } from "../components/CardIcon";
import { CardWithHeader } from '../components/CardWithHeader';
import {  NormalCard } from "../components/NormalCard";

import { yesterdayDate, dateMonthAgo } from "../helpers/formattedDates";
import { lineChartData, lineChartOptions, barChartData, barChartOptions } from '../data/charts_data';
import { getGlobalsCovid, getYesterdayCovid, getMonthAgoCovid, getChileCovid } from '../data/covid_data';

import { Bar, Line } from "react-chartjs-2";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

import covidIcon from "../assets/covid-virus.webp";
import { TOTAL_COUNTRIES, useGlobalCovid } from '../hooks/useGlobalCovid';
 

//* Estilos de progressBar 
const progressBarStyles = buildStyles({
  pathTransitionDuration: 0.5,
  pathColor: "var(--second-color)",
  textColor: "var(--second-color)",
  trailColor: "var(--gray-light-color)",
});


export async function loader() {
  const globals = getGlobalsCovid();
  const covidYesterday = getYesterdayCovid();
  const covidMonthAgo = getMonthAgoCovid();
  const covidChile = getChileCovid();

  const dataCovid = await Promise.all([
    globals,
    covidYesterday,
    covidMonthAgo,
    covidChile,
  ]);
  
  return dataCovid;
}

export const Globales = () => {
  const {
    dataYesterday,
    dataMonthAgo,
    increaseCasesYesterday,
    increaseCasesMonthAgo,
    percentageCountriesAffected,
    percentageCasesChile,
    activePercentage,
    criticalPercentage,
    recoveredPercentage,
    percentageDeaths,
    globals,
    covidChile,
  } = useGlobalCovid();

  const { cases,deaths,todayCases, todayDeaths, todayRecovered } = globals;


  return (
    <>
      <Row className="justify-content-center align-items-center gap-5 gap-xl-2 mw-100">
        <Col lg={5} xl={4} className="p-lg-0">
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
                data={lineChartData(dataYesterday)}
                options={lineChartOptions("Casos el día de ayer")}
              />
            </CardWithHeader>
        </Col>

        <Col lg={5} xl={4} className="p-lg-0">
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
              data={lineChartData(dataMonthAgo)}
              options={lineChartOptions("Casos hace 1 mes")}
            />
          </CardWithHeader>
        
        </Col>

        <Col sm={8} lg={6} xl={3} className="p-lg-0">
          <CardIcon
            data={deaths}
            percentage={percentageDeaths}
            icon={covidIcon}
          />
        </Col>
      </Row>

      <Row className="justify-content-center align-items-center gap-3 gap-xl-2 w-100 mt-4 mt-xl-2">
        <Col sm={9} md={7} lg={5} xl={4} className="p-lg-0">
          <NormalCard data={cases}>
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

                <Card.Text className="fw-bold text-first-color">
                  {activePercentage}%
                </Card.Text>
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

                <Card.Text className="fw-bold text-first-color">
                  {criticalPercentage}%
                </Card.Text>
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

                <Card.Text className="fw-bold text-first-color">
                  {recoveredPercentage}%
                </Card.Text>
              </Stack>
            </Stack>

            <Bar
              data={barChartData([todayCases, todayDeaths, todayRecovered])}
              options={barChartOptions()}
            />
          </NormalCard>
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
                  {covidChile.cases.toLocaleString()}
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
