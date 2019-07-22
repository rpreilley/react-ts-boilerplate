import React from 'react';
import Radio from '@material-ui/core/Radio';
import { colorEnum } from '../../../lib/enums/generalEnums';

const BpRadio: React.FC<IBpRadioProps> = props => {
  return (
    <Radio
      id={props.id}
      checked={props.checked}
      color={props.color}
      disabled={props.disabled}
      disableRipple={props.disableRipple}
      onChange={props.onChange}
      value={props.value}
      inputProps={props.inputProps}
    />
  )
}

export interface IBpRadioProps {
  id?: string
  color?: colorEnum
  disabled?: boolean
  disableRipple?: boolean
  inputProps?: Object
  checked?: boolean
  value?: any
  label?: string
  onChange?(): any
}

export default BpRadio