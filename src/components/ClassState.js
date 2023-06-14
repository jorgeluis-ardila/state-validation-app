import React from "react";
import {
  Section,
  Heading2,
  Paragraph,
  InputContainer,
  Input,
  Button
} from "./Styled";

class ClassState extends React.Component {
  render() {
    return (
      <Section>
        <Heading2>Eliminar {this.props.name}</Heading2>
        <Paragraph>Por favor, escribe el código de seguridad para comprobar que quieres eliminar.</Paragraph>
        
        <InputContainer>
          <Input placeholder="Código de Seguridad" />
          <Button>
            Comprobar
          </Button>
        </InputContainer>
      </Section>
    )
  }
}

export { ClassState }