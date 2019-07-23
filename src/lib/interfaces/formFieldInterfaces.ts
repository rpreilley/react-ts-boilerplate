import { fieldsEnum } from '../enums/fieldEnums';
import { marginEnum, variantEnum } from '../enums/generalEnums';

// BpTextField interface
export interface BpTextFieldProps {
  key?: (string | number)
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
  fieldType: fieldsEnum
  type?: string
  variant?: (variantEnum | undefined)
};