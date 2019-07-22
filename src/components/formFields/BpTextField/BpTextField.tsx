import React from 'react';
import TextField from '@material-ui/core/TextField';
import bpTextFieldStyles from './bpTextFieldStyles';
import { marginEnum, variantEnum } from '../../../lib/enums/appEnum'

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

// Define interface for component props
interface BpTextFieldProps {
  autoFocus?: boolean
  disabled?: boolean
  error?: boolean
  fullWidth?: boolean
  id?: (string | undefined)
  label?: string
  margin?: (marginEnum)
  multiline?: boolean
  name?: string
  placeholder?: string
  required?: boolean
  rows?: (string | number)
  type?: string
  variant?: (variantEnum | undefined)
};

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
  type: 'string',
  variant: variantEnum.FILLED
}

export default BpTextField;