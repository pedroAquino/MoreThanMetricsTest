// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  kind: 'short-text' | 'long-text' | 'image' | 'image-gallery' | 'number';
  classes: any;
};

const styles  = theme => ({
    personaElement: {
        background: theme.colors.white,
        width: 163,
        height: 112,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '2px 2px 0 0',
        position: 'relative'
    },
    text: {
        fontSize: theme.fontSizes.small,
        color: theme.colors.darkGray,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 12
    },
    shortText: {
        fontSize: 40,
        fontWeight: 300,
        color: '#B1B6B6',
        padding: '13px 45px 0px 46px',
        cursor: 'move'
    },
    longText: {
        fontSize: 11,
        padding: '11.8px 13.56px 0px 16.31px',
        textAlign: 'center',
        color: '#B1B6B6'
    },
    image: {
        fontSize: 32,
        padding: '31px 61px 0px 62px',
        color: '#B1B6B6'
    }
});

const ShortText = ({ classes }) => <div className={classes.shortText}>Abc</div>;
const LongText = ({ classes }) => (
    <div className={classes.longText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula, purus sed efficitur dignissim, augue risus suscipit massa, eget accumsan
    </div>
);
const Image = ({ classes }) => <div className={classes.image}><FontAwesomeIcon icon="image" /></div>;
const ImageGallery = ({ classes }) => <div className={classes.image}><FontAwesomeIcon icon="images" /></div>;
const Number = ({ classes }) => <div className={classes.shortText}>123</div>;

function PersonaElement(props: Props) {
  const { kind, classes } = props;
  const content = {
    'short-text': <ShortText classes={classes} />,
    'long-text': <LongText classes={classes} />,
    'image':  <Image classes={classes} />,
    'image-gallery': <ImageGallery classes={classes} />,
    'number': <Number classes={classes} />
  };

  return (
    <div className={classes.personaElement}>
        {content[kind]}
        <div className={classes.text}>
            {kind.split('-').join(' ').toUpperCase()}
        </div>
    </div>
  );
};

export default injectSheet(styles)(PersonaElement);