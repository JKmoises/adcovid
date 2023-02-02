import React from 'react';
import { Card } from 'react-bootstrap';

type AppProps = {
  cardTitle: string;
  footerText: JSX.Element;
  children: React.ReactNode;
};

export const CardWithHeader = ({
  cardTitle,
  footerText,
  children,
}: AppProps) => {
  return (
    <Card className="shadow border-0 p-0">
      <Card.Header className="bg-third-color border-0">
        <Card.Title className="text-center fw-bold text-white m-0">
          {cardTitle}
        </Card.Title>
      </Card.Header>

      <Card.Body className="d-flex flex-column flex-xxl-row justify-content-around align-items-center pb-0">
        {children}
      </Card.Body>

      <Card.Footer className="bg-white border-0">
        <Card.Text className="text-center text-lg-start text-gray-dark-color">
          <small>
            {footerText}
          </small>
        </Card.Text>
      </Card.Footer>
    </Card>
  );
};
