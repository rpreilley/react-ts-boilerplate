import React, { useEffect } from 'react';
import Switch from '@material-ui/core/Switch';
import { colorEnum, sizeEnum } from '../../../lib/enums/generalEnums';
import BpFormControlLabel from '../BpFormControlLabel/BpFormControlLabel';

const BpSwitch: React.FC<IBpSwitchProps> = props => {

  const [state, setState] = React.useState({
    // Default to false if checked not sent through via props
    checked: props.checked ? props.checked : false
  });

  useEffect(() => {
    // when component is mounted, update the form switch value with a default value if the input is not required and not toggled
    props.onChange!(props.inputKey, state.checked);
  })

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [name]: event.target.checked });
    props.onChange!(props.inputKey, state.checked);
  };

  return (
    <BpFormControlLabel
      control={
        <Switch
          key={props.inputKey}
          id={props.id}
          color={props.color}
          disabled={props.disabled}
          disableRipple={props.disableRipple}
          inputProps={props.inputProps}
          checked={state.checked}
          value='checked'
          size={props.size}
          onChange={handleChange('checked')}
        />
      }
      label={props.switchLabel}
    />
  )
}

export interface IBpSwitchProps {
  switchLabel?: string
  inputKey: string | number
  id?: string
  color?: colorEnum
  disabled?: boolean
  disableRipple?: boolean
  inputProps?: Object
  checked?: boolean
  value?: any
  size?: sizeEnum
  onChange?(inputKey: any, value: any): void
}

BpSwitch.defaultProps = {
  color: colorEnum.PRIMARY
}

export default BpSwitch