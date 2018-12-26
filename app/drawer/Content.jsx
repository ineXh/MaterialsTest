import React from 'react';
import constants from './../constants.js';
import Prices from './Contents/Prices.jsx';

class Content extends React.Component {
	render () {
		return(
			<div className="mdc-drawer-app-content mdc-top-app-bar--fixed-adjust">
		        <main className="main-content" id="main-content">
		        	{this.renderContent()}
		        </main>
		    </div>
		);
	}
    renderContent(){
    	switch(this.props.list){
    		case constants.ListType.Prices:
    			return <Prices/>
    	}
    }
} // end Content
export default Content;

/*
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
*/