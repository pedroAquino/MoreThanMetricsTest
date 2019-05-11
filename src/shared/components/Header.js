// @flow
import * as React from 'react';
import injectSheet from "react-jss";

type Props = {
  classes: any;
};

const styles = theme => ({
    mainHeader: {
        height: theme.headerHeight,
        width: '100%',	
        background: theme.colors.lightGradient
    }
});

function Header(props: Props) {
const { classes } = props;
  return (
    <header id="header" className={classes.mainHeader}>
    </header>
  );
};

export default injectSheet(styles)(Header);