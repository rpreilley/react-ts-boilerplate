import React from 'react'
import BpRadio from './BpRadio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import { IBpRadioProps } from './BpRadio'

const BpRadioGroup: React.FC<IBpRadioGroupProps> = props => {
  return (
    <FormControl>
      <RadioGroup
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      >
        {props.radios.map((radio, index) => (
          <FormControlLabel
            key={`radio-${index}`}
            value={radio.value}
            control={
              <BpRadio {...radio}/>
            }
            label={radio.label}
            labelPlacement="start"
          />
        ))}
      </RadioGroup>      
    </FormControl>
  )
}

interface IBpRadioGroupProps {
  name: string
  value: any
  defaultValue?: any
  radios: Array<IBpRadioProps>
  onChange(event: React.ChangeEvent<unknown>): void
}

export default BpRadioGroup