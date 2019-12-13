import React, { Component } from 'react';
import logo from '../assets/images/logo.png'

import "./Header.css";

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    const characterName = this.props.characterName;
    
    return (
        <div className='HeaderContainer'>
          <div className='LocoContainer'> <img alt='Floom Logo' src={logo} /></div>
          <h1 className='TitleContainer'> Tech Test From AN.Rubisse </h1>
        </div>
    );
  }
}
