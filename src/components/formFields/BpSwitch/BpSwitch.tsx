import React from 'react'
import Switch from '@material-ui/core/Switch'
import { colorEnum } from '../../../lib/enums/appEnum';

const BpSwitch: React.FC<IBpSwitchProps> = props => {
  return (
    <Switch
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

export interface IBpSwitchProps {
  id?: string
  color?: colorEnum
  disabled?: boolean
  disableRipple?: boolean
  inputProps?: Object
  checked?: boolean
  value?: any
  onChange?(): any
}

export default BpSwitch