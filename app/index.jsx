import {MDCRipple} from '@material/ripple/index';
const ripple = new MDCRipple(document.querySelector('.foo-button'));

console.log('hello world');
console.log('with ripple');
console.log('new log');

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return( <div>
    	Hello World!
    </div>
  )}
}

window.renderApp = function(element) {
  render(<App/>, document.getElementById('app'));
}

renderApp();