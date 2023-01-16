/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../assets/logo.png";

export const Navegacion = () => {
  return (
    <header className="w-12_5 bg-first-color position-fixed position-lg-static bottom-0">
      <div className="curve d-none d-md-block position-absolute w-12_5 min-vh-100 bg-white left-7"></div>

      <div className="d-flex flex-row flex-md-column  align-items-md-center min-vh-lg-100 w-7">
        <img className="img-fluid py-4" src={logo} alt="Logo" />

        <nav className="d-md-flex flex-column gap-4">
          <a className="icon" href="#" title="Covid mundialmente">
            <i className="bi bi-virus2"></i>
          </a>
          <a className="icon" href="#" title="Covid por continente">
            <i className="bi bi-globe-americas"></i>
          </a>
          <a className="icon" href="#" title="Covid por pais">
            <i className="bi bi-flag-fill"></i>
          </a>
          <a className="icon" href="#" title="Vacunas realizadas">
            <i className="bi bi-clipboard2-pulse-fill"></i>
          </a>
        </nav>
      </div>
    </header>
  );
};
