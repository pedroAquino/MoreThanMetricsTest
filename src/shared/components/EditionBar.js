// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  classes: any;
};

const styles = theme => ({
    editionBar: {
        '& > ul': {
            color: theme.colors.midleGray,
            display: 'flex',
            fontSize: 14
        },
        '& > ul > li': {
            padding: '0px 16px 0px 0px'
        }
    },
    select: {
        height: 20,	
        width: 45,	
        border: `1px solid ${theme.colors.lightGray}`,	
        borderRadius: 2,
        fontSize: 11,
    }
});

const SelectField = ({ classes }) => (
    <select className={classes.select} disabled>
        <option>11pt</option>
    </select>
);

export function EditionBar({ classes }: Props) {
  return (
    <div className={classes.editionBar}>
      <ul>
        <li><FontAwesomeIcon icon="bold" /></li>
        <li><FontAwesomeIcon icon="italic" /></li>
        <li><FontAwesomeIcon icon="heading" /></li>
        <li><FontAwesomeIcon icon="list" /></li>
        <li><SelectField classes={classes} /></li>
        <li><FontAwesomeIcon icon="paint-brush" /></li>
        <li><FontAwesomeIcon icon="link" /></li>
      </ul>
    </div>
  );
};

export default injectSheet(styles)(EditionBar);
