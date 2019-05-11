// @flow
import * as React from 'react';
import injectSheet from "react-jss";

type Props = {
  children: string;
  classes: any;
};

const styles = theme => ({
    messageInfo: {
	    backgroundColor: theme.colors.lightGreen,	
        lineHeight: '18px',
        color: theme.colors.darkGray,
        fontSize: 14,
        fontStyle: 'italic'
    },
    container: {
        padding: '8px 14px 8px 16px',
    }
});

export function MessageInfo(props: Props) {
  const { classes } = props;

  return (
    <div className={classes.messageInfo}>
      
    </div>
  );
};

export default injectSheet(styles)(MessageInfo);