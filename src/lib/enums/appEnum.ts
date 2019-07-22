import WarningIcon from '@material-ui/icons/Warning';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';

export enum anchorOriginHorizontalEnum {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}

export enum anchorOriginVerticalEnum {
  TOP = 'top',
  BOTTOM = 'bottom'
}

export enum colorEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DEFAULT = 'default'
}

export enum labelPlacementEnum {
  START = 'start',
  END = 'end',
  TOP = 'top',
  BOTTOM = 'bottom'
}

export enum marginEnum {
  NONE = 'none',
  DENSE = 'dense',
  NORMAL = 'normal'
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

export enum variantEnum {
  STANDARD = 'standard',
  OUTLINED = 'outlined',
  FILLED = 'filled'
}

// Size ENUM for switch currently.
// Note: Switch can't use LARGE, so create new enum if more properties are needed, else typescript will error
export enum sizeEnum {
  SMALL = 'small',
  MEDIUM = 'medium'
}

export const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
}