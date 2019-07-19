import React from 'react'
import FormControl from '@material-ui/core/FormControl'


const BpFormControl: React.FC<IBpFormControlProps> = props => {
  return (
    <FormControl
      disabled={props.disabled}
      error={props.error}
      fullWidth={props.fullWidth}
      margin={props.margin}
      required={props.required}
      variant={props.variant}
    >
      { props.children }
    </FormControl>
  )
}

export enum marginEnum {
  NONE = 'none',
  DENSE = 'dense',
  NORMAL = 'normal'
}

export enum variantEnum {
  STANDARD = 'standard',
  OUTLINED = 'outlined',
  FILLED = 'filled'
}

export interface IBpFormControlProps {
  disabled?: boolean
  error?: boolean
  fullWidth?: boolean
  margin?: marginEnum
  required?: boolean
  variant?: variantEnum
}

BpFormControl.defaultProps = {
  fullWidth: true
}

export default BpFormControl