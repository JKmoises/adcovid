import { CardCovid } from "../components/CardCovid";
import { Row,Col } from "react-bootstrap";
import { CardIcon } from '../components/CardIcon';


export const Globales = () => {
  return (
    <main className="d-flex flex-column align-items-center container-fluid ps-lg-0">
      <h1 className="text-center my-3 text-color">
        CASOS GLOBALES DE COVID-19
      </h1>

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
          <CardIcon />
        </Col>
      </Row>
    </main>
  );
};
