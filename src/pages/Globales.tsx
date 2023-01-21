import { CardCovid } from "../components/CardCovid";
import { Row,Col } from "react-bootstrap";
import { CardFallecidos } from "../components/CardFallecidos";
import { CardInfectados } from "../components/CardInfectados";


export const Globales = () => {
  
  return (
    <>
      <Row className="justify-content-center align-items-center gap-3 gap-xl-2 w-100">
        <Col lg className="p-0">
          <CardCovid
            cardTitle="Casos covid-19 el día de ayer"
            bodyText="(A comparación del día de ayer)"
            footerText="A comparación de ayer crecieron en un"
          />
        </Col>

        <Col lg className="p-0">
          <CardCovid
            cardTitle="Casos covid-19 hace 2 días"
            bodyText="(A comparación de hace 2 días)"
            footerText="A comparación de hace 2 días crecieron en un"
          />
        </Col>

        <Col lg className="p-0 flex-50">
          <CardFallecidos />
        </Col>
      </Row>

      <Row className="justify-content-center align-items-center gap-3 gap-xl-2 w-100 mt-3 mt-lg-2">
        <Col lg={5} className="p-0">
          <CardInfectados/>
        </Col>

        <Col lg className="p-0"></Col>

        <Col lg className="p-0 flex-50"></Col>
      </Row>
    </>
  );
};
