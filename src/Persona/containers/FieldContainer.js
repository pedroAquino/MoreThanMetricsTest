// @flow
import * as React from 'react';

type Props = {
 initialValue: string;
 onBlur: (value: any) => void;
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
        this.onFieldBlur = this.onFieldBlur.bind(this);
    }

    /*:: onChange: () => void */
    onChange(evt: any) {
        this.setState({
            value: evt.target.value
        });
    }

    /*:: onFieldBlur: () => void */
    onFieldBlur(evt: any) {
        const fieldValue = {
            [evt.target.name]: evt.target.value
        };
        this.props.onBlur(fieldValue);
    }
  
    render() {
        return this.props.children(
            this.state.value,
            this.onChange,
            this.onFieldBlur
        );
    }
};

export default FieldContainer;