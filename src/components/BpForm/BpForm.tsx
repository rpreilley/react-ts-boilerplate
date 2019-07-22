import React from 'react'
import { observer, inject } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import { fieldsEnum } from '../../lib/enums/fieldEnums';
import { marginEnum, variantEnum } from '../../lib/enums/generalEnums';
// import BpCheckbox from '../formFields/BpCheckbox/BpCheckbox';
// import BpDatePicker from '../formFields/BpDatePicker/bpDatePickerStyles';
// import BpFormControl from '../formFields/BpFormControl/BpFormControl';
// import BpFormControlLabel from '../formFields/BpFormControlLabel/BpFormControlLabel';
// import BpRadio from '../formFields/BpRadio/BpRadio';
// import BpSelectList from '../formFields/BpSelectList/BpSelectList';
// import BpSlider from '../formFields/BpSlider/BpSlider';
// import BpSwitch from '../formFields/BpSwitch/BpSwitch';
import BpTextField from '../formFields/BpTextField/BpTextField';

interface IGeneralStore {
  // Use if needed
}

interface IForm {
  generalStore?: IGeneralStore
  renderAllFormFields?(): void
  fields: Array<BpTextFieldProps>
}

interface BpTextFieldProps {
  autoFocus?: boolean
  disabled?: boolean
  error?: boolean
  fullWidth?: boolean
  id?: (string | undefined)
  label?: string
  margin?: marginEnum
  multiline?: boolean
  name?: string
  placeholder?: string
  required?: boolean
  rows?: (string | number)
  type?: fieldsEnum
  variant?: (variantEnum | undefined)
};

@inject('userStore', 'generalStore')
@observer
class BpForm extends React.Component<IForm> {

  renderBpTextFields = () => {

    const bpTextFieldTypes = [
      fieldsEnum.TEXT,
      fieldsEnum.TEXTAREA,
      fieldsEnum.PASSWORD
    ]

    //Loop through fields array passed in via props
    for (let i = 0; i < this.props.fields.length; i++) {
      let field = this.props.fields[i];
      console.log(field);

      if (bpTextFieldTypes.includes(field.type!)) {
        return (
          <Grid item xs={12}>
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
              type={field.type}
            />
          </Grid>
        )
      }   
    }
  }

  render() {

    // Set variable to return of each field type function created
    // JSX will not allow to execute functions as children
    const textFields = this.renderBpTextFields();
  
    // const bpSelectListTypes = [
    //   fieldsEnum.SELECTLIST
    // ]
  
    // const bpToggleTypes = [
    //   fieldsEnum.TOGGLE
    // ]
  
    // const bpDatePickerTypes = [
    //   fieldsEnum.DATE
    // ]
  
    // const bpTimePickerTypes = [
    //   fieldsEnum.TIME
    // ]
  
    // const bpRadioTypes = [
    //   fieldsEnum.RADIO
    // ]

    return (
      <form id='appForm'>
        <Grid container spacing={3}>
          {textFields}
        </Grid>
      </form>
    )
  }

  // function getFieldLayout(field: Object) {
  //   return field.layout
  // }

  // function clearFormFields() {
  //   // Logic to clear form fields
  // }

  // function updateValue(key, value) {
  //   // let updatedKey = key
  //   // let updatedValue = value
  //   // for (let i=0; i < this.fields.length; i++) {
  //   //   let fieldData = this.fields[i]
  //   //   if (fieldData.key === updatedKey) {
  //   //     fieldData.value = updatedValue
  //   //   }
  //   // }
  // }
}

export default BpForm;