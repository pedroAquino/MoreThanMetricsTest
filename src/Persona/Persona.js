// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import PersonaHeader from './components/PersonaHeader';
import PersonaField from './components/PersonaField';
import Picture from '../shared/assets/capivara.jpg';
import PersonaContainer from './containers/PersonaContainer';
import ColumnsContainer from './containers/ColumnsContainer';

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

const formatedText = fieldType => {
    if (fieldType === 'quote') {
        return [
                "“Life may not be the party we hoped for, but while we're here, we should dance.”"
        ];
    }

    if (fieldType === 'description') {
        return [
            'Tess is that friendly neighbor next door. She has a secure job at the national railway company. Together with her husband, she has a monthly household income of  5000 Euro net.',
            'Tess loves to spend free time with her three kids. Marcus, her husband, loves being outdoors, so whenever possible the couple takes long hiking tours with their children.', 
            'Tess is not very interested in technology. She wants things that just work.'
        ];
    }

    return [];
}

function Persona(props: Props) {
  const { classes  } = props;
  return (
     <div className={classes.persona}>
        <PersonaContainer>
            { (persona, onUpdatePersona) => {
                return <PersonaHeader 
                        persona={persona}  
                        onUpdatePersona={onUpdatePersona}
                    /> 
            }}
        </PersonaContainer>
        <div className={classes.personaContent}>
            <ColumnsContainer>
                { (columnsState) => {
                    return columnsState.items.map((column, index) => {
                        const colClass = index === 0 ? classes.firstColumn : classes.secondColumn;
                        
                        return <div className={colClass}>
                            <ul>
                                { column.fields.map(field => {
                                   return (
                                    <li>
                                        <PersonaField 
                                            height={field.fieldType === 'image' ? 176 : null}
                                            name={field.title} 
                                            kind={field.fieldType}
                                            label={field.title.toUpperCase()}
                                            src={field.fieldType === 'image' ? Picture : null}
                                            imageSources={field.fieldType === 'image-gallery' ? [
                                                Picture,
                                                Picture
                                            ] : []}
                                            initialValue={field.data}
                                            formatedText={formatedText(field.fieldType)}
                                        />
                                    </li>
                                   ) 
                                })}
                            </ul>
                        </div>
                    })
                }}
            </ColumnsContainer>
            
            
            {/* <div className={classes.firstColumn}>
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
            </div> */}
        </div>
    </div>
  );
};

export default injectSheet(styles)(Persona);