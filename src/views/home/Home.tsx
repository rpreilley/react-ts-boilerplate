import React from 'react';
import { observer, inject } from 'mobx-react';
import BpSwitch from '../../components/formFields/BpSwitch/BpSwitch';
import BpFormControlLabel from '../../components/formFields/BpFormControlLabel/BpFormControlLabel';
import { colorEnum, labelPlacementEnum } from '../../lib/enums/appEnum';

interface IHome {
  
}

@inject('userStore', 'generalStore')
@observer
class Home extends React.Component<IHome> {

  static defaultProps = {
    
  }

  render() {
    return(
      <div className="">
        <p>Home Component</p>
        <BpFormControlLabel 
          control={
            <BpSwitch 
              color={colorEnum.PRIMARY}
            />
          }
          label='My New Switch'
          labelPlacement={labelPlacementEnum.START}
        />
      </div>
    )
  }

}

export default Home;