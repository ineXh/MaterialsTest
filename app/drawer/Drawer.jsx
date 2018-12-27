import React from 'react';

import Bar from './top-app-bar/Bar.jsx';
import Content from './Content.jsx';
import constants from './../constants.js';
import {MDCDrawer} from "@material/drawer";
import {MDCTopAppBar} from '@material/top-app-bar/index';


class Drawer extends React.Component {
  constructor(props) {    super(props);
    this.state = {
      list: constants.ListType.Settings,
      headerTitle: "Title23"
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
  }
  handleClick(input){
    // console.log(input)
    this.setState({list: input});
  }
  render () {
    return(
      <div>
        <Bar
          title={this.props.headerTitle}/>
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

          <Content list={this.state.list}/>
      </div>
    </div>
  )}
}

export default Drawer;