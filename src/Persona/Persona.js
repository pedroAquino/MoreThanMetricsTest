// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import PersonaHeader from './components/PersonaHeader';
import PersonaField from './components/PersonaField';
import Picture from '../shared/assets/capivara.jpg';

type Props = {
  classes: any;
};

const styles = theme => ({
    persona: {
	    //height: '100vh',
        width: 664,	
        borderRadius: '0 0 2px 2px',	
        backgroundColor: theme.colors.lightGray
    },
    personaContent: {
        padding: 16,
        display: 'flex'
    },
    firstColumn: {
        flexBasis: 199,
        flexGrow: 1
    },
    secondColumn: {
        flexBasis: 199,
        flexGrow: 2,
        paddingLeft: 16
    }
});

function Persona(props: Props) {
  const { classes } = props;
  return (
     <div className={classes.persona}>
        <PersonaHeader />
        <div className={classes.personaContent}>
            <div className={classes.firstColumn}>
                <PersonaField 
                    height={176} 
                    kind="image" 
                    label="IMAGE" 
                    src={Picture}
                />
            </div>
            <div className={classes.secondColumn}>
                <PersonaField
                    label="OCCUPATION"
                    value="Researcher" 
                />
            </div>
        </div>
    </div>
  );
};

export default injectSheet(styles)(Persona);