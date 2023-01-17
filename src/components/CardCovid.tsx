import { Card } from "react-bootstrap";

type AppProps = {
  children?: React.ReactNode;
  cardTitle: string;
  bodyText: string;
  footerText: string;
};

export const CardCovid = ({ children, cardTitle, bodyText, footerText }: AppProps) => {
  return (
    <Card className="shadow border-0 p-0">
      <Card.Header className="bg-third-color border-0">
        <Card.Title className="text-center fw-bold text-white m-0">
          {cardTitle}
        </Card.Title>
      </Card.Header>

      <Card.Body className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
        <Card.Text className="d-flex flex-column align-items-center text-gray-dark-color fw-bold m-0">
          <span className="display-5 text-first-color">+11%</span>
          <small>{bodyText}</small>
        </Card.Text>

        <section>{children}</section>
      </Card.Body>

      <Card.Footer className="bg-white border-0">
        <Card.Text className="text-center text-lg-start text-gray-dark-color">
          <small>
            {footerText} <span className="text-second-color">11%</span>
          </small>
        </Card.Text>
      </Card.Footer>
    </Card>
  );
};
