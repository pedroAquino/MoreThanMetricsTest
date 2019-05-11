// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import Header from './Header';

type Props = {
  classes: any,
  children: React.Node;
};

const globalStyles = theme => ({
  '@global': {
    body: {
      fontFamily: "'Source Sans Pro', sans-serif",
      background: theme.colors.darkGray
    },
    '#header': {
      position: 'absolute',
      top: 0,
      left: 0
    },
    'p': {
      fontSize: theme.fontSizes.medium
    }
  },
  viewport: {
    padding: '0px 0px 117px 117px',
    marginTop: theme.headerHeight + 44
  }
});

function Viewport(props: Props) {
  const {
    classes,
    children
  } = props;
  return (
    <main>
      <Header />
      <div className={classes.viewport}>
        {children}
      </div>
    </main>
  );
};

export default injectSheet(globalStyles)(Viewport);