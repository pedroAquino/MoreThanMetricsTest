// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  classes: any;
  label: string;
  height: number;
  children: any;
  kind: 'image' | 'normal';
  src: ?string;
};

const styles = theme => ({
    card: {
        background: theme.colors.white,
        padding: '7px 6.96px 8px 12px'
    },
    cardHeader: {
        fontSize: theme.fontSizes.small,
	    color: '#B1B6B6',	
        fontWeight: 'bold',
    },
    left: {
        float: 'left'
    },
    right: {
        float: 'right'
    },
    cardContent: {
        width: '100%',
        marginTop: 8
    }
});

function Card(props: Props) {
  const { 
      classes, 
      label, 
      children, 
      height, 
      kind, 
      src 
    } = props;
  return (
    <div style={{ height: height }} className={classes.card}>
        <div className={classes.cardHeader}>
            <div className={classes.left}>
                {label}
            </div>
            <div className={classes.right}>
                <FontAwesomeIcon icon="cog" />
            </div>
        </div>
        <div className={classes.cardContent}>
            {
                kind === 'image' ?
                    <img style={{
                        width: '100%',
                        height: height - 15
                    }} 
                    src={src} 
                    alt="imagem" /> : {children}
            }
        </div>
    </div>
  );
};

export default injectSheet(styles)(Card);