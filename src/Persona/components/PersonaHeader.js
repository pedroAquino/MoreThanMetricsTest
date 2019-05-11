// @flow
import * as React from 'react';
import injectSheet from "react-jss";

type Props = {
    classes: any;
};

const styles = theme => ({
    personaHeader: {
	    height: 88,	
        width: '100%',		
        backgroundColor: theme.colors.midleGray 
    }
});

function PersonaHeader(props: Props) {
  const { classes } = props;
  return (
    <div className={classes.personaHeader}>
    </div>
  );
};

export default injectSheet(styles)(PersonaHeader);