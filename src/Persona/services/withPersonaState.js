// @flow
import * as React from 'react';

type Props = {
};

type State = {
  name: '',
  shortName: ''
};

const withPersonaState = (InnerComponent: any) => {
    class PersonaContainer extends React.Component<Props, State>{
        constructor(props: Props) {
            super(props);
            this.state = {
                name: '',
                shortName: ''
            };
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
                persona: {...this.state}
            };
            return <InnerComponent 
                    onFieldChange={this.onChange} 
                    {...props} 
                />;
        };
    };

    return PersonaContainer
};

export default withPersonaState;