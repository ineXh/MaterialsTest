import {MDCRipple} from '@material/ripple/index';

console.log('hello world');
console.log('with ripple');
console.log('new log');

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return( <div>
    	<div>Hello World! 12345</div>
    	<button className="foo-button mdc-button">
	    	Button
	  	</button>
    </div>
  )}
}

window.renderApp = function(element) {
  render(<App/>, document.getElementById('app'));
}

renderApp();
const ripple = new MDCRipple(document.querySelector('.foo-button'));