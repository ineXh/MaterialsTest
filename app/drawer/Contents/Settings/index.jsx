import constants from './../../../constants.js';
import './app.css';

import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose'

const positionType = function(){};
positionType.Top = -1;
positionType.Center = 0;
positionType.Bottom = 1;

const poseHeadingConfig = {
  top: { opacity: 0.0,
             // y: "-100%",
             transition: { duration: 1000 } },
  center : { opacity: 1,
             // y: "0%",
            transition: { duration: 1000 } },
  initialPose: 'bottom'
}

const BoxHeading = posed.div(poseHeadingConfig)

var main = null;
var header = null;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: positionType.Center
    }
  }

  componentDidMount(){
    header = document.getElementById("SettingsBar")
    main = document.getElementById("main-content")
    // main.addEventListener("scroll", this._calcScroll.bind(this, main))
  }
  componentWillUnmount() {
    // main.removeEventListener('scroll', this._calcScroll)
  }
  _calcScroll() {
      var scrollPos = main.scrollTop;
      // console.log('header.height ' + header.offsetHeight)
      if (scrollPos > header.offsetHeight/2) {
          // console.log('scroll past' + scrollPos)
          this.setState({
              position: positionType.Top
          });
      } else {
          // console.log('scroll back' + scrollPos)
          this.setState({
              position: positionType.Center
          });
      }
  }
  render() {
    let positionState = this.state.position;
    // console.log(positionState)
    return (
      <div className='SettingsContainer' id="Settings">

          <BoxHeading className="" id=""
                          pose={positionState == positionType.Bottom ? 'bottom' :
                                positionState == positionType.Center ? 'center' : 'top'}>
                    <header className="" id="SettingsBar" >
                      <span className="" id="SettingsName">Bob</span>
                      <span className="" id="SettingsName">bob@email.com</span>
                    </header>
          </BoxHeading>


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