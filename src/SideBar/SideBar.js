// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import SideBarHeader from './components/SideBarHeader';
import Disclaymer from '../shared/components/Disclaymer';
import PersonaElement from './components/PersonaElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  classes: any;
};

const styles = theme => ({
    sideBar: {
        width: 390,
        bordeRadius: '2px 0 0 0',
        backgroundColor: theme.colors.lightGray,	
        //boxShadow: 'inset 0 1px 20px 0 rgba(0,0,0,0.3), 0 0 30px 0 rgba(0,0,0,0.3)',
        paddingBottom: 64
    },
    padded: {
        padding: '22px 68px 0px 24px'
    },
    title: {
        fontSize: 24,
        fontWeight: 300,
        color: '#3C4646'
    },
    disclaymer: {
        marginTop: 22
    },
    elements: {
      padding: '22px 14px 0px 24px',
      display: 'flex',
      justifyContent: 'space-between'
    }
});

export function SideBar(props: Props) {
  const { classes } = props;
  return (
    <div className={classes.sideBar}>
      <SideBarHeader />
      <div className={classes.padded}>
        <h2 className={classes.title}>Add Element to Persona</h2>
      </div>
      <div className={classes.disclaymer}>
        <Disclaymer>
            <p>
                Click or drag & drop one of the element types below to add it to the persona.
            </p>
            <p style={{marginTop:5}}>
                {'Click on the '}
                &nbsp;
                <FontAwesomeIcon icon="cog" />
                &nbsp;
                {"icon of each element to edit it's settings."}
            </p>
            <p>
               You can reorder the elements by dragging then.
            </p>
        </Disclaymer>
      </div>
      <div className={classes.elements}>
        <PersonaElement kind="short-text" />
        <PersonaElement kind="long-text" />
      </div>
      <div className={classes.elements}>
          <PersonaElement kind="image" />
          <PersonaElement kind="image-gallery" />
      </div>
      <div className={classes.elements}>
          <PersonaElement kind="number" />
      </div>
    </div>
  );
};

export default injectSheet(styles)(SideBar);