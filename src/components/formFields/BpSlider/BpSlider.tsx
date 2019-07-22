import React, { ElementType } from 'react'
import Slider from '@material-ui/core/Slider'

const BpSlider: React.FC<IBpSliderProps> = props => {
  return (
    <Slider
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

export enum orientationEnum {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export enum valueLabelDisplayEnum {
    ON = 'on',
    AUTO = 'auto',
    OFF = 'off'
}

export interface IBpSliderProps {
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