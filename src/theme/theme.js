import { lighten, darken } from '../utils/cssFunctions';

const theme = {
  background: {
    dark: '#1E1E24',
    darkSupply: '#444140',
    red: '#E54B4B',
    pink: '#FFA987',
  },
  color: {
    light: '#F7EBE8',
    dark: '#1E1E24',
    highlight: '#deb887',
    error: darken('#FFA987', 30),
  },
  button: {
    active: '#E54B4B',
    disabled: lighten('#444140', 20),
    hover: darken('#E54B4B', 30),
  },
  fontSize: value => `${value / 16}rem`,
};

export default theme;
