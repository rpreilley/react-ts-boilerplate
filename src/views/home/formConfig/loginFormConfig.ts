// import { Fields } from '@/lib/types/field.js'
// import { Layout } from '@/lib/types/layout.js'
import { fieldsEnum } from '../../../lib/enums/fieldEnums';
import { layoutConfig } from '../../../lib/constants/layout';

const loginFormFields = [
  {
    key: 'email',
    label: 'Email',
    placeholder: 'Enter email',
    fieldType: fieldsEnum.TEXT,
    layout: layoutConfig.L12,
    fullWidth: true
  },
  {
    key: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    fieldType: fieldsEnum.PASSWORD,
    type: 'password',
    layout: layoutConfig.L12,
    fullWidth: true
  }
]

export default loginFormFields