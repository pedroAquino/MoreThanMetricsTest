// @flow
import * as React from 'react';
import injectSheet from "react-jss";

type Props = {
  classes: any;
};

const styles = theme => ({
    sideBar: {
        width: 390,
        bordeRadius: '2px 0 0 0',
        backgroundColor: '#F0F0F0',	
        boxShadow: 'inset 0 1px 20px 0 rgba(0,0,0,0.3), 0 0 30px 0 rgba(0,0,0,0.3)'
    }
});

export function SideBar(props: Props) {
  const { classes } = props;
  return (
    <div style={{padding: 20}} className={classes.sideBar}>
      
    </div>
  );
};

export default injectSheet(styles)(SideBar);