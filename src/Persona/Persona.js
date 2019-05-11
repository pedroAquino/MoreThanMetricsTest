// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import PersonaHeader from './components/PersonaHeader';
import PersonaColumn from './components/PersonaColumn';

type Props = {
  classes: any;
};

const styles = theme => ({
    persona: {
	    height: '100vh',
        width: 664,	
        borderRadius: '0 0 2px 2px',	
        backgroundColor: theme.colors.lightGray
    },
    personaContent: {
        padding: 16
    }
});

function Persona(props: Props) {
  const { classes } = props;
  return (
     <div className={classes.persona}>
        <PersonaHeader />
        <div className={classes.personaContent}>
            <PersonaColumn />
            <PersonaColumn />
        </div>
    </div>
  );
};

export default injectSheet(styles)(Persona);