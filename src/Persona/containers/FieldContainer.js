// @flow
import * as React from 'react';

type Props = {
 initialValue: string;
 children: any;
};

type State = {
  value: string;
};

export class FieldContainer extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            value: props.initialValue
        };
        this.onChange = this.onChange.bind(this);
    }

    /*:: onChange: () => void */
    onChange(evt: any) {
        this.setState({
            value: evt.target.value
        });
    }
  
    render() {
        return this.props.children(
            this.state.value,
            this.onChange
        );
    }
};

export default FieldContainer;