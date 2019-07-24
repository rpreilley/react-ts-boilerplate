import React from 'react'
import BpRadio from './BpRadio'
import RadioGroup from '@material-ui/core/RadioGroup'
import BpFormControlLabel from '../BpFormControlLabel/BpFormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import { IBpRadioProps } from './BpRadio'
import { labelPlacementEnum } from '../../../lib/enums/generalEnums';

export interface IBpRadioGroupProps {
  inputKey: string | number
  name?: string
  value?: any
  defaultValue?: any
  radios?: Array<IBpRadioProps>
  layout?: any
  onChange?(event: React.ChangeEvent<unknown>): void
}

const BpRadioGroup: React.FC<IBpRadioGroupProps> = props => {
  return (
    <FormControl>
      <RadioGroup
        key={props.inputKey}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      >
        {props.radios!.map((radio, index) => (
          <BpFormControlLabel
            key={`radio-${index}`}
            value={radio.value}
            control={
              <BpRadio {...radio}/>
            }
            label={radio.label}
            labelPlacement={labelPlacementEnum.START}
          />
        ))}
      </RadioGroup>      
    </FormControl>
  )
}

export default BpRadioGroup