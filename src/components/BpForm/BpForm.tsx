import React from 'react'
import { observer, inject } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import { fieldsEnum } from '../../lib/enums/fieldEnums';
import BpTextField from '../formFields/BpTextField/BpTextField';
import BpRadio, { IBpRadioProps } from '../formFields/BpRadio/BpRadio';
import { BpTextFieldProps } from '../../lib/interfaces/formFieldInterfaces';

interface IFormProps {
  fields: Array<BpTextFieldProps>
}

@inject('userStore', 'generalStore')
@observer
class BpForm extends React.Component<IFormProps> {

  renderBpTextFields = (field: BpTextFieldProps, index: number) => {
    return (
      <Grid 
        item
        xs={field.layout.xs}
        sm={field.layout.sm}
        md={field.layout.md}
        lg={field.layout.lg}
        xl={field.layout.xl}
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
          type={field.type}
        />
      </Grid>
    )
  }

  renderBpRadio = (field: IBpRadioProps, index: number) => {
    return (
      <Grid
        item 
        xs={field.layout.xs}
        sm={field.layout.sm}
        md={field.layout.md}
        lg={field.layout.lg}
        xl={field.layout.xl} 
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

  render() {
    const bpTextFieldTypes = [
      fieldsEnum.TEXT,
      fieldsEnum.TEXTAREA,
      fieldsEnum.PASSWORD
    ]

    const bpRadioTypes = [
      fieldsEnum.RADIO
    ]

    return (
      <form id='appForm'>
        <Grid container spacing={3}>
          {this.props.fields.map((field, index) => {
            if (bpTextFieldTypes.includes(field.fieldType)) {
              return this.renderBpTextFields(field, index)
            } else if (bpRadioTypes.includes(field.fieldType)) {
              return this.renderBpRadio(field, index)
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