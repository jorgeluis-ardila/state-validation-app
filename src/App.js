import React from "react";
import { UseState } from './UseState.js';
import { ClassState } from './ClassState.js';
import styled from "styled-components";
import './App.css';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

function App() {

  return (
    <Wrapper>
      <UseState name="Use State" />
      <ClassState name="Class State" />
    </Wrapper>
  );
}

export default App;
