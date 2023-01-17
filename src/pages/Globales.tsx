import { CardCovid } from "../components/CardCovid";
import { Card, Row,Col } from "react-bootstrap";
import { CardIcon } from '../components/CardIcon';

export const Globales = () => {
  return (
    <main className="w-100 pe-md-5 pb-4 ms-10">
      <h1 className="text-center my-4 text-color">
        CASOS GLOBALES DE COVID-19
      </h1>

      <Row className="gap-4 gap-md-3 justify-content-center align-items-center">
        <Col lg className="p-0 w-50">
          <CardCovid
            cardTitle="Casos covid-19 el día de ayer"
            bodyText="(A comparación de ayer)"
            footerText="A comparación de ayer crecieron en un"
          >
            <Card.Text className="fs-5 text-center">
              casos el día de ayer
            </Card.Text>
          </CardCovid>
        </Col>

        <Col lg className="p-0 w-50">
          <CardCovid
            cardTitle="Casos covid-19 hace 2 días"
            bodyText="(A comparación de hace 2 días)"
            footerText="A comparación de hace 2 días crecieron en un"
          >
            <Card.Text className="fs-5 text-center">
              casos hace 2 días
            </Card.Text>
          </CardCovid>
        </Col>

        <Col lg className="p-0 w-50">
          <CardIcon />
        </Col>
      </Row>
    </main>
  );
};
