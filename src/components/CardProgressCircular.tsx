import React from 'react'
import { Card } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type AppProps = {
  cardTitle: string;
  footerText: React.ReactNode;
  percentage: number;
};


const progressBarStyles = buildStyles({
  pathTransitionDuration: 0.5,
  pathColor: "var(--second-color)",
  textColor: "var(--second-color)",
  trailColor: "var(--gray-light-color)",
});


export const CardProgressCircular = ({
  cardTitle,
  footerText,
  percentage,
}: AppProps) => {

  return (
    <Card className="shadow border-0 p-0">
      <Card.Header className="bg-third-color border-0">
        <Card.Title className="text-center fw-bold text-white m-0">
          {cardTitle}
        </Card.Title>
      </Card.Header>

      <Card.Body>
        <CircularProgressbar
          value={percentage}
          text={`${percentage.toFixed(1)}%`}
          strokeWidth={6}
          styles={progressBarStyles}
        />
      </Card.Body>

      <Card.Footer className="bg-white border-0">
        <Card.Text className="text-center text-lg-start text-gray-dark-color">
          {footerText}
        </Card.Text>
      </Card.Footer>
    </Card>
  );
};
