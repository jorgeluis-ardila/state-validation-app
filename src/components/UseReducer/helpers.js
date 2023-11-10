export const actionTypes = {
  ERROR: 'ERROR',
  WRITE: 'WRITE',
  CHECK: 'CHECK',
  CONFIRMED: 'CONFIRMED',
  DELETED: 'DELETED',
  RESET: 'RESET',
};

const reducerOptions = (state, payload) => ({
  [actionTypes.ERROR]: { ...state, error: true, loading: false },
  [actionTypes.WRITE]: {
    ...state,
    value: payload?.inputValue,
    error: payload?.inputValue?.length === 0,
    loading: false,
  },
  [actionTypes.CHECK]: { ...state, error: false, loading: !state.loading },
  [actionTypes.CONFIRMED]: { ...state, error: false, loading: false, confirmed: true },
  [actionTypes.DELETED]: { ...state, deleted: true },
  [actionTypes.RESET]: { ...state, value: '', confirmed: false, deleted: false },
});

export const reducer = (state, action) => {
  if (reducerOptions(state)[action.type]) {
    return reducerOptions(state, action.payload)[action.type];
  }
  return state;
};
