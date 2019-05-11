// @flow

import React from 'react';
import logo from './logo.svg';
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

function App() {
  return (
    <div className="App">
        <h1>TITLE</h1>
        <FontAwesomeIcon icon="stroopwafel" />
    </div>
  );
}

export default injectSheet(styles)(App);
