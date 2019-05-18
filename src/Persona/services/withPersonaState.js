// @flow
import * as React from 'react';
import personaFactory from './personaFactory';
import type { PersonaModel } from './personaFactory';

type Props = {
};

type State = PersonaModel & {

};

const withPersonaState = (InnerComponent: any) => {
    class PersonaContainer extends React.Component<Props, State>{
        constructor(props: Props) {
            super(props);
            this.state = personaFactory();
            this.onChange = this.onChange.bind(this);
        }

        /*:: onChange: () => void */
        onChange(evt: any) {
            this.setState({
                [evt.target.name]: evt.target.value
            });
        }

        render() {
            const props = {
                ...this.props,
                persona: personaFactory(this.state)
            };
            console.log('STATE', this.state);
            return <InnerComponent 
                    onFieldChange={this.onChange} 
                    {...props} 
                />;
        };
    };

    return PersonaContainer
};

export default withPersonaState;