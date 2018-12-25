import React from 'react';

import {MDCDrawer} from "@material/drawer";


import {MDCTopAppBar} from "@material/top-app-bar";


class Drawer extends React.Component {
  componentDidMount(){
    // const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    // const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
    // topAppBar.setScrollTarget(document.getElementById('main-content'));
    // topAppBar.listen('MDCTopAppBar:nav', () => {
    //   drawer.open = !drawer.open;
    // });
  }
  render () {
    return( <div>

      <header className="mdc-top-app-bar app-bar" id="app-bar">
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <a href="#" className="demo-menu material-icons mdc-top-app-bar__navigation-icon">menu</a>
          <span className="mdc-top-app-bar__title">Dismissible Drawer</span>
        </section>
      </div>
    </header>
    <aside className="mdc-drawer mdc-drawer--dismissible mdc-top-app-bar--fixed-adjust">
      <div className="mdc-drawer__content">
        <div className="mdc-list">
          <a className="mdc-list-item mdc-list-item--activated" href="#" aria-selected="true">
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>
            <span className="mdc-list-item__text">Inbox</span>
          </a>
          <a className="mdc-list-item" href="#">
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>
            <span className="mdc-list-item__text">Outgoing</span>
          </a>
          <a className="mdc-list-item" href="#">
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
            <span className="mdc-list-item__text">Drafts</span>
          </a>
        </div>
      </div>
    </aside>

    <div className="mdc-drawer-app-content mdc-top-app-bar--fixed-adjust">
      <main className="main-content" id="main-content">
        App Content 1235
      </main>
    </div>


    </div>
  )}
}

export default Drawer;