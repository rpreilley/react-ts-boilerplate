import React from 'react';
import { observer, inject } from 'mobx-react';
import BpForm, { IFormProps } from '../../components/BpForm/BpForm'
import { fieldsEnum } from '../../lib/enums/fieldEnums';

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
        <BpForm fields={[
        {
          label: 'test1',
          fieldType: fieldsEnum.TEXT
        },
        {
          label: 'test2',
          fieldType: fieldsEnum.TEXT
        },
        {
          label: 'radio test',
          fieldType: fieldsEnum.RADIO
        },
        {
          label: 'check test',
          fieldType: fieldsEnum.CHECKBOX
        },
        {
          label: 'check test',
          fieldType: fieldsEnum.DATE
        },
        {
          name: 'select list test',
          menuItems: [
            {
              name: 'test1',
              value: 'test1'
            }
          ],
          fieldType: fieldsEnum.SELECTLIST
        }
      ]}/>
      </div>
    )
  }

}

export default About;