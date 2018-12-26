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
        <BitcoinPrices/>
      </div>

    );
  }
}

export default App;