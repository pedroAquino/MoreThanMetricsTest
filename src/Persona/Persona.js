// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import PersonaHeader from './components/PersonaHeader';

type Props = {
  classes: any;
};

const styles = theme => ({
    persona: {
	    height: '100vh',
        width: 664,	
        borderRadius: '0 0 2px 2px',	
        backgroundColor: theme.colors.lightGray
    }
});

function Persona(props: Props) {
  const { classes } = props;
  return (
     <div className={classes.persona}>
        <PersonaHeader />
    </div>
  );
};

export default injectSheet(styles)(Persona);