import { CardDay } from "../components/CardDay";
import { Row, Col } from "react-bootstrap";
import { CardFallecidos } from "../components/CardFallecidos";
import { CardInfectados } from "../components/CardInfectados";
import { useFetch } from "../hooks/useFetch";
import { yesterdayDate, dateMonthAgo } from "../helpers/formattedDates";
import { CHILE_COVID, MONTH_AGO_COVID, YESTERDAY_COVID, GLOBALS_COVID } from '../data/endpoints';
import { CovidDate, FetchData, CovidCountry, CovidGlobal } from '../interfaces/interfaces';
import { CardPlaceholder } from "../components/CardPlaceholder";
import { CardProgressCircular } from "../components/CardProgressCircular";

//* Fecha del día e ayer y hace un mes
const YESTERDAY_DATE: string = yesterdayDate();
const MONTH_AGO_DATE: string = dateMonthAgo();

//* Total de paises y territorios en el mundo
const TOTAL_COUNTRIES = 244;

export const Globales = () => {
  let globals: FetchData<CovidGlobal> = useFetch(GLOBALS_COVID);
  const covidYesterday: FetchData<CovidDate> = useFetch(YESTERDAY_COVID);
  const covidMonthAgo: FetchData<CovidDate> = useFetch(MONTH_AGO_COVID);
  const covidChile: FetchData<CovidCountry> = useFetch(CHILE_COVID, 'chile');
  
  const { data } = globals;
  const { cases, affectedCountries } = data ?? {};

  //* Obteniendo datos del día de ayer
  const CASES_YESTERDAY: number = covidYesterday?.data?.cases[YESTERDAY_DATE];
  const DEATHS_YESTERDAY: number = covidYesterday?.data?.deaths[YESTERDAY_DATE];
  const RECOVERED_YESTERDAY: number =
    covidYesterday?.data?.recovered[YESTERDAY_DATE];

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
  const increaseCasesYesterday: number =
    ((cases - CASES_YESTERDAY) * 100) / cases;
  const increaseCasesMonthAgo: number =
    ((cases - CASES_MONTH_AGO) * 100) / cases;

  //* % de paises afectados
  const percentageCountriesAffected: number = (affectedCountries * 100) / TOTAL_COUNTRIES || 0;

  //* % de datos sobre chile 
  const percentageCasesChile: number  = (covidChile?.data?.cases * 100) / cases || 0;

  return (
    <>
      <Row className="justify-content-center align-items-center gap-5 gap-xl-2 mw-100">
        <Col lg={5} xl={4} className="p-lg-0">
          {data ? (
            <CardDay
              cardTitle="Casos covid-19 el día de ayer"
              bodyText="(Aumento a comparación del día de ayer)"
              footerText="A comparación de ayer crecieron en un"
              chartData={dataYesterday}
              increaseCases={increaseCasesYesterday}
            />
          ) : (
            <CardPlaceholder />
          )}
        </Col>

        <Col lg={5} xl={4} className="p-lg-0">
          {data ? (
            <CardDay
              cardTitle="Casos covid-19 hace 1 mes"
              bodyText="(Aumento a comparación de hace 1 mes)"
              footerText="A comparación de hace 1 mes crecieron en un"
              chartData={dataMonthAgo}
              increaseCases={increaseCasesMonthAgo}
            />
          ) : (
            <CardPlaceholder />
          )}
        </Col>

        <Col sm={8} lg={6} xl={3} className="p-lg-0">
          <CardFallecidos />
        </Col>
      </Row>

      <Row className="justify-content-center align-items-center align-items-xl-start gap-3 gap-xl-2 w-100 mt-4 mt-xl-2">
        <Col sm={9} md={7} lg={5} xl={5} className="p-lg-0">
          <CardInfectados />
        </Col>

        <Col sm={9} md={5} lg={5} xl={3} className="p-lg-0">
          <CardProgressCircular
            cardTitle="% paises y territorios afectados"
            footerText={
              <small>
                De{" "}
                <span className="text-second-color fw-bolder">
                  {TOTAL_COUNTRIES}
                </span>{" "}
                países y territorios el{" "}
                <span className="text-second-color fw-bolder">
                  {percentageCountriesAffected.toFixed(1)}%
                </span>{" "}
                fué afectado por el covid-19
              </small>
            }
            percentage={percentageCountriesAffected}
          />
        </Col>

        <Col sm={9} md={5} lg={5} xl={3} className="p-lg-0">
          <CardProgressCircular
            cardTitle="Infectados en chile"
            footerText={
              <small>
                <span className="text-second-color fw-bolder">
                  {covidChile?.data?.cases.toLocaleString()}
                </span>{" "}
                casos en chile son el{" "}
                <span className="text-second-color fw-bolder">
                  {percentageCasesChile.toFixed(1)}%
                </span>{" "}
                de infectados en el mundo
              </small>
            }
            percentage={percentageCasesChile}
          />
        </Col>
      </Row>
    </>
  );
};
