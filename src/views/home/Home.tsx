import React from 'react';
import { observer, inject } from 'mobx-react';

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
      </div>
    )
  }

}

export default Home;