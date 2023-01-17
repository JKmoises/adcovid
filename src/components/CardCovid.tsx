import { Card } from "react-bootstrap";

export const CardCovid = () => {
  return (
    <Card className="shadow border-0 p-0 w-100 col">
      <Card.Header className="bg-third-color border-0">
        <Card.Title className="text-center fw-bold text-white m-0">
          Casos covid-19 el día de ayer
        </Card.Title>
      </Card.Header>

      <Card.Body className="d-flex justify-content-between pb-0">
        <Card.Text className="d-flex flex-column align-items-center text-gray-dark-color fw-bold">
          <span className="display-4 text-first-color">+11%</span>
          (A comparación de ayer)
        </Card.Text>

        <section>
          <Card.Text className="fs-5">casos el día de ayer</Card.Text>
        </section>
      </Card.Body>

      <Card.Footer className="bg-white border-0 text-gray-dark-color">
        <Card.Text>
          A comparación de ayer los casos aumentaron en un{" "}
          <span className="text-second-color">11%</span>
        </Card.Text>
      </Card.Footer>
    </Card>
  );
};
