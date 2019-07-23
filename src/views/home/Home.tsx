import React from 'react';
import { observer, inject } from 'mobx-react';
import { colorEnum, labelPlacementEnum } from '../../lib/enums/appEnum';
import { generalStore } from '../../mobxStores/generalStore';
import { IDialog } from '../../mobxStores/generalStore';
import BpSwitch from '../../components/formFields/BpSwitch/BpSwitch';
import BpFormControlLabel from '../../components/formFields/BpFormControlLabel/BpFormControlLabel';
import Button from '@material-ui/core/Button'

interface IGeneralStore {
  _updateDialogStatus(data: IDialog): void
}

interface IHome {
  generalStore?: IGeneralStore
}

@inject('userStore', 'generalStore')
@observer
class Home extends React.Component<IHome> {

  static defaultProps = {
    
  }

  getSwitch = () => {
    return (
      <BpFormControlLabel 
          control={
            <BpSwitch 
              color={colorEnum.PRIMARY}
            />
          }
          label='My New Switch'
          labelPlacement={labelPlacementEnum.START}
        />
    )
  }

  openDialog = () => {
    generalStore._updateDialogStatus({
      dialogStatus: true,
      dialogTitle: 'Some Title',
      dialogChildren: this.getSwitch(),
      dialogButtons: [
        {
          label: 'test button',
          callback: () => console.log('test button 1')
        },
        {
          label: 'test button 2',
          callback: () => console.log('test button 2')
        }
      ]
    })
  }

  render() {
    return(
      <div className="">
        <p>Home Component</p>
        <br />
        <Button onClick={this.openDialog}>Open Dialog</Button>
      </div>
    )
  }

}

export default Home;