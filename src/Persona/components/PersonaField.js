// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  classes: any;
  label: string;
  height: number;
  children: any;
  kind: 'short-text' | 'long-text' | 'image' | 'image-gallery' | 'number';
  src: ?string;
};

const styles = theme => ({
    field: {
        background: theme.colors.white,
        padding: '7px 6.96px 8px 12px'
    },
    fieldHeader: {
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
    fieldContent: {
        width: '100%',
        marginTop: 8
    }
});

const ImgField = ({ height, src }) => (
    <img 
        style={{ width: '100%',  height: height - 15}} 
        src={src} 
        alt="imagem"
    />
);

function PersonaField(props: Props) {
    const { 
      classes, 
      label, 
      children, 
      height, 
      kind, 
      src 
    } = props;

    const fieldContent = {
        'short-text': children,
        'long-text': null,
        'image': <ImgField height={height} src={src} />,
        'image-gallery': null,
        'number': null
    };

  return (
    <div style={{ height: height }} className={classes.field}>
        <div className={classes.fieldHeader}>
            <div className={classes.left}>
                {label}
            </div>
            <div className={classes.right}>
                <FontAwesomeIcon icon="cog" />
            </div>
        </div>
        <div className={classes.fieldContent}>
            {fieldContent[kind]}
        </div>
    </div>
  );
};

PersonaField.defaultProps = {
    kind: 'short-text'
}

export default injectSheet(styles)(PersonaField);