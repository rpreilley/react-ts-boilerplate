import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import BpFormControl from '../BpFormControl/BpFormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { variantEnum } from '../../../lib/enums/generalEnums'
import Input from '@material-ui/core/Input';

const BpSelectList: React.FC<IBpSelectListProps> = props => {

  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    let selected = event.target.value as string[];
    setSelectedValues(selected);
    props.onChange!(props.inputKey, selected);
  };

  const handleChangeMultiple = (event: any) => {
    let selected = event.target.value;
    setSelectedValues(selected);
    props.onChange!(props.inputKey, selected);
  }

  return (
    <BpFormControl>
      <InputLabel>{props.name}</InputLabel>
      <Select
        key={props.inputKey}
        onClose={props.onClose}
        onOpen={props.onOpen}
        value={selectedValues}
        multiple={props.multiple}
        input={props.multiple ? <Input id="select-multiple" /> : <Input id="select-single" />}
        onChange={props.multiple ? handleChangeMultiple : handleChange}
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
  inputKey: string | number
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
  onChange?(inputKey: any, event: any): void
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