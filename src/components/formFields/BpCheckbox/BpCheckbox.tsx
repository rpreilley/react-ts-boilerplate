import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import { colorEnum } from '../../../lib/enums/generalEnums';
import BpFormControlLabel from '../../formFields/BpFormControlLabel/BpFormControlLabel';

const BpCheckbox: React.FC<IBpCheckboxProps> = props => {

  let checkboxArray:Array<string | number> = [];

  const handleCheck = (event: any) => {
    checkboxArray.push(event.target.value);
    props.onChange!(props.inputKey, checkboxArray);
  };
  
  return (
    <FormGroup row={props.row} >
      {props.checkboxes!.map((checkbox, index) => {
        return(
          <BpFormControlLabel
            key={index}
            label={checkbox.label}
            control={
              <Checkbox
                color={props.color} 
                value={checkbox.value}
                onChange={(event) => handleCheck(event)}
              />
            }
          />
        )
      })}
    </FormGroup>
  )
}

export interface IBpCheckboxProps {
  inputKey: string | number 
  id?: string
  color?: colorEnum
  disabled?: boolean
  disableRipple?: boolean
  inputProps?: Object
  checked?: boolean
  value?: any
  row?: boolean
  layout?: any
  checkboxes?: Array<{label: string, value: any}>
  onChange?(inputKey: any, event: any): void
}

BpCheckbox.defaultProps = {
  color: colorEnum.PRIMARY,
  disabled: false
}

export default BpCheckbox