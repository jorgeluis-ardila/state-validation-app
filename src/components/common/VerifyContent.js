import { Paragraph, Input, Button } from '../Styled';

const VerifyContent = ({ state, onChange, onCheck }) => {
  return (
    <>
      <Input value={state.value} placeholder="Código de Seguridad" onChange={onChange} />
      {state.error && <Paragraph variant="error">El código es incorrecto</Paragraph>}
      <Button onClick={onCheck}>Comprobar</Button>
    </>
  );
};

export { VerifyContent };
