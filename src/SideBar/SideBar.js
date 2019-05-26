// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import SideBarHeader from './components/SideBarHeader';
import Disclaymer from '../shared/components/Disclaymer';
import PersonaElement from './components/PersonaElement';
import MessageInfo from '../shared/components/MessageInfo';
import Draggable from 'react-draggable';
import DraggingContainer from '../shared/containers/DraggingContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  classes: any;
};

const styles = theme => ({
    sideBar: {
        width: 390,
        bordeRadius: '2px 0 0 0',
        backgroundColor: theme.colors.lightGray,
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
    },
    messageInfo: {
       padding: '0px 14px 0px 24px',
       marginTop: 365
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
        <DraggingContainer>
          { (draggingState, onStart, onStop) => {
            return <Draggable 
                handle="#short-text"
                onStart={onStart}
                position={{ x: 0, y: 0 }}
                onStop={onStop}
              >
                <div id="short-text">
                  <PersonaElement kind="short-text" />
                </div>
            </Draggable>
          }}
        </DraggingContainer>
        <PersonaElement kind="long-text" />
      </div>
      <div className={classes.elements}>
          <PersonaElement kind="image" />
          <PersonaElement kind="image-gallery" />
      </div>
      <div className={classes.elements}>
          <PersonaElement kind="number" />
      </div>
      <div className={classes.messageInfo}>
        <MessageInfo title="Missing something ?">
          Contact us to let us know which element types you would like to use in your personas.
        </MessageInfo>
      </div>
    </div>
  );
};

export default injectSheet(styles)(SideBar);