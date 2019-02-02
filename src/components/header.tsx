import React, {
  Component,
  SyntheticEvent,
  FormEvent,
  ReactPropTypes,
  Props
} from 'react';
import '../css/styles.css';
import { Properties } from 'csstype';

class Header extends Component {
  state = {
    active: 'active',
    keywords: ''
  };

  inputChangeHandler = (event: FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value === '' ? 'active' : 'non-active';
    this.setState({
      keywords: target.value
    });
  };

  render() {
    return (
      <header className={this.state.active}>
        <div className="logo">Logo</div>
        <input type="text" onChange={this.inputChangeHandler.bind(this)} />
      </header>
    );
  }
}

export default Header;
