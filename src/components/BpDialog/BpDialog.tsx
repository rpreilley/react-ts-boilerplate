import React from 'react'
import { observer, inject } from 'mobx-react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import bpDialogStyles from './bpDialogStyles';

interface IButton {
  label: string,
  callback?(): void
}

interface IGeneralStore {
  dialogStatus: boolean
  dialogTitle: string
  dialogShowCloseButton: boolean
  dialogCloseButtonLabel: string
  dialogButtons: IButton[]
  dialogChildren: any
  _closeDialog(): void
}

interface BpDialogProps {
  generalStore?: IGeneralStore
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
      className={classes.dialog}
    >
      <DialogTitle>
        { props.generalStore!.dialogTitle }
      </DialogTitle>
      <DialogContent>
        { props.generalStore!.dialogChildren }  
      </DialogContent>
      <DialogActions>
        { 
          props.generalStore!.dialogShowCloseButton &&
          <Button onClick={handleClose} color="primary">
            { props.generalStore!.dialogCloseButtonLabel ?
              props.generalStore!.dialogCloseButtonLabel : "Cancel" }
          </Button>
        }
        { renderButtons(props.generalStore!.dialogButtons) }
      </DialogActions>
    </Dialog>
  );
}))

export default BpDialog;