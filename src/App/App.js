// @flow
import React from 'react';
import { ThemeProvider } from "react-jss";
import Viewport from '../shared/components/Viewport';
import Persona from '../Persona/Persona';

const theme = {
  colors: {
    darkGray: '#646E6E',
    lightGray: '#F0F0F0',
    midleGray: '#DCDCDC',
    lightGradient: 'linear-gradient(180deg, #FFFFFF 0%, #F0F0F0 100%)'
  },
  headerHeight: 64
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
