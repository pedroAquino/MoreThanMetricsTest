// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import PersonaHeader from './components/PersonaHeader';
import PersonaField from './components/PersonaField';
import Picture from '../shared/assets/capivara.jpg';
import { compose } from 'ramda';
import type { PersonaModel } from './services/personaFactory';

type Props = {
  classes: any;
};

const styles = theme => ({
    persona: {
	    //height: '100vh',
        width: 664,	
        borderRadius: '0 0 2px 2px',	
        backgroundColor: theme.colors.lightGray
    },
    personaContent: {
        padding: 16,
        display: 'flex'
    },
    firstColumn: {
        flexBasis: 199,
        flexGrow: 1,
        '& > ul > li': {
            marginTop: 16
        },
        '& > ul > li:nth-child(1)': {
            marginTop: 0
        }
    },
    secondColumn: {
        flexBasis: 199,
        flexGrow: 2,
        paddingLeft: 16,
        '& > ul > li': {
            marginTop: 16
        },
        '& > ul > li:nth-child(1)': {
            marginTop: 0
        }
    }
});

function Persona(props: Props) {
  const { classes  } = props;
  return (
     <div className={classes.persona}>
        <PersonaHeader persona={{
            name: 'John',
            initials: 'JOH'
        }} />
        <div className={classes.personaContent}>
            <div className={classes.firstColumn}>
                <ul>
                    <li>
                        <PersonaField 
                            height={176}
                            name="avatar" 
                            kind="image" 
                            label="IMAGE"
                            src={Picture}
                        />
                    </li>
                    <li>
                        <PersonaField
                            kind="number"
                            label="AGE"
                            initialValue={28}
                            name="age"
                        />
                    </li>
                    <li>
                        <PersonaField
                            label="GENDER"
                            initialValue="Not defined"
                            name="gender" 
                        />
                    </li>
                    <li>
                        <PersonaField
                            kind="image-gallery"
                            label="MOOD IMAGES"
                            imageSources={[
                                Picture,
                                Picture
                            ]}
                            name="moodImages"
                        />
                    </li>
                </ul>
            </div>
            <div className={classes.secondColumn}>
                <ul>
                    <li>
                        <PersonaField
                            label="OCCUPATION"
                            initialValue="Researcher"
                            name="occupation" 
                        />
                    </li>
                    <li>
                        <PersonaField
                            label="NATIONALITY"
                            initialValue="French"
                            name="nationality"
                        />
                    </li>
                    <li>
                        <PersonaField
                            label="MARITAL STATUS"
                            initialValue="Maried, 3 kids"
                            name="maritalStatus" 
                        />
                    </li>
                    <li>
                        <PersonaField
                            label="QUOTE"
                            kind="long-text"
                            formatedText={[
                                <p>
                                    “Life may not be the party we hoped for, but while we're here, we should dance.”
                                </p>
                            ]}
                            name="quote"
                        />
                    </li>
                    <li>
                        <PersonaField
                            label="DESCRIPTION"
                            kind="long-text"
                            formatedText={[
                                <p>
                                    Tess is that friendly neighbor next door. She has a secure job at the national railway company. Together with her husband, she has a monthly household income of  5000 Euro net.
                                </p>,
                                <p>
                                    Tess loves to spend free time with her three kids. Marcus, her husband, loves being outdoors, so whenever possible the couple takes long hiking tours with their children.
                                </p>,
                                <p style={{fontWeight: 'bold'}}>
                                    Tess is not very interested in technology. She wants things that just work.
                                </p>
                            ]}
                            name="description"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default injectSheet(styles)(Persona);