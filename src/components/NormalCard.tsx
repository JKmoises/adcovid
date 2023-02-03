import { Card } from "react-bootstrap";



type AppProps = {
  children: React.ReactNode
  data: number;
}


export const NormalCard = ({ children,data }: AppProps) => {
  
  return (
    <Card className="shadow-lg">
      <Card.Header className="text-center border-0 bg-transparent">
        <h3 className="text-uppercase fw-light text-gray-dark-color">
          Total Infectados
        </h3>

        <Card.Text className="h1 text-color fw-bolder">
          {data.toLocaleString()}
        </Card.Text>
      </Card.Header>

      <Card.Body className="pt-0">
        {children}
      </Card.Body>
    </Card>
  );
};
