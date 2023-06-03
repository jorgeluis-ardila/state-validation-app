import React from "react";
import {
  Section,
  Heading2,
  Paragraph,
  Input,
  Button
} from "./Styled";

function UseState({ name }) {
  const [error, setError] = React.useState(false);

  return (
    <Section>
      <Heading2>Eliminar {name}</Heading2>
      <Paragraph>Por favor, escribe el código de seguridad para comprobar que quieres eliminar.</Paragraph>

      {error && (
        <Paragraph>Error: el código es incorrecto</Paragraph>
      )}

      <Input type="text" placeholder="Código de Seguridads" />
      <Button
        onClick={() => setError(prevState => !prevState)}
      >
        Comprobar
      </Button>
    </Section>
  );
}

export { UseState }