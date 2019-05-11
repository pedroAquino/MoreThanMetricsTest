// @flow

import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import injectSheet, { ThemeProvider } from "react-jss";

library.add(faStroopwafel);

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
          <FontAwesomeIcon icon="stroopwafel" />
      </div>
    </ThemeProvider>
  );
}

export default injectSheet(styles)(App);
