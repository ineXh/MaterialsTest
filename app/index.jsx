console.log('hello world');

import React from 'react';
import {render} from 'react-dom';
import Drawer from './drawer/Drawer.jsx';
import Bar from './top-app-bar/Bar.jsx';

class App extends React.Component {
  render () {
    return( <div>
    	<Bar/>
    	<Drawer/>
    </div>
  )}
}
//  <TopBar/>
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

// import {MDCTopAppBar} from '@material/top-app-bar/index';
// const topAppBarElement = document.querySelector('.mdc-top-app-bar');
// const topAppBar = new MDCTopAppBar(topAppBarElement);


// import {MDCDrawer} from "@material/drawer";
// const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer--dismissible'));
// drawer.open = true;
// // topAppBar.setScrollTarget(document.getElementById('drawer-main-content'));
// topAppBar.listen('MDCTopAppBar:nav', () => {
//   drawer.open = !drawer.open;
// });
// import {MDCList} from "@material/list";
// const list = MDCList.attachTo(document.querySelector('.mdc-list'));
// list.wrapFocus = true;
