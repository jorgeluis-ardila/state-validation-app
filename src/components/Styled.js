import styled, { css, createGlobalStyle } from 'styled-components';
import { lighten, darken } from '../utils/cssFunctions';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  height: 100vh;
  background-color: ${({ theme }) => theme.background.dark};
  section:nth-child(odd) {
    border-right: 2px solid ${({ theme }) => theme.background.darkSupply};
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  padding: 25px;
`;

const Heading2 = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize(40)};
  text-align: center;
  color: ${({ theme }) => theme.color.light};
`;

const ParagraphError = css`
  color: ${({ theme }) => theme.color.error};
  font-weight: 700;
`;
const ParagraphLoading = css`
  color: ${({ theme }) => darken(theme.color.light, 20)};
  font-size: ${({ theme }) => theme.fontSize(22)};
  font-weight: 700;
  font-style: italic;
`;

const ParagraphVariants = {
  default: css`
    color: ${({ theme }) => theme.color.highlight};
  `,
  error: ParagraphError,
  loading: ParagraphLoading,
};

const Paragraph = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize(16)};
  text-align: center;
  ${({ variant }) => (variant ? ParagraphVariants[variant] : ParagraphVariants.default)};
  @media screen and (min-width: 801px) {
    width: 60%;
    margin-inline: auto;
  }
`;

const Box = styled.div`
  display: flex;
  gap: 15;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 801px) {
    width: 60%;
  }
`;

const Input = styled.input.attrs(() => ({
  type: 'text',
  maxLength: '6',
}))`
  height: 30px;
  border-radius: 15px;
  padding: 8px;
  border: none;
  background-color: ${({ theme }) => theme.background.darkSupply};
  color: ${({ theme }) => theme.color.light};
  font-size: ${({ theme }) => theme.fontSize(20)};
  letter-spacing: ${({ theme }) => theme.fontSize(3)};
  text-align: center;
  text-transform: uppercase;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.background.pink};
  }
  &::placeholder {
    letter-spacing: 0;
    color: ${({ theme }) => darken(theme.color.light, 50)};
  }
`;

const Button = styled.button`
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.background.red};
  color: ${({ theme }) => darken(theme.color.dark, 30)};
  font-size: ${({ theme }) => theme.fontSize(20)};
  text-transform: uppercase;
  font-weight: bold;
  transition: background 0.3s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => lighten(theme.background.red, 10)};
  }
`;

export { GlobalStyle, Wrapper, Section, Heading2, Paragraph, Box, InputContainer, Input, Button };
