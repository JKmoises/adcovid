import React from 'react'
import { Card, Placeholder } from 'react-bootstrap';

export const CardPlaceholder = () => {
  return (
    <Card className="shadow border-0 p-0">
      <Card.Header className="bg-third-color border-0">
        <Placeholder className="d-block mx-auto" bg="success" xs={10} />
      </Card.Header>

      <Card.Body>
        <Placeholder
          className="d-flex flex-column align-items-center gap-2"
          as={Card.Text}
          animation="glow"
        >
          <Placeholder xs={6} size="lg" />
          <Placeholder xs={8} size="sm" />
        </Placeholder>

        <Placeholder
          className="d-flex flex-column align-items-center gap-2"
          as={Card.Text}
          animation="glow"
        >
          <Placeholder xs={10} size="lg" />
          <Placeholder xs={10} size="lg" />
          <Placeholder xs={10} size="lg" />
          <Placeholder xs={6} size="sm" />
        </Placeholder>
      </Card.Body>

      <Card.Footer className="bg-white border-0">
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={10} size="xs" />
        </Placeholder>
      </Card.Footer>
    </Card>
  );
}
