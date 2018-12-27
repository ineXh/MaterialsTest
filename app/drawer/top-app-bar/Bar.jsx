import React from 'react';

import {MDCTopAppBar} from '@material/top-app-bar/index';

import posed, { PoseGroup } from 'react-pose'

const positionType = function(){};
positionType.Top = -1;
positionType.Center = 0;
positionType.Bottom = 1;

const poseConfig = {
  top: { opacity: 0.0,
             // y: "-100%",
             transition: { duration: 1000 } },
  center : { opacity: 1,
             // y: "0%",
            transition: { duration: 1000 } },
  bottom : { opacity: 0.1,
             // y: "100%",
            transition: { duration: 1000 } },
  initialPose: 'bottom'
}

const Box = posed.div(poseConfig)

var main = null;
var header = null;
class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: positionType.Center
    }
  }

  componentDidMount(){
    // const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    // const topAppBar = new MDCTopAppBar(topAppBarElement);
    main = document.getElementById("main-content")
    main.addEventListener("scroll", this._calcScroll.bind(this, main))
    // header = document.getElementById("SettingsBar")
  }
  componentWillUnmount() {
    main.removeEventListener('scroll', this._calcScroll)
  }
  _calcScroll() {
      var scrollPos = main.scrollTop;
      // console.log('header.height ' + header.offsetHeight)
      if (scrollPos > 128) {
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
  render () {
    let positionState = this.state.position;
    //{this.props.title}
    return(
      <header className="mdc-top-app-bar mdc-top-app-bar--fixed" id="app-bar" style={{ top: '0px',
                                    left  : '0px'}}>
        <div className="mdc-top-app-bar__row">
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <a href="#" className="material-icons mdc-top-app-bar__navigation-icon">menu</a>
            <Box className="" id=""
                          pose={positionState == positionType.Bottom ? 'bottom' :
                                positionState == positionType.Center ? 'center' : 'top'}>
              <span className="mdc-top-app-bar__title">Title</span>
            </Box>
          </section>
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
            <a href="#" className="material-icons mdc-top-app-bar__action-item" aria-label="Search" alt="Search">search</a>

          </section>
        </div>
      </header>

  )}
}

export default Bar;
// export {Bar, topAppBar};