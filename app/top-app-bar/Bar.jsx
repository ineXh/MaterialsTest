import React from 'react';

import {MDCTopAppBar} from '@material/top-app-bar/index';

class Bar extends React.Component {
  componentDidMount(){
    const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    const topAppBar = new MDCTopAppBar(topAppBarElement);
  }
  render () {
    // <header class="mdc-top-app-bar mdc-top-app-bar--fixed" style="top: 0px; left: 0px">
    return(
      <header className="mdc-top-app-bar mdc-top-app-bar--fixed" id="app-bar" style={{ top: '0px',
                                    left  : '0px'}}>
        <div className="mdc-top-app-bar__row">
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <a href="#" className="material-icons mdc-top-app-bar__navigation-icon">menu</a>
            <span className="mdc-top-app-bar__title">Title</span>
          </section>
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
            <a href="#" className="material-icons mdc-top-app-bar__action-item" aria-label="Download" alt="Download">file_download</a>
            <a href="#" className="material-icons mdc-top-app-bar__action-item" aria-label="Print this page" alt="Print this page">print</a>
            <a href="#" className="material-icons mdc-top-app-bar__action-item" aria-label="Bookmark this page" alt="Bookmark this page">bookmark</a>
          </section>
        </div>
      </header>

  )}
}

export default Bar;
// export {Bar, topAppBar};