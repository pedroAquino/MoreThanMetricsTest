// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import PersonaHeader from './components/PersonaHeader';
import Card from '../shared/components/Card';
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
    },
    text: {
        marginBlockEnd: '16px !important',
        marginBlockStart: '16px !important'
    }
});

function Persona(props: Props) {
  const { classes } = props;
  return (
     <div className={classes.persona}>
        <PersonaHeader />
        <div className={classes.personaContent}>
            <div className={classes.firstColumn}>
                <Card 
                    height={176} 
                    kind="image" 
                    label="IMAGE" 
                    src={Picture}
                />
            </div>
            <div className={classes.secondColumn}>
                <Card height={56} label="OCCUPATION">
                    <p className={classes.text}>Researcher</p>
                </Card>
            </div>
        </div>
    </div>
  );
};

export default injectSheet(styles)(Persona);