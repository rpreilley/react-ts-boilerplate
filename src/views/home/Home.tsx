import React from 'react';
import { observer, inject } from 'mobx-react';
import { fieldsEnum } from '../../lib/enums/fieldEnums';
import { layoutsEnum } from '../../lib/enums/layoutEnums';
import BpForm from '../../components/BpForm/BpForm';

interface IHome {
  
}

@inject('userStore', 'generalStore')
@observer
class Home extends React.Component<IHome> {

  static defaultProps = {
    
  }

  render() {

    const testFormFields = [
      {
        key: 'email',
        label: 'Email',
        placeholder: 'Enter email',
        fieldType: fieldsEnum.TEXT,
        layout: layoutsEnum.T12,
      },
      {
        key: 'password',
        label: 'Password',
        placeholder: 'Enter password',
        fieldType: fieldsEnum.PASSWORD,
        layout: layoutsEnum.T12,
        type: 'password'
      }
    ]

    return(
      <div className="">
        <p>Home Component</p>
        <BpForm 
          fields={testFormFields}
        />
      </div>
    )
  }

}

export default Home;