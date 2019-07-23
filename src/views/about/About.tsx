import React from 'react';
import { observer, inject } from 'mobx-react';
import BpForm from '../../components/BpForm/BpForm';
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
        <BpForm fields={[
        {
          label: 'test1',
          fieldType: fieldsEnum.TEXT,
          layout: layoutConfig.L6
        },
        {
          label: 'test2',
          fieldType: fieldsEnum.TEXT,
          layout: layoutConfig.L6
        },
        {
          label: 'radio test',
          fieldType: fieldsEnum.RADIO,
          layout: layoutConfig.L6
        },
        {
          label: 'check test',
          fieldType: fieldsEnum.CHECKBOX,
          layout: layoutConfig.L6
        },
        {
          label: 'check test',
          fieldType: fieldsEnum.DATE,
          layout: layoutConfig.L6
        },
        {
          name: 'select list test',
          menuItems: [
            {
              name: 'Option 1',
              value: 1
            },
            {
              name: 'Option 2',
              value: 2
            },
            {
              name: 'Option 3',
              value: 3

            }
          ],
          value: 'test',
          fieldType: fieldsEnum.SELECTLIST
        },
        {
          fieldType: fieldsEnum.SLIDER
        },
        {
          fieldType: fieldsEnum.SWITCH,
          layout: layoutConfig.L6
        }
      ]}/>
      </div>
    )
  }

}

export default About;