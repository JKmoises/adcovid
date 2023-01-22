import { CardCovid } from "../components/CardCovid";
import { Row, Col } from "react-bootstrap";
import { CardFallecidos } from "../components/CardFallecidos";
import { CardInfectados } from "../components/CardInfectados";
import { useFetch } from "../hooks/useFetch";
import { yesterdayDate, dateMonthAgo } from "../helpers/formattedDates";
import { MONTH_AGO, YESTERDAY } from "../helpers/endpoints";
import { CovidDate, FetchData } from "../interfaces/interfaces";
import { useContext } from "react";
import { CovidContext } from "../context/CovidContext";
import { CardPlaceholder } from "../components/CardPlaceholder";

const YESTERDAY_DATE: string = yesterdayDate();
const MONTH_AGO_DATE: string = dateMonthAgo();

export const Globales = () => {
  const covidYesterday: FetchData<CovidDate> = useFetch(YESTERDAY);
  const covidMonthAgo: FetchData<CovidDate> = useFetch(MONTH_AGO);
  const { globals } = useContext(CovidContext);
  const { data } = globals;
  const { cases } = data ?? {};

  const CASES_YESTERDAY: number = covidYesterday?.data?.cases[YESTERDAY_DATE];
  const DEATHS_YESTERDAY: number = covidYesterday?.data?.deaths[YESTERDAY_DATE];
  const RECOVERED_YESTERDAY: number =
    covidYesterday?.data?.recovered[YESTERDAY_DATE];

  const CASES_MONTH_AGO: number = covidMonthAgo?.data?.cases[MONTH_AGO_DATE];
  const DEATHS_MONTH_AGO: number = covidMonthAgo?.data?.deaths[MONTH_AGO_DATE];
  const RECOVERED_MONTH_AGO: number =
    covidMonthAgo?.data?.recovered[MONTH_AGO_DATE];

  const dataYesterday: number[] = [
    CASES_YESTERDAY,
    DEATHS_YESTERDAY,
    RECOVERED_YESTERDAY,
  ];
  const dataMonthAgo: number[] = [
    CASES_MONTH_AGO,
    DEATHS_MONTH_AGO,
    RECOVERED_MONTH_AGO,
  ];

  const increaseCasesYesterday: number =
    ((cases - CASES_YESTERDAY) * 100) / cases;
  const increaseCasesMonthAgo: number =
    ((cases - CASES_MONTH_AGO) * 100) / cases;

  return (
    <>
      <Row className="justify-content-center align-items-center gap-3 gap-xl-2 mw-100">
        <Col lg={4} className="p-lg-0">
          {data ? (
            <CardCovid
              cardTitle="Casos covid-19 el día de ayer"
              bodyText="(A comparación del día de ayer)"
              footerText="A comparación de ayer crecieron en un"
              chartData={dataYesterday}
              increaseCases={increaseCasesYesterday}
            />
          ) : (
            <CardPlaceholder />
          )}
        </Col>

        <Col lg={4} className="p-lg-0">
          {data ? (
            <CardCovid
              cardTitle="Casos covid-19 hace 1 mes"
              bodyText="(A comparación de hace 1 mes)"
              footerText="A comparación de hace 1 mes crecieron en un"
              chartData={dataMonthAgo}
              increaseCases={increaseCasesMonthAgo}
            />
          ) : (
            <CardPlaceholder />
          )}
        </Col>

        <Col lg={3} className="p-lg-0 flex-50">
          <CardFallecidos />
        </Col>
      </Row>

      <Row className="justify-content-center align-items-center gap-3 gap-xl-2 w-100 mt-3 mt-lg-2">
        <Col lg={4} className="p-lg-0">
          <CardInfectados />
        </Col>

        <Col lg className="p-lg-0"></Col>

        <Col lg className="p-lg-0"></Col>
      </Row>
    </>
  );
};
