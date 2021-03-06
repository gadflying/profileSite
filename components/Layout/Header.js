/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.css';
// import f from '.../src/static/font/NothingYouCouldDo.ttf';

class Header extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <header className={`mdl-layout__header ${s.header} ${s.bg}`} ref={node => (this.root = node)}>
        <div className={`mdl-layout__header-row ${s.row}`}>
          <Link className={`${s.center_title} ${s.title}`} to="/">
            Joanna Chen @ world
          </Link>

          <Navigation />
        </div>
      </header>
    );
  }

}

export default Header;
