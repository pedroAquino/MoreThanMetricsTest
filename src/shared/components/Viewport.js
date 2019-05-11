// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import globalStyles from './globalStyles';
import Header from './Header';

type Props = {
  classes: any,
  children: React.Node;
};

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