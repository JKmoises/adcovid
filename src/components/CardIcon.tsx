import { ProgressBar } from "react-bootstrap";
import ThemeContext from "../context/ThemeContext";
import { useContext } from 'react';

type AppProps = {
  data: number;
  percentage: number;
  icon: string;
  title: string
};

export const CardIcon = ({ data, percentage, icon, title }: AppProps) => {
  const { theme } = useContext(ThemeContext)

  return (
    <section
      className={`position-relative d-flex flex-column align-items-center justify-content-center gap-2
    bg-gradient-green text-white p-3 br-card-icon black-${theme}`}
    >
      <img
        className="position-absolute img-fluid icon-covid"
        src={icon}
        alt="Covid icono"
        width={60}
        height={61}
      />
      <h4 className="fw-bold text-center">{title}</h4>

      <span className="display-5 fw-bold">{data.toLocaleString()}</span>

      <ProgressBar className="w-100" animated now={85} />
      <p className="text-center text-md-start fw-bold">
        {percentage.toFixed(1)}% del total de casos han fallecido
      </p>
    </section>
  );
};
