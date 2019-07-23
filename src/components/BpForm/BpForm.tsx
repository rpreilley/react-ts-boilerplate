import React from 'react'
import { observer, inject } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import { fieldsEnum } from '../../lib/enums/fieldEnums';
// import BpCheckbox from '../formFields/BpCheckbox/BpCheckbox';
// import BpDatePicker from '../formFields/BpDatePicker/bpDatePickerStyles';
// import BpFormControl from '../formFields/BpFormControl/BpFormControl';
// import BpFormControlLabel from '../formFields/BpFormControlLabel/BpFormControlLabel';
// import BpRadio from '../formFields/BpRadio/BpRadio';
// import BpSelectList from '../formFields/BpSelectList/BpSelectList';
// import BpSlider from '../formFields/BpSlider/BpSlider';
import BpSwitch from '../formFields/BpSwitch/BpSwitch';
import BpTextField from '../formFields/BpTextField/BpTextField';
import { BpTextFieldProps } from '../../lib/interfaces/formFieldInterfaces';

interface IGeneralStore {
  // Use if needed
}

interface IForm {
  generalStore?: IGeneralStore
  renderAllFormFields?(): void
  fields: Array<BpTextFieldProps>
}

@inject('userStore', 'generalStore')
@observer
class BpForm extends React.Component<IForm> {

  renderBpTextFields = () => {
    let formFields = [];

    const bpTextFieldTypes = [
      fieldsEnum.TEXT,
      fieldsEnum.TEXTAREA,
      fieldsEnum.PASSWORD
    ]

    let formFieldProps = this.props.fields;

    //Loop through fields array passed in via props
    for (let i = 0; i < formFieldProps.length; i++) {
      let field = this.props.fields[i];

      if (bpTextFieldTypes.includes(field.fieldType!)) {
        formFields.push(
          <Grid item xs={12} key={field.key}>
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
      
    }
    
    return formFields;
  }

  renderBpSwitch = () => {
    let formFields = [];

    const bpSwitchTypes = [
      fieldsEnum.SWITCH
    ]
  }

  render() {

    // Set variable to return of each field type function created
    // JSX will not allow to execute functions as children
    const textFields = this.renderBpTextFields();
  
    // const bpSelectListTypes = [
    //   fieldsEnum.SELECTLIST
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