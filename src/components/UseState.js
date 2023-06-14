import React from "react";
import {
  Section,
  Heading2,
  Paragraph,
  InputContainer,
  Input,
  Button
} from "./Styled";

function UseState({ name }) {
  const [error, setError] = React.useState(false);

  return (
    <Section>
      <Heading2>Eliminar {name}</Heading2>
      <Paragraph>Por favor, escribe el código de seguridad para comprobar que quieres eliminar.</Paragraph>

      <InputContainer>
        <Input placeholder="Código de Seguridad" />
        {error && (
          <Paragraph $error>Error: el código es incorrecto</Paragraph>
        )}
        <Button
          onClick={() => setError(prevState => !prevState)}
        >
          Comprobar
        </Button>
      </InputContainer>
    </Section>
  );
}

export { UseState }