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

export const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
}