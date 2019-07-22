import React from 'react';
import Switch from '@material-ui/core/Switch';
import { colorEnum, sizeEnum } from '../../../lib/enums/appEnum';

const BpSwitch: React.FC<IBpSwitchProps> = props => {
  return (
    <Switch
      id={props.id}
      color={props.color}
      disabled={props.disabled}
      disableRipple={props.disableRipple}
      inputProps={props.inputProps}
      checked={props.checked}
      value={props.value}
      size={props.size}
      onChange={props.onChange}
    />
  )
}

export interface IBpSwitchProps {
  id?: string
  color?: colorEnum
  disabled?: boolean
  disableRipple?: boolean
  inputProps?: Object
  checked?: boolean
  value?: any
  size?: sizeEnum
  onChange?(): any
}

export default BpSwitch