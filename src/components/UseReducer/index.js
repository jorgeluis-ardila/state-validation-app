import React, { useEffect, useReducer } from 'react';
import SECURITY_CODES from '../../SECURITY_CODES';
import { reducer, actionTypes } from './helpers';
import { MainStructure } from '../common';

const INITIAL_STATE = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

const UseReducer = ({ name }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const onValidCode = () => dispatch({ type: actionTypes.CONFIRMED });

  const onInvalideCode = () => dispatch({ type: actionTypes.ERROR });

  const handleChangeValue = e => {
    dispatch({ type: actionTypes.WRITE, payload: { inputValue: e.target.value } });
  };

  const handleCheck = () => dispatch({ type: actionTypes.CHECK });

  const handleReset = () => dispatch({ type: actionTypes.RESET });

  const handleConfirm = () => dispatch({ type: actionTypes.DELETED });

  useEffect(() => {
    if (!!state.loading) {
      setTimeout(() => {
        const matchCode = SECURITY_CODES.some(code => state.value.toUpperCase() === code);
        if (matchCode) {
          onValidCode();
        } else {
          onInvalideCode();
        }
      }, 3000);
    }
  }, [state.loading, state.value]);

  return (
    <MainStructure
      name={name}
      state={state}
      handlers={{
        handleChangeValue,
        handleCheck,
        handleReset,
        handleConfirm,
      }}
    />
  );
};

export { UseReducer };
