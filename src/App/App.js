// @flow
import React from 'react';
import { ThemeProvider } from "react-jss";
import Viewport from '../shared/components/Viewport';
import Persona from '../Persona/Persona';

const theme = {
  colors: {
    darkGray: '#646E6E'
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Viewport>
        <Persona />
      </Viewport>
    </ThemeProvider>
  );
}

export default App;
