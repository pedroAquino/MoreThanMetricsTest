// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  classes: any;
  label: string;
  height: number;
  text: string;
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
    },
    text: {
        marginBlockEnd: '16px !important',
        marginBlockStart: '16px !important',
        fontSize: theme.fontSizes.medium
    }
});

const ImgField = ({ height, src }) => (
    <img 
        style={{ width: '100%',  height: height - 15}} 
        src={src} 
        alt="imagem"
    />
);
const ShortText = ({ classes, value }) => <p className={classes.text}>{value}</p>;

function PersonaField(props: Props) {
    const { 
      classes, 
      label, 
      height, 
      kind, 
      src,
      value
    } = props;

    const fieldContent = {
        'short-text': <ShortText classes={classes} value={value} />,
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
    kind: 'short-text',
    text: ''
}

export default injectSheet(styles)(PersonaField);