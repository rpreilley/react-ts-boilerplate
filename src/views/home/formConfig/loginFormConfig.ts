import { fieldsEnum } from '../../../lib/enums/fieldEnums';
import { layoutConfig } from '../../../lib/constants/layout';
import { colorEnum } from '../../../lib/enums/generalEnums';

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
    inputKey: 'login-radio',
    name: 'radio test',
    radios: [
      {
        label: 'radio1',
        value: 'radio1'
      },
      {
        label: 'radio2',
        value: 'radio2'
      }
    ],
    row: true,
    color: colorEnum.PRIMARY,
    fieldType: fieldsEnum.RADIO,
    layout: layoutConfig.L6
  },
  {
    fieldType: fieldsEnum.CHECKBOX,
    inputKey: 'login-checkbox',
    layout: layoutConfig.L6,
    label: 'Checkbox 1',
    color: colorEnum.PRIMARY,
    row: true,
    checkboxes: [
      {
        label: 'test1',
        value: 'test1'
      },
      {
        label: 'test2',
        value: 'test2'
      },
      {
        label: 'test3',
        value: 'test3'
      },
      {
        label: 'test4',
        value: 'test4'
      },
      {
        label: 'test5',
        value: 'test5'
      }
    ]
  }
]

export default loginFormFields