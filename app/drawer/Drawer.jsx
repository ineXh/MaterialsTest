import React from 'react';

import Bar from './top-app-bar/Bar.jsx';
import Content from './Content.jsx';
import constants from './../constants.js';
import {MDCDrawer} from "@material/drawer";
import {MDCTopAppBar} from '@material/top-app-bar/index';

// import posed, { PoseGroup } from 'react-pose'

// const positionType = function(){};
// positionType.BehindTopBar = -1;
// positionType.InFrontofTopBar = 1;

// const poseZConfig = {
//   behind: { "z-index": 0,
//             background: 'red',
//              // y: "-100%",
//              transition: { duration: 1000 } },
//   infront : { "z-index": 12,
//               background: 'blue',
//              // y: "0%",
//             transition: { duration: 1000 } },
//   initialPose: 'bottom'
// }

// const BoxZ = posed.div(poseZConfig)
// <BoxZ className="" id=""
//                             pose={contentState == positionType.BehindTopBar ? 'behind' :
//                                   contentState == positionType.InFrontofTopBar ? 'infront' : 'behind'}>
var main = null;

class Drawer extends React.Component {
  constructor(props) {    super(props);
    this.state = {
      list: constants.ListType.Settings,
      headerTitle: "Settings",
      headerZIndex: 10,
      contentZIndex: 15,
      contentPaddingTop: "0px"
      //contentState: positionType.InFrontofTopBar
    }
  }
  componentDidMount(){
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer--dismissible'));
    drawer.open = true;
    const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    const topAppBar = new MDCTopAppBar(topAppBarElement);
    // // topAppBar.setScrollTarget(document.getElementById('main-content'));
    topAppBar.listen('MDCTopAppBar:nav', () => {
      drawer.open = !drawer.open;
    });
    main = document.getElementById("main-content")
    main.addEventListener("scroll", this._calcScroll.bind(this, main))
  }
  componentWillUnmount() {
    main.removeEventListener('scroll', this._calcScroll)
  }
  handleClick(input){
    // console.log(input)
    if(input == constants.ListType.Settings){
      this.setState({
          // headerZIndex: 10, // move Header Below
          headerTitle: "Settings",
          contentZIndex: 15,
          contentPaddingTop: "0px",
          list: input
      });
    }else{
      this.setState({
          // headerZIndex: 10, // move Header Below
          contentZIndex: 5,
          contentPaddingTop: "64px",
          list: input
      });
    }
    // this.setState({list: input});
  }
  _calcScroll() {
      var scrollPos = main.scrollTop;
      // console.log('header.height ' + header.offsetHeight)
      if (scrollPos > 256) {
          // console.log('scroll past ' + 100)
          this.setState({
              contentZIndex: 5 // move Header Above
          });
      } else {
          // console.log('scroll back ' + 100)
          this.setState({
              contentZIndex: 15 // move Header Below
          });
      }
  }
  render () {
    //let contentState = this.state.contentState;
    return(
      <div>
        <Bar
          list={this.state.list}
          title={this.state.headerTitle}
          zIndex={this.state.headerZIndex}/>
        <div className="drawer-frame-root">

          <aside className="mdc-drawer mdc-drawer--dismissible mdc-top-app-bar--fixed-adjust">
            <div className="mdc-drawer__header"><h3 className="mdc-drawer__title">Mail</h3>
              <h6 className="mdc-drawer__subtitle">email@email.com</h6></div>
            <div className="mdc-drawer__content">
              <div className="mdc-list">
                <a className="mdc-list-item" href="#" aria-hidden="true"
                  onClick={this.handleClick.bind(this, constants.ListType.Prices)}>
                  <i className="material-icons mdc-list-item__graphic" aria-hidden="true">show_chart</i>
                  <span className="mdc-list-item__text">Prices</span>
                </a>
                <a className="mdc-list-item" href="#"
                  onClick={this.handleClick.bind(this, constants.ListType.Alerts)}>
                  <i className="material-icons mdc-list-item__graphic" aria-hidden="true">add_alert</i>
                  <span className="mdc-list-item__text">Alerts</span>
                </a>
                <a className="mdc-list-item" href="#"
                  onClick={this.handleClick.bind(this, constants.ListType.Account)}>
                  <i className="material-icons mdc-list-item__graphic" aria-hidden="true">account_box</i>
                  <span className="mdc-list-item__text">Account</span>
                </a>
                <a className="mdc-list-item mdc-list-item--activated" href="#"
                  onClick={this.handleClick.bind(this, constants.ListType.Settings)}>
                  <i className="material-icons mdc-list-item__graphic" aria-selected="true">settings</i>
                  <span className="mdc-list-item__text">Settings</span>
                </a>
              </div>
            </div>
          </aside>

          <Content
            list={this.state.list}
            zIndex = {this.state.contentZIndex}
            paddingTop = {this.state.contentPaddingTop}/>
      </div>
    </div>
  )}
}

export default Drawer;