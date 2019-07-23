import React from 'react';
import TextField from '@material-ui/core/TextField';
import bpTextFieldStyles from './bpTextFieldStyles';
import { marginEnum, variantEnum } from '../../../lib/enums/generalEnums';
import { fieldsEnum } from '../../../lib/enums/fieldEnums';

// React functional component
const BpTextField: React.FC<IBpTextFieldProps> = props => {

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
export interface IBpTextFieldProps {
  key?: (string | number)
  autoFocus?: boolean
  disabled?: boolean
  error?: boolean
  fullWidth?: boolean
  id?: (string | undefined)
  label?: string
  margin?: marginEnum
  multiline?: boolean
  name?: string
  placeholder?: string
  required?: boolean
  rows?: (string | number)
  fieldType: fieldsEnum
  type?: string
  // Revisit layout type with enum/interface to specify object with specific types for Materail grid
  layout?: any
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
  variant: variantEnum.FILLED
}

export default BpTextField;