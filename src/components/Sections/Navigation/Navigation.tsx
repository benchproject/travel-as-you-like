import React from 'react';

import styles from './Navigation.module.scss';

function Navigation () {
    return (
        <div className={styles.navigation} >
            <input type="checkbox" className={styles.navigationCheckbox} id="navi-toggle" />

            <label htmlFor="navi-toggle" className={styles.navigationButton} >
                <span className={styles.navigationIcon}>&nbsp;</span>
            </label>

            <div className={styles.navigationBackground} >&nbsp;</div>

            <nav className={styles.navigationNav} >
                <ul className={styles.navigationList} >
                    <li className={styles.navigationItem} ><a href="#" className={styles.navigationLink}><span>01</span>About Natours</a></li>
                    <li className={styles.navigationItem} ><a href="#" className={styles.navigationLink}><span>02</span>You benfits</a></li>
                    <li className={styles.navigationItem} ><a href="#" className={styles.navigationLink}><span>03</span>Popular tours</a></li>
                    <li className={styles.navigationItem} ><a href="#" className={styles.navigationLink}><span>04</span>Stories</a></li>
                    <li className={styles.navigationItem} ><a href="#" className={styles.navigationLink}><span>05</span>Book now</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;