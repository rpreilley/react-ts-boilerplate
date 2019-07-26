import React from 'react';
import { observer, inject } from 'mobx-react';
import { IDialog } from '../../mobxStores/generalStore';

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

  render() {
    return(
      <div>
        <p>Home Component</p>
      </div>
    )
  }

}

export default Home;