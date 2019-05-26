// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    classes: any;
    title: string;
};

const styles = theme => ({
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

function HeaderTitle(props: Props) {
  const { classes, title } = props;
  return (
    <div className={classes.titleContainer}>
        <div className={classes.userIcon}>
          <FontAwesomeIcon icon="user" />
        </div>
        <h1>Persona <span>{title}</span></h1>
        <div className={classes.editIcon}>
          <FontAwesomeIcon icon="edit" />
        </div>
    </div>
  );
}

export default injectSheet(styles)(HeaderTitle);