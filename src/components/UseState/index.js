import React, { useState, useEffect } from 'react';
import SECURITY_CODES from '../../SECURITY_CODES';
import { MainStructure } from '../common';

const INITIAL_STATE = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

const UseState = ({ name }) => {
  const [state, setState] = useState(INITIAL_STATE);

  const onValidCode = () => {
    setState(prevstate => ({
      ...prevstate,
      error: false,
      loading: false,
      confirmed: true,
    }));
  };

  const onInvalideCode = () => {
    setState(prevstate => ({
      ...prevstate,
      error: true,
      loading: false,
    }));
  };

  const handleChangeValue = e => {
    const inputValue = e.target.value;
    setState(prevstate => {
      return { ...prevstate, value: inputValue, error: inputValue.length === 0 };
    });
  };

  const handleCheck = () => {
    setState(prevstate => ({
      ...prevstate,
      error: false,
      loading: !prevstate.loading,
    }));
  };

  const handleReset = () => {
    setState(prevstate => ({ ...prevstate, value: '', confirmed: false, deleted: false }));
  };

  const handleConfirm = () => {
    setState(prevstate => ({ ...prevstate, deleted: true }));
  };

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

export { UseState };
