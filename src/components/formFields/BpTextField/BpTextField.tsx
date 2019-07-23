import React from 'react';
import TextField from '@material-ui/core/TextField';
import bpTextFieldStyles from './bpTextFieldStyles';
import { marginEnum, variantEnum } from '../../../lib/enums/generalEnums';
import { BpTextFieldProps } from '../../../lib/interfaces/formFieldInterfaces';

// React functional component
const BpTextField: React.FC<BpTextFieldProps> = props => {

  // Hook into bpTextFieldStyles defined for component and set to a variable
  const classes = bpTextFieldStyles();

  return (
    <div className={classes.root}>
      <TextField
        autoFocus={props.autoFocus}
        disabled={props.disabled}
        error={props.error}
        fullWidth={props.fullWidth}
        id={props.id} 
        label={props.label}
        margin={props.margin}
        multiline={props.multiline}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
        rows={props.rows}
        type={props.type}
        // Look into below 
        // variant={props.variant}
        />
    </div>
  );
}

// Set default props
BpTextField.defaultProps = {
  autoFocus: false,
  disabled: false,
  error: false,
  fullWidth: false,
  label: '',
  margin: marginEnum.NORMAL,
  multiline: false,
  name: 'name',
  placeholder: 'placeholder',
  required: false,
  variant: variantEnum.FILLED
}

export default BpTextField;