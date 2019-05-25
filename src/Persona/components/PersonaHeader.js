// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PersonaField from './PersonaField';
import type { PersonaState } from '../services/personaDucks';

type Props = {
    classes: any;
    onUpdatePersona: (persona: PersonaState) => void;
    persona: PersonaState;
};

const styles = theme => ({
    personaHeader: {
	    height: 88,			
      backgroundColor: theme.colors.midleGray ,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0px 16px 0px 16px'
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
    },
    nameField: {
      width: 416
    },
    shortNameField: {
      width: 128
    }
});

function PersonaHeader(props: Props) {
  const { classes, persona: { name, initials } } = props;
  return (
    <div className={classes.personaHeader}>
      <div className={classes.avatar}>
        <FontAwesomeIcon icon="user" />
      </div>
      <div className={classes.nameField}>
        <PersonaField 
          label="PERSONA NAME"
          initialValue={name}
          name="name"
          editable
        />
      </div>
      <div className={classes.shortNameField}>
        <PersonaField
          label="SHORT NAME"
          name="initials"
          initialValue={initials}
          editable
        />
      </div>
    </div>
  );
};

export default injectSheet(styles)(PersonaHeader);