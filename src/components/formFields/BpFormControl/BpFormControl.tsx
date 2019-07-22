import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import { marginEnum, variantEnum } from '../../../lib/enums/appEnum'

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