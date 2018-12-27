import constants from './../../../constants.js';

// start from tutorial: https://github.com/bmorelli25/interactive-bitcoin-price-chart
import React, { Component } from 'react';
import BitcoinPrices from './BitcoinPrices.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){

  }
  render() {
    return (

      <div className='PriceContainer'>
        <div className='cardsContainer'>
          <div className="mdc-card my-card">
            <div className="mdc-card__primary-action mdc-ripple-upgraded" tabIndex="0">
              <BitcoinPrices/>
            </div>
          </div>


          <div className="mdc-card my-card">
            <div className="mdc-card__primary-action mdc-ripple-upgraded" tabIndex="0">
              <BitcoinPrices/>
            </div>
          </div>


        </div>
      </div>

    );
  }
}

export default App;

/*
<div className="demo-card__primary">
      <h2 className="demo-card__title mdc-typography--headline6">Our Changing Planet</h2>
      <h3 className="demo-card__subtitle mdc-typography--subtitle2">by Kurt Wagner</h3>
    </div>
    <div className="demo-card__secondary mdc-typography--body2">
      Visit ten places on our planet that are undergoing the biggest changes today.
    </div>
  </div>
  */