import { Section, Heading2, Paragraph, InputContainer } from '../Styled';
import { ConfirmButtons } from './ConfirmButtons';
import { RecoverButton } from './RecoverButton';
import { VerifyContent } from './VerifyContent';
// import { VerifyContent, ConfirmButtons, RecoverButton } from '../';

const MainStructure = ({ name, state, handlers }) => (
  <Section>
    <Heading2>Eliminar {name}</Heading2>
    <Paragraph>
      {state.confirmed && !state.deleted
        ? '¿Estas seguro que deseas eliminar el estado?'
        : state.deleted
        ? 'Estado eliminado correctamente'
        : !state.loading && 'Por favor, escribe el código de seguridad para comprobar que quieres eliminar el estado.'}
    </Paragraph>

    {state.loading ? (
      <Paragraph variant="loading">Estamos verificando</Paragraph>
    ) : (
      <InputContainer>
        {!!state.deleted && !!state.confirmed && <RecoverButton onRecover={handlers.handleReset} />}
        {!!state.confirmed && !state.deleted && (
          <ConfirmButtons onReject={handlers.handleReset} onConfirm={handlers.handleConfirm} />
        )}
        {!state.confirmed && !state.deleted && (
          <VerifyContent state={state} onChange={handlers.handleChangeValue} onCheck={handlers.handleCheck} />
        )}
      </InputContainer>
    )}
  </Section>
);

export { MainStructure };
