// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  
};

const styles = theme => ({
    sideBarHeader: {
	    height: 36,
        borderRadius: '2px 0 0 0',
        backgroundColor: theme.colors.midleGray,
        padding: '11px 11px 12px 24px',
        color: theme.colors.darkGray,
    },
    headerText: {
        fontSize: theme.fontSizes.small,
        fontWeight: 600,
        letterSpacing: 0.8,
        float: 'left'
    },
    headerIcon: {
        float: 'right',
        marginTop: 9
    }
});

function SideBarHeader(props: Props) {
  const { classes } = props;
  return (
    <div className={classes.sideBarHeader}>
        <p className={classes.headerText}>
            ADD ELEMENT
        </p>
        <div className={classes.headerIcon}>
            <FontAwesomeIcon icon="times" />
        </div>
    </div>
  );
};

export default injectSheet(styles)(SideBarHeader);