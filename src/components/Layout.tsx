/* eslint-disable jsx-a11y/anchor-is-valid */
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.webp";

const links = [
  {
    id: 1,
    path: "/",
    icon: "bi-virus2",
    tooltipText: "Covid mundialmente",
  },
  {
    id: 2,
    path: "/casos-continente",
    icon: "bi-globe-americas",
    tooltipText: "Covid por continente",
  },
  {
    id: 3,
    path: "/casos-pais",
    icon: "bi-flag-fill",
    tooltipText: "Covid por pais",
  },
  {
    id: 4,
    path: "/vacunas",
    icon: "bi-clipboard2-pulse-fill",
    tooltipText: "Vacunas realizadas",
  },
]; 

export const Layout = () => {
  return (
    <div className="d-md-flex min-vh-100">
      <header className="nav-responsive w-10 bg-first-color pe-3 pe-md-0">
        <div className="curve d-none d-xl-block position-absolute w-11 min-vh-100 bg-white left-7"></div>

        <div
          className="
          d-flex flex-row flex-md-column justify-content-between justify-content-md-start
          align-items-center align-items-xl-start min-vh-md-100 ps-xl-2 pe-xl-3 w-7 mx-auto mx-xl-0
        "
        >
          <img
            className="logo img-fluid py-md-4 pt-3"
            src={logo}
            alt="Logo"
            width={112}
            height={156}
          />

          <nav className="d-flex flex-md-column align-items-center gap-4 ps-xl-2">
            {links.map(({ id, path, icon, tooltipText }) => (
              <OverlayTrigger
                key={id}
                placement="right"
                overlay={
                  <Tooltip className="fw-bold">{tooltipText}</Tooltip>
                }
              >
                <NavLink
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  to={path}
                >
                  <i className={`bi ${icon} icon`}></i>
                </NavLink>
              </OverlayTrigger>
            ))}

            {/* <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/casos-continente"
            >
              <i className="bi bi-globe-americas icon"></i>
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/casos-pais"
            >
              <i className="bi bi-flag-fill icon"></i>
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/vacunas"
            >
              <i className="bi bi-clipboard2-pulse-fill icon"></i>
            </NavLink> */}
          </nav>
        </div>
      </header>

      <main className="d-flex flex-column align-items-center align-items-lg-stretch py-4 flex-grow-1 mb-6 mb-md-0">
        <Outlet />
      </main>
    </div>
  );
};
