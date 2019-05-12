// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  classes: any;
};

type MenuItem = {
    icon: string;
    text: string
}

const styles = theme => ({
    headerMenu: {
        display: 'flex',
        justifyContent: 'space-between',
        '& li': {
            textAlign: 'center',
            color: theme.colors.darkGray,
        },
        '& li div': {
            fontSize: 20,
        },
        '& li p': {
            fontSize: 12
        }
    }
});

function HeaderMenuItem(props: MenuItem) {
    const {
        icon,
        text
    } = props;
    return (
        <li>
            <div>
                <FontAwesomeIcon icon={icon} />
            </div>
            <p>{text}</p>
        </li>
    );
}

function HeaderMenu(props: Props) {
  const { classes } = props;
  const menuItens = [
      {
          icon: 'save',
          text: 'Save persona'
      },
      {
          icon: 'plus-square',
          text: 'Add element'
      },
      {
          icon: 'share',
          text: 'Export'
      },
      {
          icon: 'copy',
          text: 'Duplicate'
      },
      {
          icon: 'arrow-right',
          text: 'Move'
      },
      {
          icon: 'question-circle',
          text: 'Help'
      },
      {
          icon: 'ellipsis-h',
          text: 'More actions'
      },
  ];
  return (
      <ul className={classes.headerMenu}>
        {menuItens.map(item => <HeaderMenuItem {...item} />)}
      </ul>
  );
}

export default injectSheet(styles)(HeaderMenu);

