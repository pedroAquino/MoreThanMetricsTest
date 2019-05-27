// @flow
import * as React from 'react';
import injectSheet from "react-jss";
import PersonaHeader from './components/PersonaHeader';
import PersonaField from './components/PersonaField';
import FieldPlaceHolder from './components/FieldPlaceHolder';
import PersonaContainer from './containers/PersonaContainer';
import ColumnsContainer from './containers/ColumnsContainer';
import DraggingContainer from '../shared/containers/DraggingContainer';

type Props = {
  classes: any;
};

const styles = theme => ({
    persona: {
	    //height: '100vh',
        minHeight: 992,
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

const ref = React.createRef();

function Persona(props: Props) {
  const { classes  } = props;
  return (
     <div ref={ref} className={classes.persona}>
        <PersonaContainer>
            { (persona, onUpdatePersona) => {
                return <PersonaHeader 
                        persona={persona}  
                        onUpdatePersona={onUpdatePersona}
                    /> 
            }}
        </PersonaContainer>
        <div className={classes.personaContent}>
            <ColumnsContainer personaRef={ref} >
                { (columnsState, onUpdateFeld, onRemoveField) => {
                    return columnsState.items.map((column, index) => {
                        const colClass = index === 0 ? classes.firstColumn : classes.secondColumn;
                        
                        return <div key={column.id} className={colClass}>
                            <ul>
                                {
                                    index === 1 && (
                                        <DraggingContainer>
                                            { (draggingState) => {
                                                return draggingState.dragStatus === 'DRAGGING' ? (
                                                    <FieldPlaceHolder />
                                                ) : null
                                            }}
                                        </DraggingContainer>
                                    )
                                }
                                
                                { column.fields.map(field => {
                                   return (
                                    <li key={field.id}>
                                        <PersonaField 
                                            height={field.fieldType === 'image' ? 176 : 41}
                                            name={field.title} 
                                            kind={field.fieldType}
                                            label={field.title.toUpperCase()}
                                            src={field.src ? require(`../shared/assets/${field.src}`) : null}
                                            imageSources={field.imageSources.map(src => require(`../shared/assets/${src}`))}
                                            initialValue={field.data}
                                            onBlur={onUpdateFeld}
                                            formatedText={field.formatedText}
                                            editable={field.editable}
                                            disabled={columnsState.entityStatus === 'PERSISTING'}
                                            isNew={field.isNew}
                                            onTrashIconClick={onRemoveField}
                                            id={field.id}
                                        />
                                    </li>
                                   ) 
                                })}
                            </ul>
                        </div>
                    })
                }}
            </ColumnsContainer>
        </div>
    </div>
  );
};

export default injectSheet(styles)(Persona);