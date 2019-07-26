import { fieldsEnum } from '../../../lib/enums/fieldEnums';
import { layoutConfig } from '../../../lib/constants/layout';
import { valueLabelDisplayEnum } from '../../../lib/enums/generalEnums';

const loginFormFields = [
  {
    inputKey: 'email',
    label: 'Email',
    placeholder: 'Enter email',
    fieldType: fieldsEnum.TEXT,
    layout: layoutConfig.L12,
    fullWidth: true
  },
  {
    inputKey: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    fieldType: fieldsEnum.PASSWORD,
    type: 'password',
    layout: layoutConfig.L12,
    fullWidth: true
  },
  {
    inputKey: 'login-slider',
    fieldType: fieldsEnum.SLIDER,
    layout: layoutConfig.L12,
    valueLabelDisplay: valueLabelDisplayEnum.ON,
    min: 0,
    max: 10,
    sliderLabel: 'Volume',
    defaultValue: 5
  }
  // {
  //   inputKey: 'login-datepicker',
  //   fieldType: fieldsEnum.DATE,
  //   layout: layoutConfig.L12,
  //   label: 'Select a date',
  // }
  // {
  //   inputKey: 'login-radio',
  //   name: 'radio test',
  //   radios: [
  //     {
  //       label: 'radio1',
  //       value: 'radio1'
  //     },
  //     {
  //       label: 'radio2',
  //       value: 'radio2'
  //     }
  //   ],
  //   fieldType: fieldsEnum.RADIO,
  //   layout: layoutConfig.L6
  // },
  // {
  //   inputKey: 'login-select',
  //   fieldType: fieldsEnum.SELECTLIST,
  //   name: 'Select an Option',
  //   layout: layoutConfig.L6,
  //   multiple: false,
  //   value: '',
  //   menuItems: [
  //     {
  //       name: 'Option 1',
  //       value: 1
  //     },
  //     {
  //       name: 'Option 2',
  //       value: 2
  //     },
  //     {
  //       name: 'Option 3',
  //       value: 3
  //     }
  //   ]
  // },
  // {
  //   fieldType: fieldsEnum.CHECKBOX,
  //   inputKey: 'login-checkbox',
  //   layout: layoutConfig.L6,
  //   label: 'Checkbox 1',
  //   row: true,
  //   checkboxes: [
  //     {
  //       label: 'test1',
  //       value: 'test1'
  //     },
  //     {
  //       label: 'test2',
  //       value: 'test2'
  //     },
  //     {
  //       label: 'test3',
  //       value: 'test3'
  //     },
  //     {
  //       label: 'test4',
  //       value: 'test4'
  //     },
  //     {
  //       label: 'test5',
  //       value: 'test5'
  //     }
  //   ]
  // }
]

export default loginFormFields