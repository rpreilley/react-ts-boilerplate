import React from 'react';
import { observer, inject } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import { fieldsEnum } from '../../lib/enums/fieldEnums';
import BpTextField, { IBpTextFieldProps } from '../formFields/BpTextField/BpTextField';
import BpRadioGroup, { IBpRadioGroupProps } from '../formFields/BpRadio/BpRadioGroup'
import BpCheckbox, { IBpCheckboxProps } from '../formFields/BpCheckbox/BpCheckbox'
import BpDatePicker, { IBpDatePickerProps } from '../formFields/BpDatePicker/BpDatePicker'
import BpSelectList, { IBpSelectListProps } from '../formFields/BpSelectList/BpSelectList'
import BpSlider, { IBpSliderProps } from '../formFields/BpSlider/BpSlider'
import BpSwitch, { IBpSwitchProps } from '../formFields/BpSwitch/BpSwitch'
import { IBpFormControlLabelProps } from '../formFields/BpFormControlLabel/BpFormControlLabel'

export interface IUserStore {
  _updateFormValues(formValues: Object): void
  _getformValues(): Function
  formValues: Object
}

export interface IFormProps {
  fields: Array<IBpTextFieldProps &
                IBpRadioGroupProps &
                IBpCheckboxProps &
                IBpDatePickerProps & 
                IBpSelectListProps &
                IBpSliderProps &
                IBpSwitchProps &
                IBpFormControlLabelProps>
  userStore?: IUserStore
}

@inject('userStore', 'generalStore')
@observer
class BpForm extends React.Component<IFormProps> {

  updateValue = (key: any, value: any) => {
    let obj = {
      [key]: value
    }
    this.props.userStore!._updateFormValues(obj)
  }

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
            inputKey={field.inputKey}
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
            value={field.value}
            type={field.type}
            onChange={(inputKey: any, event: any) => this.updateValue(inputKey, event.target.value)}
          />
        </Grid>
    )
  }

  renderBpRadioGroup = (field: IBpRadioGroupProps, index: number) => {
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
          <BpRadioGroup
            inputKey={field.inputKey}
            name={field.name}
            value={field.value}
            defaultValue={field.defaultValue}
            radios={field.radios}
            row={field.row}
            color={field.color}
            onChange={(inputKey: any, event: any) => this.updateValue(inputKey, event.target.value)}
          />
        </Grid>
      )
  }

  renderBpCheckbox = (field: IBpCheckboxProps & IBpFormControlLabelProps, index: number) => {
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
          inputKey={field.inputKey}
          id={field.id}
          disabled={field.disabled}
          disableRipple={field.disableRipple}
          color={field.color}
          checkboxes={field.checkboxes}
          inputProps={field.inputProps}
          value={field.value}
          row={field.row}
          onChange={(inputKey: any, checkboxArray: Array<string | number>) => this.updateValue(inputKey, checkboxArray)}
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
            inputKey={field.inputKey}
            autoOk={field.autoOk}
            label={field.label}
            format={field.format}
            value={field.value}
            onChange={(inputKey: any, date) => this.updateValue(inputKey, date)}
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
          inputKey={field.inputKey}
          autoWidth= {field.autoWidth}
          open={field.open}
          variant={field.variant}
          name={field.name}
          menuItems={field.menuItems}
          multiple={field.multiple}
          onClose={field.onClose}
          onOpen={field.onOpen}
          value={field.value}
          onChange={(inputKey: any, selectedValues: Array<string | number> | string) => this.updateValue(inputKey, selectedValues)}
        />
      </Grid>
    )
  }

  renderBpSlider = (field: IBpSliderProps, index: number) => {
    return (
      <Grid item xs={12} key={index}>
        <BpSlider
          inputKey={field.inputKey}
          aria-label={field.ariaLabel}
          defaultValue={field.defaultValue}
          disabled={field.disabled}
          marks={field.marks}
          max={field.max}
          sliderLabel={field.sliderLabel}
          min={field.min}
          name={field.name}
          orientation={field.orientation}
          step={field.step}
          value={field.value}
          valueLabelDisplay={field.valueLabelDisplay}
          onChange={(inputKey: any, sliderValue) => this.updateValue(inputKey, sliderValue)}
      />
      </Grid>
    )
  }

  renderBpSwitch = (field: IBpSwitchProps, index: number) => {
    return (
      <Grid item xs={12} key={index}>
        <BpSwitch
          inputKey={field.inputKey}
          id={field.id}
          color={field.color}
          disabled={field.disabled}
          disableRipple={field.disableRipple}
          inputProps={field.inputProps}
          checked={field.checked}
          value={field.value}
          size={field.size}
          switchLabel={field.switchLabel}
          onChange={(inputKey: any, switchValue) => this.updateValue(inputKey, switchValue)}
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
        <Grid container spacing={2}>
          {this.props.fields.map((field, index) => {
              if (bpTextFieldTypes.includes(field.fieldType)) {
                return this.renderBpTextFields(field, index)
              } else if (bpRadioTypes.includes(field.fieldType)) {
                return this.renderBpRadioGroup(field, index)
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