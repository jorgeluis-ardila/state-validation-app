import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Wrapper } from "./components/Styled.js";
import { UseState } from './components/UseState';
import { UseReducer } from './components/UseReducer';
// import { ClassState } from './components/ClassState';
import theme from "./theme/theme";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Wrapper>
        <UseState name="Use State" />
        <UseReducer name="Use Reducer" />
        {/* <ClassState name="Class State" /> */}
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
