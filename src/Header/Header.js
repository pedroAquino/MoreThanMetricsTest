// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import HeaderTitle from './components/HeaderTitle';

type Props = {
  classes: any;
};

const styles = theme => ({
    mainHeader: {
        height: theme.headerHeight,
        width: '100%',	
        background: theme.colors.lightGradient
    },
    headerContent: {
      padding: '20px 16px 20px 25px'
    },
});

function Header(props: Props) {
  const { classes } = props;
  return (
    <header id="header" className={classes.mainHeader}>
      <div className={classes.headerContent}>
        <HeaderTitle />
      </div>
    </header>
  );
};

export default injectSheet(styles)(Header);