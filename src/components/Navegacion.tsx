/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export const Navegacion = () => {
  return (
    <header className="position-sticky top-0 vh-md-100 w-10 bg-first-color">
      <div className="curve d-none d-lg-block position-absolute w-11 min-vh-100 bg-white left-7"></div>

      <div
        className="
          d-flex flex-row flex-md-column justify-content-between justify-content-md-start
          align-items-center align-items-lg-start min-vh-md-100 ps-2 pe-3 w-7
        "
      >
        <img className="logo img-fluid py-md-4 pt-3" src={logo} alt="Logo" />

        <nav className="d-flex flex-md-column align-items-center gap-4 ps-2">
          <NavLink className="icon" to="/" title="Covid mundialmente">
            <i className="bi bi-virus2"></i>
          </NavLink>

          <NavLink
            className="icon"
            to="/casos-continente"
            title="Covid por continente"
          >
            <i className="bi bi-globe-americas"></i>
          </NavLink>

          <NavLink className="icon" to="/casos-pais" title="Covid por pais">
            <i className="bi bi-flag-fill"></i>
          </NavLink>

          <NavLink className="icon" to="/vacunas" title="Vacunas realizadas">
            <i className="bi bi-clipboard2-pulse-fill"></i>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
