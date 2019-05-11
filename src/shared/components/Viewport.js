// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import globalStyles from './globalStyles';

type Props = {
  classes: any
};

function Viewport(props: Props) {
  const {
    classes
  } = props;
  return (
    <div className={classes.viewport}>
      <div style={{ border: '1px solid #fff' }} />
    </div>
  );
};

export default injectSheet(globalStyles)(Viewport);