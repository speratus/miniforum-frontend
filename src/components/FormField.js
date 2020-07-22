import React from 'react';

import {Field, Label, Control, Input} from 'rbx';

const FormField = props => {
    return <Field>
        <Label>{props.name}:</Label>
        <Control>
            <Input 
                type="text" 
                placeholder={props.name} 
                value={props.value}
                onChange={props.onChange}
            />
        </Control>
    </Field>
};

export default FormField;