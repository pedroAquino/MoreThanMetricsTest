// @flow
import * as React from 'react';
import injectSheet from "react-jss";

type Props = {
  children: any;
};

const styles = theme => ({
});

function PersonaColumn(props: Props) {
const { children } = props;
  return (
    <div style={{border: '1px solid #fff'}}>
        {children}
    </div>
  );
};

export default injectSheet(styles)(PersonaColumn);