// @flow
import React from 'react';
import { ThemeProvider } from "react-jss";
import Viewport from '../shared/components/Viewport';
import Persona from '../Persona/Persona';
import '../shared/assets/reset.css';

const theme = {
  colors: {
    darkGray: '#646E6E',
    lightGray: '#F0F0F0',
    midleGray: '#DCDCDC',
    white: '#fff',
    lightGreen: '#F0F8FC',
    lightGradient: 'linear-gradient(180deg, #FFFFFF 0%, #F0F0F0 100%)'
  },
  fontSizes: {
    large: 20,
    medium: 16,
    small: 12
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
