import React from 'react';
import { observer, inject } from 'mobx-react';

interface IHome {
  
}

interface IState {
  
}

@inject('userStore', 'generalStore')
@observer
class Home extends React.Component<IHome, IState> {

  static defaultProps = {
    
  }

  constructor(props:any) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return(
      <div className="">
        <p>Home Component</p>
      </div>
    )
  }

}

export default Home;