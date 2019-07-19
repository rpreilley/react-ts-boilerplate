import React from 'react';
import { observer, inject } from 'mobx-react';
import BpRadioGroup from '../../components/formFields/BpRadio/BpRadioGroup'
import { colorEnum } from '../../components/formFields/BpRadio/BpRadio'
import { IBpRadioProps } from '../../components/formFields/BpRadio/BpRadio'
import BpSelectList,{
  IMenuItems,
  variantEnum
} from '../../components/formFields/BpSelectList/BpSelectList'

interface IState {
  radioValue: string
  selectValue: string
  radios: Array<IBpRadioProps>
  menuItems: Array<IMenuItems>
}

@inject('userStore', 'generalStore')
@observer
class Home extends React.Component<{}, IState> {
  constructor(props:any) {
    super(props);

    this.state = {
      radioValue: '',
      selectValue: '',
      radios: [
        {
          label: 'Radio 1',
          value: 'radio1',
          disableRipple: true
        },
        {
          label: 'Radio 2',
          value: 'radio2',
          color: colorEnum.PRIMARY,
        }
      ],
      menuItems: [
        {
          name: 'Item 1',
          value: 'item1'
        },
        {
          name: 'Item 2',
          value: 'item2'
        },
        {
          name: 'Item 3',
          value: 'item3'
        }
      ]
    }
  }

  handleCheck = (event: React.ChangeEvent<unknown>) => {
    this.setState({ radioValue: (event.target as HTMLInputElement).value })
  }

  handleSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({ selectValue: (event.target.value as string) });
  }

  render() {
    return(
      <div className="">
        <p>Home Component</p>
        <br />
        <BpRadioGroup
          name='testGroup'
          value={this.state.radioValue}
          onChange={this.handleCheck}
          radios={this.state.radios}
        />
        <BpSelectList
          name='select list'
          value={this.state.selectValue}
          variant={variantEnum.FILLED}
          onChange={this.handleSelect}
          menuItems={this.state.menuItems}
        />
      </div>
    )
  }

}

export default Home;