import React from 'react';
import { observer, inject } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import { fieldsEnum } from '../../lib/enums/fieldEnums';
import BpTextField, { IBpTextFieldProps } from '../formFields/BpTextField/BpTextField';
import BpRadio, { IBpRadioProps } from '../formFields/BpRadio/BpRadio';
import BpCheckbox, { IBpCheckboxProps } from '../formFields/BpCheckbox/BpCheckbox'
import BpDatePicker, { IBpDatePickerProps } from '../formFields/BpDatePicker/BpDatePicker'
import BpSelectList, { IBpSelectListProps } from '../formFields/BpSelectList/BpSelectList'
import BpSlider, { IBpSliderProps } from '../formFields/BpSlider/BpSlider'
import BpSwitch, { IBpSwitchProps } from '../formFields/BpSwitch/BpSwitch'

export interface IFormProps {
  fields: Array<
            IBpTextFieldProps &
            IBpRadioProps &
            IBpCheckboxProps &
            IBpDatePickerProps & 
            IBpSelectListProps
          >
}

@inject('userStore', 'generalStore')
@observer
class BpForm extends React.Component<IFormProps> {

  renderBpTextFields = (field: IBpTextFieldProps, index: number) => {
    return (
        <Grid 
          item 
          xs={field.layout && field.layout.xs}
          sm={field.layout && field.layout.sm}
          md={field.layout && field.layout.md}
          lg={field.layout && field.layout.lg}
          xl={field.layout && field.layout.xl}
          key={index}
        >
          <BpTextField
            autoFocus={field.autoFocus}
            disabled={field.disabled}
            error={field.error}
            fullWidth={field.fullWidth}
            id={field.id}
            label={field.label}
            margin={field.margin}
            multiline={field.multiline}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            rows={field.rows}
            fieldType={field.fieldType}
          />
        </Grid>
    )
  }

  renderBpRadio = (field: IBpRadioProps, index: number) => {
      return (
        <Grid
          item 
          xs={field.layout && field.layout.xs}
          sm={field.layout && field.layout.sm}
          md={field.layout && field.layout.md}
          lg={field.layout && field.layout.lg}
          xl={field.layout && field.layout.xl} 
          key={index}
        >
          <BpRadio 
              id={field.id}
              checked={field.checked}
              color={field.color}
              disabled={field.disabled}
              disableRipple={field.disableRipple}
              onChange={field.onChange}
              value={field.value}
              inputProps={field.inputProps}
          />
        </Grid>
      )
  }

  renderBpCheckbox = (field: IBpCheckboxProps, index: number) => {
    return (
      <Grid
        item 
        xs={field.layout && field.layout.xs}
        sm={field.layout && field.layout.sm}
        md={field.layout && field.layout.md}
        lg={field.layout && field.layout.lg}
        xl={field.layout && field.layout.xl}
        key={index}
      >
        <BpCheckbox
          id={field.id}
          checked={field.checked}
          disabled={field.disabled}
          disableRipple={field.disableRipple}
          onChange={field.onChange}
          value={field.value}
          color={field.color}
          inputProps={field.inputProps}
        />
      </Grid>
    )
  }

    renderBpDatePicker = (field: IBpDatePickerProps, index: number) => {
      return (
        <Grid
          item 
          xs={field.layout && field.layout.xs}
          sm={field.layout && field.layout.sm}
          md={field.layout && field.layout.md}
          lg={field.layout && field.layout.lg}
          xl={field.layout && field.layout.xl} 
          key={index}
        >
          <BpDatePicker
            autoOk={field.autoOk}
            label={field.label}
            format={field.format}
          />
        </Grid>
      )
  }

  renderBpSelectList = (field: IBpSelectListProps, index: number) => {
    return (
      <Grid
        item 
        xs={field.layout && field.layout.xs}
        sm={field.layout && field.layout.sm}
        md={field.layout && field.layout.md}
        lg={field.layout && field.layout.lg}
        xl={field.layout && field.layout.xl}
        key={index}
      >
        <BpSelectList
          autoWidth= {field.autoWidth}
          open={field.open}
          value={field.value}
          variant={field.variant}
          name={field.name}
          menuItems={field.menuItems}
          multiple={field.multiple}
          onClose={field.onClose}
          onOpen={field.onOpen}
          onChange={field.onChange}
        />
      </Grid>
    )
  }

  renderBpSlider = (field: IBpSliderProps, index: number) => {
    return (
      <Grid item xs={12} key={index}>
        <BpSlider
          aria-label={field.ariaLabel}
          defaultValue={field.defaultValue}
          disabled={field.disabled}
          marks={field.marks}
          max={field.max}
          min={field.min}
          name={field.name}
          onChange={field.onChange}
          orientation={field.orientation}
          step={field.step}
          value={field.value}
          valueLabelDisplay={field.valueLabelDisplay}
      />
      </Grid>
    )
  }

  renderBpSwitch = (field: IBpSwitchProps, index: number) => {
    return (
      <Grid item xs={12} key={index}>
        <BpSwitch
          id={field.id}
          color={field.color}
          disabled={field.disabled}
          disableRipple={field.disableRipple}
          inputProps={field.inputProps}
          checked={field.checked}
          value={field.value}
          size={field.size}
          onChange={field.onChange}
        />
      </Grid>
    )
  }

  render() {
    const bpTextFieldTypes = [
      fieldsEnum.TEXT,
      fieldsEnum.TEXTAREA,
      fieldsEnum.PASSWORD
    ]

    const bpRadioTypes = [
      fieldsEnum.RADIO
    ]

    const bpCheckboxTypes = [
      fieldsEnum.CHECKBOX
    ]

    const bpDatePickerTypes = [
      fieldsEnum.DATE
    ]

    const bpSelectListTypes = [
      fieldsEnum.SELECTLIST
    ]

    const bpSliderTypes = [
      fieldsEnum.SLIDER
    ]

    const bpSwitchTypes = [
      fieldsEnum.SWITCH
    ]

    return (
      <form id='appForm'>
        <Grid container spacing={3}>
          {this.props.fields.map((field, index) => {
              if (bpTextFieldTypes.includes(field.fieldType)) {
                return this.renderBpTextFields(field, index)
              } else if (bpRadioTypes.includes(field.fieldType)) {
                return this.renderBpRadio(field, index)
              } else if (bpCheckboxTypes.includes(field.fieldType)) {
                return this.renderBpCheckbox(field, index)
              } else if (bpDatePickerTypes.includes(field.fieldType)) {
                return this.renderBpDatePicker(field, index)
              } else if (bpSelectListTypes.includes(field.fieldType)) {
                return this.renderBpSelectList(field, index)
              } else if (bpSliderTypes.includes(field.fieldType)) {
                return this.renderBpSlider(field, index)
              } else if (bpSwitchTypes.includes(field.fieldType)) {
                return this.renderBpSwitch(field, index)
              } else {
                  return <div>Field Type Not Supported</div>
              }
          })}
        </Grid>
      </form>
    )
  }
}

export default BpForm;