// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    classes: any;
};

const styles = theme => ({
    personaHeader: {
	    height: 88,	
        width: '100%',		
        backgroundColor: theme.colors.midleGray 
    },
    avatar: {
      height: 56,	
      width: 56,
      borderRadius: 2,	
      backgroundColor: '#F05A50',	
      background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(240,240,240,0) 100%)',
      fontSize: 29,
      color: '#3C4646',
      '& svg': {
        margin: '10px 13px 10px 13px'
      }
    }
});

function PersonaHeader(props: Props) {
  const { classes } = props;
  return (
    <div className={classes.personaHeader}>
      <div className={classes.avatar}>
        <FontAwesomeIcon icon="user" />
      </div>
    </div>
  );
};

export default injectSheet(styles)(PersonaHeader);