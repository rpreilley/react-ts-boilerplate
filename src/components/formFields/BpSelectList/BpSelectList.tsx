import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import BpFormControl from '../BpFormControl/BpFormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { variantEnum } from '../../../lib/enums/generalEnums'

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
        {props.menuItems!.map((item, index) => (
          <MenuItem value={item.value} key={index}>
            { item.name }
          </MenuItem>
        ))}
      </Select>
    </BpFormControl>
  )
}

export interface IMenuItems {
  name: string
  value: any
}

export interface IBpSelectListProps {
  autoWidth?: boolean
  open?: boolean
  value?: any
  variant?: variantEnum
  name?: string
  menuItems?: Array<IMenuItems>
  multiple?: boolean
  layout?: any
  onClose?(): void
  onOpen?(): void
  onChange?(event: React.ChangeEvent<{ value: unknown }>): void
}

BpSelectList.defaultProps = {
  menuItems: [
    {
      name: 'no menuItems added',
      value: 'no menuItems added'
    }
  ]
}

export default BpSelectList