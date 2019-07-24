import React, { ElementType } from 'react'
import Slider from '@material-ui/core/Slider'
import { orientationEnum, valueLabelDisplayEnum} from '../../../lib/enums/generalEnums'

const BpSlider: React.FC<IBpSliderProps> = props => {
  return (
    <Slider
      key={props.inputKey}
        aria-label={props.ariaLabel}
        defaultValue={props.defaultValue}
        disabled={props.disabled}
        marks={props.marks}
        max={props.max}
        min={props.min}
        name={props.name}
        onChange={props.onChange}
        orientation={props.orientation}
        step={props.step}
        value={props.value}
        valueLabelDisplay={props.valueLabelDisplay}
    />
  )
}

export interface IBpSliderProps {
    inputKey: string | number
    ariaLabel?: string
    defaultValue?: number | Array<number>
    disabled?: boolean
    marks?: boolean | Array<{value: any, label: string}>
    max?: number
    min?: number
    name?: string
    onChange?(event: object, value: any): void
    orientation?: orientationEnum
    step?: number
    ThumbComponent?: ElementType
    value?: number | Array<number>
    valueLabelDisplay?: valueLabelDisplayEnum
}

BpSlider.defaultProps = {
    valueLabelDisplay: valueLabelDisplayEnum.AUTO
}

export default BpSlider