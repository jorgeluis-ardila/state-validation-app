import React from 'react';
import SECURITY_CODES from '../../SECURITY_CODES';
import { Section, Heading2, Paragraph, InputContainer, Input, Button } from '../Styled';

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      error: false,
      loading: false,
    };
  }
  // state = {
  //   error: false
  // };

  componentDidMount() {}
  componentDidUpdate() {
    if (!!this.state.loading) {
      setTimeout(() => {
        for (let i = 0; i < SECURITY_CODES.length; i++) {
          const code = SECURITY_CODES[i];
          if (this.state.value.toUpperCase() !== code) this.setState({ error: true });
          break;
        }
        this.setState({ loading: false });
      }, 3000);
    }
  }
  componentWillUnmount() {}

  render() {
    const { name } = this.props;
    const { value, error, loading } = this.state;

    return (
      <Section>
        <Heading2>Eliminar {name}</Heading2>
        <Paragraph>Por favor, escribe el código de seguridad para comprobar que quieres eliminar.</Paragraph>
        {loading ? (
          <Paragraph variant="loading">Estamos verificando</Paragraph>
        ) : (
          <InputContainer>
            <Input
              value={value}
              placeholder="Código de Seguridad"
              onChange={e => {
                const value = e.target.value;
                this.setState({ value: value });
                value.length === 0 && this.setState({ error: false });
              }}
            />
            {error && <Paragraph variant="error">Error: el código es incorrecto</Paragraph>}
            <Button
              onClick={() => {
                this.setState(prevState => ({ error: false, loading: !prevState.loading }));
              }}
            >
              Comprobar
            </Button>
          </InputContainer>
        )}
      </Section>
    );
  }
}

export { ClassState };
