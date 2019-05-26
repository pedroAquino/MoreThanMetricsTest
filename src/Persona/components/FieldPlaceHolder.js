// @flow
import React from 'react';
import injectSheet from 'react-jss';

type Props = {
  classes: any;
};

const styles = theme => ({
    root: {
        backgroundColor: theme.colors.lightGreen,	
        lineHeight: '18px',
        color: theme.colors.darkGray,
        display: 'flex',
        alignItems: 'center',
        height: 41,
        padding: 8,
        border: '3px dashed #646E6E',
        justifyContent: 'center',
        fontWeight: 'bold'
    }
});

export function FieldPlaceHolder({ classes }: Props) {
  return (
    <div className={classes.root}>
      <p>{'Drag your field here'}</p>
    </div>
  );
};

export default injectSheet(styles)(FieldPlaceHolder);