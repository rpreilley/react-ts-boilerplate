import React from 'react';
import { observer, inject } from 'mobx-react';
import BpRadioGroup from '../../components/formFields/BpRadio/BpRadioGroup'
import { colorEnum } from '../../components/formFields/BpRadio/BpRadio'
import { IBpRadioProps } from '../../components/formFields/BpRadio/BpRadio'

interface IHome {
  
}

interface IState {
  value: string
  radios: Array<IBpRadioProps>
}

@inject('userStore', 'generalStore')
@observer
class Home extends React.Component<IHome, IState> {

  static defaultProps = {
    
  }

  constructor(props:any) {
    super(props);

    this.state = {
      value: '',
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
      ]
    }
  }

  handleCheck = (event: React.ChangeEvent<unknown>) => {
    this.setState({ value: (event.target as HTMLInputElement).value })
  }

  componentDidMount() {
    console.log(this.state.value)
  }

  componentDidUpdate() {
    console.log(this.state.value)
  }

  render() {
    return(
      <div className="">
        <p>Home Component</p>
        <BpRadioGroup
          name='testGroup'
          value={this.state.value}
          onChange={this.handleCheck}
          radios={this.state.radios}
        />
      </div>
    )
  }

}

export default Home;