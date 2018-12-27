import constants from './../../../constants.js';
import './app.css';

import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // position: positionType.Center
    }
  }

  componentDidMount(){
    // main = document.getElementById("main-content")
    // main.addEventListener("scroll", this._calcScroll.bind(this, main))
    // header = document.getElementById("SettingsBar")
  }
  componentWillUnmount() {
    // main.removeEventListener('scroll', this._calcScroll)
  }
  
  render() {
    let positionState = this.state.position;
    // console.log(positionState)
    return (
      <div className='SettingsContainer' id="Settings">
          <header className="" id="SettingsBar" >
                      <span className="" id="SettingsName">Bob</span>
                      <span className="" id="SettingsName">bob@email.com</span>
          </header>

        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>

      </div>
    );
  }
}

export default App;

/*
<div className='SettingsContainer'>
        <header className="" id="SettingsBar" >
          <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
            <span className="" id="SettingsName">Bob</span>
            <span className="" id="SettingsName">bob@email.com</span>
          </ScrollAnimation>
        </header>

        <h2>Content1</h2>
        <h2>Content2</h2>
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
          Some Text
        </ScrollAnimation>
        <h2>Content3</h2>
        <h2>Content4</h2>
        <h2>Content5</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
      </div>
      */