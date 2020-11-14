import React from 'react';

import cn from 'classnames'
import logoWhite from '../../../img/logo-white.png'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogoBox}>
          <img src={logoWhite} alt="logo" className={styles.headerLogo}/>
      </div>

      <div className={styles.headerTextBox}>
        <h1 className={styles.headingPrimary}>
            <span className={styles.headingPrimaryMain}>Outdoors</span>
            <span className={styles.headingPrimarySub}>is where life happens</span>
        </h1>

        <a href="#" className={cn(styles.btn, styles.btnWhite, styles.btnAnimated)}>Discover our tours</a>
      </div>
    </header>
  );
}

export default Header;