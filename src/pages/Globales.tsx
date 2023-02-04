import { Row, Col, Card, Stack, ProgressBar, Tab } from 'react-bootstrap';

import { CardIcon } from "../components/CardIcon";
import { CardWithHeader } from '../components/CardWithHeader';
import {  NormalCard } from "../components/NormalCard";

import { lineChartData, lineChartOptions, barChartData, barChartOptions } from '../data/charts_data';
import { getGlobalsCovid, getYesterdayCovid, getMonthAgoCovid, getChileCovid } from '../data/covid_data';
import { TOTAL_COUNTRIES, useGlobalCovid } from '../hooks/useGlobalCovid';

import { Bar, Line } from "react-chartjs-2";
import { CircularProgressbar } from 'react-circular-progressbar';

import covidIcon from "../assets/covid-virus.webp";
import { CardHeaderContent } from '../components/CardHeaderContent';
 

//* Estilos de progressBar 
const progressBarStyles = {
  path: {
    stroke: "var(--second-color)",
    transition: "stroke-dashoffset 0.5s ease",
  },
  text: {
    fill: "var(--second-color)",
  },
  trail: {
    stroke: "var(--gray-light-color)",
  },
};


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
    activePercentage,
    criticalPercentage,
    recoveredPercentage,
    percentageDeaths,
    percentageCasesChile,
    percentageDeathsChile,
    percentageActiveChile,
    percentageRecoveredChile,
    globals,
    covidChile,
  } = useGlobalCovid();

  const { cases, deaths, todayCases, todayDeaths, todayRecovered } = globals;
  const { flag } = covidChile.countryInfo;


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
            <Card.Text className="d-flex flex-column align-items-center m-0 pt-2">
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
            <Card.Text className="d-flex flex-column align-items-center m-0 pt-2">
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
                <div className="fs-2 text-color">
                  <i className="bi bi-activity"></i>
                </div>

                <Card.Text className="w-6 m-0 fs-5 text-gray-dark-color">
                  Activos
                </Card.Text>

                <ProgressBar
                  className="progress-second-color w-75"
                  animated
                  now={Number(activePercentage)}
                />

                <Card.Text className="fw-bold text-first-color">
                  {activePercentage}%
                </Card.Text>
              </Stack>

              <Stack className="flex-row align-items-center justify-content-between gap-3">
                <div className="fs-2 text-color">
                  <i className="bi bi-exclamation-square"></i>
                </div>

                <Card.Text className="w-6 m-0 fs-5 text-gray-dark-color">
                  Críticos
                </Card.Text>

                <ProgressBar
                  className="progress-second-color w-75"
                  animated
                  now={Number(criticalPercentage)}
                />

                <Card.Text className="fw-bold text-first-color">
                  {criticalPercentage}%
                </Card.Text>
              </Stack>

              <Stack className="flex-row align-items-center justify-content-between gap-3">
                <div className="fs-2 text-color">
                  <i className="bi bi-bandaid"></i>
                </div>

                <Card.Text className="w-6 m-0 fs-5 text-gray-dark-color">
                  Sanados
                </Card.Text>

                <ProgressBar
                  className="progress-second-color w-75"
                  animated
                  now={Number(recoveredPercentage)}
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
            cardTitle="% paises afectados"
            footerText={
              <>
                De{" "}
                <span className="text-second-color fw-bolder">
                  {TOTAL_COUNTRIES}
                </span>{" "}
                países el{" "}
                <span className="text-second-color fw-bolder">
                  {percentageCountriesAffected}%
                </span>{" "}
                fue afectado por covid
              </>
            }
          >
            <CircularProgressbar
              className="pt-3"
              value={Number(percentageCountriesAffected)}
              text={`${percentageCountriesAffected}%`}
              strokeWidth={6}
              styles={progressBarStyles}
            />
          </CardWithHeader>
        </Col>

        <Col sm={9} md={5} lg={5} xl={4} className="p-lg-0">
          <CardWithHeader cardTitle="Infectados en chile" icon={flag} tabs>
            <Tab
              eventKey="casos"
              title="casos"
              tabClassName="text-gray-dark-color text-uppercase px-2"
            >
              <CardHeaderContent
                footerText={
                  <>
                    <span className="text-second-color fw-bolder">
                      {covidChile.cases.toLocaleString()}
                    </span>{" "}
                    casos en chile son el{" "}
                    <span className="text-second-color fw-bolder">
                      {percentageCasesChile}%
                    </span>{" "}
                    en el mundo
                  </>
                }
              >
                <CircularProgressbar
                  value={Number(percentageCasesChile)}
                  text={`${percentageCasesChile}%`}
                  strokeWidth={5}
                  styles={progressBarStyles}
                />
              </CardHeaderContent>
            </Tab>

            <Tab
              eventKey="fallecidos"
              title="fallecidos"
              tabClassName="text-gray-dark-color text-uppercase px-2"
            >
              <CardHeaderContent
                footerText={
                  <>
                    <span className="text-second-color fw-bolder">
                      {covidChile.deaths.toLocaleString()}
                    </span>{" "}
                    fallecidos en chile son el{" "}
                    <span className="text-second-color fw-bolder">
                      {percentageDeathsChile}%
                    </span>{" "}
                    en el mundo
                  </>
                }
              >
                <CircularProgressbar
                  value={Number(percentageDeathsChile)}
                  text={`${percentageDeathsChile}%`}
                  strokeWidth={5}
                  styles={progressBarStyles}
                />
              </CardHeaderContent>
            </Tab>

            <Tab
              eventKey="activos"
              title="activos"
              tabClassName="text-gray-dark-color text-uppercase px-2"
            >
              <CardHeaderContent
                footerText={
                  <>
                    <span className="text-second-color fw-bolder">
                      {covidChile.active.toLocaleString()}
                    </span>{" "}
                    casos activos en chile son el{" "}
                    <span className="text-second-color fw-bolder">
                      {percentageActiveChile}%
                    </span>{" "}
                    en el mundo
                  </>
                }
              >
                <CircularProgressbar
                  value={Number(percentageActiveChile)}
                  text={`${percentageActiveChile}%`}
                  strokeWidth={5}
                  styles={progressBarStyles}
                />
              </CardHeaderContent>
            </Tab>

            <Tab
              eventKey="recuperados"
              title="recuperados"
              tabClassName="text-gray-dark-color text-uppercase px-2"
            >
              <CardHeaderContent
                footerText={
                  <>
                    <span className="text-second-color fw-bolder">
                      {covidChile.recovered.toLocaleString()}
                    </span>{" "}
                    de recuperados en chile son el{" "}
                    <span className="text-second-color fw-bolder">
                      {percentageRecoveredChile}%
                    </span>{" "}
                    en el mundo
                  </>
                }
              >
                <CircularProgressbar
                  value={Number(percentageRecoveredChile)}
                  text={`${percentageRecoveredChile}%`}
                  strokeWidth={5}
                  styles={progressBarStyles}
                />
              </CardHeaderContent>
            </Tab>
          </CardWithHeader>
        </Col>
      </Row>
    </>
  );
};
