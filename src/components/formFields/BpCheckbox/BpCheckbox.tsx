import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { colorEnum } from '../../../lib/enums/generalEnums';

const BpCheckbox: React.FC<IBpCheckboxProps> = props => {
  return (
    <Checkbox
      id={props.id}
      checked={props.checked}
      disabled={props.disabled}
      disableRipple={props.disableRipple}
      onChange={props.onChange}
      value={props.value}
      color={props.color}
      inputProps={props.inputProps}
    />
  )
}

export interface IBpCheckboxProps {
  id?: string
  color?: colorEnum
  disabled?: boolean
  disableRipple?: boolean
  inputProps?: Object
  checked?: boolean
  value?: any
  layout?: any
  onChange?(): any
}

BpCheckbox.defaultProps = {
  color: colorEnum.SECONDARY,
  disabled: false
}

export default BpCheckbox