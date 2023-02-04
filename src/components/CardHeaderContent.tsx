import { Card } from "react-bootstrap"

type AppProps = {
  children: React.ReactNode;
  footerText?: JSX.Element;
};

export const CardHeaderContent = ({children,footerText}: AppProps) => {
  return (
    <>
      <Card.Body className="d-flex flex-column flex-xxl-row justify-content-around align-items-center py-0">
        {children}
      </Card.Body>
      <Card.Footer className="bg-white border-0">
        <Card.Text className="text-center text-lg-start text-gray-dark-color">
          <small>{footerText}</small>
        </Card.Text>
      </Card.Footer>
    </>
  )
}
