// console.log('hello world');

import React from 'react';
import {render} from 'react-dom';
import Drawer from './drawer/Drawer.jsx';
import Bar from './top-app-bar/Bar.jsx';

class App extends React.Component {
  render () {
    return( <div>
      <Bar/>
    </div>
  )}
}
// <Drawer/>
// <div>Hello World! 123</div>
//       <button className="foo-button mdc-button">
//         Button
//       </button>

window.renderApp = function(element) {
  render(<App/>, document.getElementById('app'));
}

renderApp();
// import {MDCRipple} from '@material/ripple/index';
// const ripple = new MDCRipple(document.querySelector('.foo-button'));

// import {MDCDrawer} from "@material/drawer";

// Instantiation

// const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
// const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
// topAppBar.setScrollTarget(document.getElementById('main-content'));
// topAppBar.listen('MDCTopAppBar:nav', () => {
//   drawer.open = !drawer.open;
// });