import { ProgressBar } from "react-bootstrap";
import covidIcon from "../assets/covid-virus.webp";
import { FetchData, CovidGlobal } from "../interfaces/interfaces";
import { GLOBALS_COVID } from "../data/endpoints";
import { useFetch } from "../hooks/useFetch";

export const CardFallecidos = () => {
  const globals: FetchData<CovidGlobal> = useFetch(GLOBALS_COVID);
  const { data } = globals;
  const { cases, deaths } = data ?? {};

  const percentageDeaths = (deaths * 100) / cases;

  return (
    <section
      className="position-relative d-flex flex-column align-items-center justify-content-center gap-2
    bg-gradient-green text-white p-3 br-card-icon"
    >
      <img
        className="position-absolute img-fluid icon-covid"
        src={covidIcon}
        alt="Covid icono"
        width={1565}
        height={1577}
      />
      <h4 className="fw-bold text-center">Fallecidos de covid-19</h4>

      {data && (
        <span className="display-5 fw-bold">{deaths?.toLocaleString()}</span>
      )}
      <ProgressBar className="w-100" animated now={85} />
      <p className="text-center text-md-start fw-bold">
        {data && percentageDeaths.toFixed(1)}% del total de casos han fallecido
      </p>
    </section>
  );
};
