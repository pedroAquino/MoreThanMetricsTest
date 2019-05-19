// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  children: string;
  title: string;
  classes: any;
};

const styles = theme => ({
    messageInfo: {
	      backgroundColor: theme.colors.lightGreen,	
        lineHeight: '18px',
        color: theme.colors.darkGray,
        fontSize: 14,
        fontStyle: 'italic',
        display: 'flex'
    },
    container: {
        padding: '8px 14px 8px 16px',
    },
    sideBar: {
	    borderRadius: '2px 0 0 2px',
      backgroundColor: 'rgba(58,183,247,0.25)',
      width:40,
      fontSize: 20,
      lineHeight: '21px',
      color: '#3AB7F7',
      padding: '24px 11px 25px 11px'
    },
    title: {
      fontWeight: 'bold'
    }
});

export function MessageInfo(props: Props) {
  const { classes, children, title } = props;

  return (
    <div className={classes.messageInfo}>
        <div className={classes.sideBar}>
           <FontAwesomeIcon icon="info-circle" />
        </div>
        <div className={classes.container}>
          <p className={classes.title}>{title}</p>
          <p>{children}</p>
        </div>
    </div>
  );
};

export default injectSheet(styles)(MessageInfo);