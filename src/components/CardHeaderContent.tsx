import { Card } from "react-bootstrap"
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

type AppProps = {
  children: React.ReactNode;
  footerText?: JSX.Element;
};

export const CardHeaderContent = ({ children, footerText }: AppProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Card.Body
        className={`${theme} d-flex flex-column flex-xxl-row justify-content-around align-items-center py-0 pt-3`}
      >
        {children}
      </Card.Body>
      <Card.Footer className={`border-0 ${theme}`}>
        <Card.Text className="text-center text-lg-start text-gray-dark-color">
          <small className={theme}>{footerText}</small>
        </Card.Text>
      </Card.Footer>
    </>
  );
}
