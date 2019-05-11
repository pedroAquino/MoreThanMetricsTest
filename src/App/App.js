// @flow
import React from 'react';
import { ThemeProvider } from "react-jss";
import Viewport from '../shared/components/Viewport';

const theme = {
  colors: {
    darkGray: '#646E6E'
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Viewport />
    </ThemeProvider>
  );
}

export default App;
