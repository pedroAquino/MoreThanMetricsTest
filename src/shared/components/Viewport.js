// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import Header from './Header';
import SideBar from '../../SideBar/SideBar';

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
      position: 'fixed',
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
  },
  sideBar: {
    position: 'fixed',
    top: theme.headerHeight + 16,
    right: 0
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
      <div className={classes.sideBar}>
        <SideBar />
      </div>
    </main>
  );
};

export default injectSheet(globalStyles)(Viewport);