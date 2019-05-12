// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    titleContainer: {
      color: '#3C4646',
      '& h1': {
        marginLeft: 17,
        float: 'left',
	      color: '#3C4646',	
        fontSize: 20,	
        '& span': {
          fontWeight: 'bold'
        }
      },
      '& svg': {
        float: 'left',
      }
    },
    editIcon: {
      color: '#B1B6B6',	
      fontSize: 14,
      '& svg': {
        marginLeft: 8,
      }
    },
    userIcon: {
      opacity: 0.5,
      fontSize: 20
    }
});

function Header(props: Props) {
const { classes } = props;
  return (
    <header id="header" className={classes.mainHeader}>
      <div className={classes.headerContent}>
        <div className={classes.titleContainer}>
          <div className={classes.userIcon}>
            <FontAwesomeIcon icon="user" />
          </div>
          <h1>Persona <span>Capivara</span></h1>
          <div className={classes.editIcon}>
            <FontAwesomeIcon icon="edit" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default injectSheet(styles)(Header);