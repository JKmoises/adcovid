import React from 'react';
import { Card, Tabs } from 'react-bootstrap';
import { CardHeaderContent } from './CardHeaderContent';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

type AppProps = {
  cardTitle: string;
  footerText?: JSX.Element;
  icon?: string;
  tabs?: boolean
  children: React.ReactNode;
};

export const CardWithHeader = ({
  cardTitle,
  footerText,
  icon,
  tabs,
  children,
}: AppProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Card className="shadow border-0 p-0">
      <Card.Header className={`position-relative bg-third-color border-0 black-${theme}`}>
        {icon && (
          <img
            className="position-absolute start-0 top-0 img-fluid icon-covid border border-light shadow-lg"
            src={icon}
            alt="Icono card"
            width={64}
            height={43}
          />
        )}
        <Card.Title
          className={`${
            icon ? "text-end" : "text-center"
          } fw-bold text-white m-0`}
        >
          {cardTitle}
        </Card.Title>
      </Card.Header>

      {tabs ? (
        <Tabs
          defaultActiveKey="fallecidos"
          transition={true}
          className={theme}
          justify
        >
          {children}
        </Tabs>
      ) : (
        <>
          <CardHeaderContent footerText={footerText}>
            {children}
          </CardHeaderContent>
        </>
      )}
    </Card>
  );
};
