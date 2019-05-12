// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import HeaderTitle from './components/HeaderTitle';
import HeaderMenu from './components/HeaderMenu';

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
    headerMenu: {
      float: 'right',
      width: '42%'
    }
});

function Header(props: Props) {
  const { classes } = props;
  return (
    <header id="header" className={classes.mainHeader}>
      <div className={classes.headerContent}>
        <HeaderTitle />
        {/* <div style={{clear: 'both'}} /> */}
        <div className={classes.headerMenu}>
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};

export default injectSheet(styles)(Header);