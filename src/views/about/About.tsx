import React from 'react';
import { observer, inject } from 'mobx-react';
import BpForm from '../../components/BpForm/BpForm';
import { fieldsEnum } from '../../lib/enums/fieldEnums';
import { colorEnum, labelPlacementEnum } from '../../lib/enums/generalEnums';
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
          inputKey: 'test1',
          label: 'test1',
          fieldType: fieldsEnum.TEXT,
          fullWidth: true,
          layout: layoutConfig.L6
        },
        {
          inputKey: 'test2',
          label: 'test2',
          fieldType: fieldsEnum.TEXT,
          fullWidth: true,
          layout: layoutConfig.L6
        },
        {
          inputKey: 'test6',
          name: 'radio test',
          radios: [
            {
              label: 'radio1',
              value: 'test'
            },
            {
              label: 'radio1',
              value: 'test'
            }
          ],
          fieldType: fieldsEnum.RADIO,
          layout: layoutConfig.L6
        },
        {
          inputKey: 'test3',
          label: 'check test',
          labelPlacement: labelPlacementEnum.TOP,
          fieldType: fieldsEnum.CHECKBOX,
          layout: layoutConfig.L6,
          color: colorEnum.DEFAULT
        },
        {
          inputKey: 'test14',
          label: 'check test',
          fieldType: fieldsEnum.DATE,
          layout: layoutConfig.L6
        },
        {
          inputKey: 'test5',
          fieldType: fieldsEnum.SELECTLIST,
          name: 'Select an Option',
          layout: layoutConfig.L6,
          value: '',
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
          ]
        }
      ]}/>
      </div>
    )
  }
}

export default About;