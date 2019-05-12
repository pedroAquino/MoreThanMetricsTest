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
    }
  },
  viewport: {
    padding: '0px 0px 117px 117px',
    marginTop: theme.headerHeight + 44,
    display: 'flex',
    justifyContent: 'space-between'
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
        <SideBar />
      </div>
    </main>
  );
};

export default injectSheet(globalStyles)(Viewport);