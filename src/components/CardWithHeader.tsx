import React from 'react';
import { Card } from 'react-bootstrap';

type AppProps = {
  cardTitle: string;
  footerText: JSX.Element;
  icon?: string;
  children: React.ReactNode;
};

export const CardWithHeader = ({
  cardTitle,
  footerText,
  icon,
  children,
}: AppProps) => {
  return (
    <Card className="shadow border-0 p-0">
      <Card.Header className="position-relative bg-third-color border-0">
        {icon && (
          <img
            className="position-absolute start-0 top-0 img-fluid icon-covid border border-light shadow-lg"
            src={icon}
            alt="Icono card"
            width={64}
            height={43}
          />
        )}
        <Card.Title
          className={`${icon ? "text-end" : "text-center"} fw-bold text-white m-0`}
        >
          {cardTitle}
        </Card.Title>
      </Card.Header>

      <Card.Body className="d-flex flex-column flex-xxl-row justify-content-around align-items-center pb-0">
        {children}
      </Card.Body>

      <Card.Footer className="bg-white border-0">
        <Card.Text className="text-center text-lg-start text-gray-dark-color">
          <small>{footerText}</small>
        </Card.Text>
      </Card.Footer>
    </Card>
  );
};
