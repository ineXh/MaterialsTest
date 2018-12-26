import React from 'react';

import {MDCDrawer} from "@material/drawer";


import {MDCTopAppBar} from '@material/top-app-bar/index';


class Drawer extends React.Component {
  componentDidMount(){
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer--dismissible'));
    drawer.open = true;
    // const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    // const topAppBar = new MDCTopAppBar(topAppBarElement);
    // // topAppBar.setScrollTarget(document.getElementById('main-content'));
    // topAppBar.listen('MDCTopAppBar:nav', () => {
    //   drawer.open = !drawer.open;
    // });
  }
  render () {
    return( <div className="drawer-frame-root">
      <aside className="mdc-drawer mdc-drawer--dismissible mdc-top-app-bar--fixed-adjust">
        <div className="mdc-drawer__header"><h3 className="mdc-drawer__title">Mail</h3>
          <h6 className="mdc-drawer__subtitle">email@material.io</h6></div>
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
      App Content
      App Content
      App Content
      App Content
      App Content
      App Content
      Long-tap a word to select it on a web page. Drag the set of bounding handles to include the amount of text you want to copy. When you've highlighted your desired text, tap on the copy icon on the toolbar at the top of the screen: Tap on the field where you want to paste the text.
      Long-tap a word to select it on a web page. Drag the set of bounding handles to include the amount of text you want to copy. When you've highlighted your desired text, tap on the copy icon on the toolbar at the top of the screen: Tap on the field where you want to paste the text.
      Long-tap a word to select it on a web page. Drag the set of bounding handles to include the amount of text you want to copy. When you've highlighted your desired text, tap on the copy icon on the toolbar at the top of the screen: Tap on the field where you want to paste the text.
      Long-tap a word to select it on a web page. Drag the set of bounding handles to include the amount of text you want to copy. When you've highlighted your desired text, tap on the copy icon on the toolbar at the top of the screen: Tap on the field where you want to paste the text.
      Long-tap a word to select it on a web page. Drag the set of bounding handles to include the amount of text you want to copy. When you've highlighted your desired text, tap on the copy icon on the toolbar at the top of the screen: Tap on the field where you want to paste the text.
      Long-tap a word to select it on a web page. Drag the set of bounding handles to include the amount of text you want to copy. When you've highlighted your desired text, tap on the copy icon on the toolbar at the top of the screen: Tap on the field where you want to paste the text.
      Long-tap a word to select it on a web page. Drag the set of bounding handles to include the amount of text you want to copy. When you've highlighted your desired text, tap on the copy icon on the toolbar at the top of the screen: Tap on the field where you want to paste the text.
      Long-tap a word to select it on a web page. Drag the set of bounding handles to include the amount of text you want to copy. When you've highlighted your desired text, tap on the copy icon on the toolbar at the top of the screen: Tap on the field where you want to paste the text.
      Long-tap a word to select it on a web page. Drag the set of bounding handles to include the amount of text you want to copy. When you've highlighted your desired text, tap on the copy icon on the toolbar at the top of the screen: Tap on the field where you want to paste the text.
      Long-tap a word to select it on a web page. Drag the set of bounding handles to include the amount of text you want to copy. When you've highlighted your desired text, tap on the copy icon on the toolbar at the top of the screen: Tap on the field where you want to paste the text.
      Long-tap a word to select it on a web page. Drag the set of bounding handles to include the amount of text you want to copy. When you've highlighted your desired text, tap on the copy icon on the toolbar at the top of the screen: Tap on the field where you want to paste the text.
      Long-tap a word to select it on a web page. Drag the set of bounding handles to include the amount of text you want to copy. When you've highlighted your desired text, tap on the copy icon on the toolbar at the top of the screen: Tap on the field where you want to paste the text.
    </main>
  </div>


    </div>
  )}
}

export default Drawer;