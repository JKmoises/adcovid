import { Card } from "react-bootstrap";
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';



type AppProps = {
  children: React.ReactNode
  data: number;
}


export const NormalCard = ({ children,data }: AppProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Card className={`shadow-lg ${theme}`}>
      <Card.Header className="text-center border-0 bg-transparent">
        <h3 className={`text-uppercase fw-light text-gray-dark-color ${theme}`}>
          Total Infectados
        </h3>

        <Card.Text className={`h1 text-color fw-bolder ${theme}`}>
          {data.toLocaleString()}
        </Card.Text>
      </Card.Header>

      <Card.Body className="pt-0">{children}</Card.Body>
    </Card>
  );
};
