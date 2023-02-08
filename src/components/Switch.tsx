import { useState, useContext } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "../styles/switch.module.css";
import ThemeContext from "../context/ThemeContext";

export const Switch = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip className="fw-bold">
          Habilitar modo {theme === "light" ? "oscuro" : "claro"}
        </Tooltip>
      }
    >
      <label className={`${styles.switch} align-self-center mt-5`}>
        <input
          onChange={handleTheme}
          type="checkbox"
          name="theme"
          value={theme === "light" ? "dark" : "light"}
        />
        <div className={styles.slider}></div>

        <div className={styles["slider-card"]}>
          <div
            className={`${styles["slider-card-face"]} ${styles["slider-card-front"]}`}
          ></div>

          <div
            className={`${styles["slider-card-face"]} ${styles["slider-card-back"]}`}
          ></div>
        </div>
      </label>
    </OverlayTrigger>
  );
};
