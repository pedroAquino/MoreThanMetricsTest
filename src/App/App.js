// @flow

import React from 'react';
import injectSheet, { ThemeProvider } from "react-jss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  '@global': {
    body: {
      fontFamily: "'Source Sans Pro', sans-serif"
    }
  }
};

const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <h1>TITLE</h1>
          <FontAwesomeIcon icon="save" />
      </div>
    </ThemeProvider>
  );
}

export default injectSheet(styles)(App);
