import { ProgressBar } from 'react-bootstrap';
import covidIcon from "../assets/covid-virus.png";
import { useContext } from 'react';
import { CovidContext } from '../context/CovidContext';

export const CardFallecidos = () => {
  const { globals } = useContext(CovidContext);
  const { data } = globals;
  const { cases,deaths } = data ?? {};

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
      />
      <h4 className="fw-bold text-center">Fallecidos de covid-19</h4>
      <span className="display-5 fw-bold">{deaths?.toLocaleString()}</span>
      <ProgressBar className="w-100" animated now={85} />
      <p className="text-center text-md-start fw-bold">
        {percentageDeaths.toFixed(1)} % del total de casos han fallecido
      </p>
    </section>
  );
}
