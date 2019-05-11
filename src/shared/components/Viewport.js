// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import globalStyles from './globalStyles';

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
    <div className={classes.viewport}>
      {children}
    </div>
  );
};

export default injectSheet(globalStyles)(Viewport);