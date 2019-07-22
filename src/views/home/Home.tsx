import React from 'react';
import { observer, inject } from 'mobx-react';
import BpSwitch from '../../components/formFields/BpSwitch/BpSwitch';
import { colorEnum } from '../../lib/enums/appEnum';

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
        <BpSwitch 
          color={colorEnum.PRIMARY}
        />
      </div>
    )
  }

}

export default Home;