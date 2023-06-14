import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Wrapper } from "./components/Styled.js";
import { UseState } from './components/UseState.js';
import { ClassState } from './components/ClassState.js';
import theme from "./components/theme";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Wrapper>
        <UseState name="Use State" />
        <ClassState name="Class State" />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
