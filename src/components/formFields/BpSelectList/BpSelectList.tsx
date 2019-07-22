import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import BpFormControl from '../BpFormControl/BpFormControl'
import InputLabel from '@material-ui/core/InputLabel'

const BpSelectList: React.FC<IBpSelectListProps> = props => {
  return (
    <BpFormControl>
      <InputLabel>{props.name}</InputLabel>
      <Select
        open={props.open}
        onClose={props.onClose}
        onOpen={props.onOpen}
        value={props.value}
        multiple={props.multiple}
        onChange={props.onChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {props.menuItems.map((item, index) => (
          <MenuItem value={item.value} key={index}>
            { item.name }
          </MenuItem>
        ))}
      </Select>
    </BpFormControl>
  )
}

export enum variantEnum {
  STANDARD = 'standard',
  OUTLINED = 'outlined',
  FILLED = 'filled'
}

export interface IMenuItems {
  name: string
  value: any
}

export interface IBpSelectListProps {
  autoWidth?: boolean
  open?: boolean
  value: any
  variant?: variantEnum
  name: string
  menuItems: Array<IMenuItems>
  multiple?: boolean
  onClose?(): void
  onOpen?(): void
  onChange(event: React.ChangeEvent<{ value: unknown }>): void
}

export default BpSelectList