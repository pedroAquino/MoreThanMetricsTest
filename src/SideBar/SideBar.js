// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import SideBarHeader from './components/SideBarHeader';
import Disclaymer from '../shared/components/Disclaymer';

type Props = {
  classes: any;
};

const styles = theme => ({
    sideBar: {
        width: 390,
        bordeRadius: '2px 0 0 0',
        backgroundColor: theme.colors.lightGray,	
        boxShadow: 'inset 0 1px 20px 0 rgba(0,0,0,0.3), 0 0 30px 0 rgba(0,0,0,0.3)'
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
    }
});

export function SideBar(props: Props) {
  const { classes } = props;
  return (
    <div className={classes.sideBar}>
      <SideBarHeader />
      <div className={classes.padded}>
        <p className={classes.title}>Add Element to Persona</p>
      </div>
      <div className={classes.disclaymer}>
        <Disclaymer>
            <p>
                Click or drag & drop one of the element types below to add it to the persona.
            </p>
            <p style={{marginTop:5}}>
                Click on the cof icon of each element to edit it's settings.
                You can reorder the elements by dragging then   
            </p>
        </Disclaymer>
      </div>
    </div>
  );
};

export default injectSheet(styles)(SideBar);