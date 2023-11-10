import { Button } from '../Styled';

const ConfirmButtons = ({ onReject, onConfirm }) => (
  <>
    <Button onClick={onReject}>Rechazar</Button>
    <Button onClick={onConfirm}>Confirmar</Button>
  </>
);

export { ConfirmButtons };
