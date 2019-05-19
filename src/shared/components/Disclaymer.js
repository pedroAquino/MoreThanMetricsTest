// @flow
import * as React from 'react';
import injectSheet from "react-jss";

type Props = {
  children: string;
  classes: any;
};

const styles = theme => ({
    disclaymer: {
	    backgroundColor: theme.colors.lightGreen,	
        lineHeight: '18px',
        color: theme.colors.darkGray,
        fontSize: 14,
        padding: '12px 24px 15px 24px',
        fontStyle: 'italic'
    }
});

function Disclaymer(props: Props) {
  const { children, classes } = props;
  return (
    <div className={classes.disclaymer}>
        {children}
    </div>
  );
};

export default injectSheet(styles)(Disclaymer);