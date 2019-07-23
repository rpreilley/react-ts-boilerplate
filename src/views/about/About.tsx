import React from 'react';
import { observer, inject } from 'mobx-react';
import BpForm from '../../components/BpForm/BpForm'
import { fieldsEnum } from '../../lib/enums/fieldEnums';
import { layoutConfig } from '../../lib/constants/layout';

interface IAbout {
  
}

interface IState {
  
}

@inject('userStore', 'generalStore')
@observer
class About extends React.Component<IAbout, IState> {

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
        <p>About Component</p>
        <BpForm fields={
          [
            {
              label: 'firstName',
              fieldType: fieldsEnum.TEXT,
              layout: layoutConfig.L6
            },
            {
              label: 'lastName',
              fieldType: fieldsEnum.TEXT,
              layout: layoutConfig.L6
            },
            {
              label: 'Password',
              fieldType: fieldsEnum.PASSWORD,
              layout: layoutConfig.L6,
              type: 'password'
            }
          ]
        }/>
      </div>
    )
  }

}

export default About;