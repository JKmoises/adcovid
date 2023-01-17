import { ProgressBar } from 'react-bootstrap';
import covidIcon from "../assets/covid-virus.png";

export const CardIcon = () => {
  return (
    <section
      className="position-relative d-flex flex-column align-items-center justify-content-center gap-2
    bg-gradient-green text-white p-3 br-card-icon"
    >
      <img className="position-absolute img-fluid icon-covid" src={covidIcon} alt="Covid icono" />
      <h4 className="fw-bold">Fallecidos de covid-19</h4>
      <span className="display-5 fw-bold">6.699.947</span>
      <ProgressBar className="w-100" animated now={85} />
      <p className="fw-bold">86% del total de casos han fallecido</p>
    </section>
  );
}
