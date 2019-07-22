import React, { ReactElement } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { labelPlacementEnum } from '../../../lib/enums/appEnum';

const BpFormControlLabel: React.FC<IBpFormControlLabelProps> = props => {
  return (
    <FormControlLabel
      checked={props.checked}
      control={props.control}
      disabled={props.disabled}
      label={props.label}
      labelPlacement={props.labelPlacement}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    >
      { props.children }
    </FormControlLabel>
  )
}

export interface IBpFormControlLabelProps {
  checked?: boolean
  control: ReactElement
  disabled?: boolean
  label: string
  labelPlacement?: labelPlacementEnum
  name?: string
  onChange?(): any
  value?: any
}

BpFormControlLabel.defaultProps = {
  
}

export default BpFormControlLabel