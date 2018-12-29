import React from 'react';

import {MDCTopAppBar} from '@material/top-app-bar/index';


class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
  }
  componentWillUnmount() {
  }
  render () {
    // console.log(this.props.title)
    return(
      <header className="mdc-top-app-bar mdc-top-app-bar--fixed" id="app-bar" style={{ top: '0px',
                                    left  : '0px', zIndex: this.props.zIndex}}>
        <div className="mdc-top-app-bar__row">
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <a href="#" className="material-icons mdc-top-app-bar__navigation-icon">menu</a>
              <span className="mdc-top-app-bar__title">{this.props.title}</span>
          </section>
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
            <a href="#" className="material-icons mdc-top-app-bar__action-item" aria-label="Search" alt="Search">search</a>

          </section>
        </div>
      </header>

  )}
}

export default Bar;
// export {Bar, topAppBar};