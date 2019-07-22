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
        autofocus: true,
        key: 'email',
        label: 'Email',
        placeholder: 'Enter email',
        type: fieldsEnum.TEXT,
        layout: layoutsEnum.L12,
        prependIcon: 'email'
      },
      {
        key: 'password',
        label: 'Password',
        placeholder: 'Enter password',
        type: fieldsEnum.PASSWORD,
        layout: layoutsEnum.L12,
        prependIcon: 'lock'
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