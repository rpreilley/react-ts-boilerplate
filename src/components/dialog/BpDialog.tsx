import React from 'react'
import { observer, inject } from 'mobx-react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import bpDialogStyles from './bpDialogStyles';

interface IGeneralStore {
  dialogStatus: boolean
  _closeDialog(): void
}
interface IButton {
  label: string,
  callback?(): void
}

interface BpDialogProps {
  generalStore?: IGeneralStore
  title: string
  showCloseButton: boolean
  closeButtonLabel?: string
  buttons?: IButton[]
  onSubmit?(): void
}

const BpDialog: React.FC<BpDialogProps> = inject('generalStore')(observer((props) => {
  const classes = bpDialogStyles();
  
  function handleClose(event: React.SyntheticEvent | React.MouseEvent, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }
    props.generalStore!._closeDialog();
  }

  function renderButtons(buttons: IButton[]) {

    return (
      buttons.map((button: IButton, index) => (
      <Button key={index} onClick={button.callback} color="primary">
        {button.label }
      </Button>
      ))
    )
  }

  return (
    <Dialog
      open={ props.generalStore!.dialogStatus }
      onClose={ handleClose }
      disableBackdropClick={ true }
    >
      <DialogTitle>
        { props.title }
      </DialogTitle>
      <DialogContent>
        { props.children }  
      </DialogContent>
      <DialogActions>
        { 
          props.showCloseButton &&
          <Button onClick={handleClose} color="primary">
            { props.closeButtonLabel && "Cancel" }
          </Button>
        }
        { props.buttons && renderButtons(props.buttons) }
      </DialogActions>
    </Dialog>
  );
}))

export default BpDialog;