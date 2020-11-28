import React from 'react'
import cn from 'classnames'

import styles from './Tours.module.scss'

function Tours (){
    return (
        <section className={styles.sectionTours} id="section-tours">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Most popular Tours
                </h2>
            </div> 

            <div className="row">
                <div className="col-1-of-3">
                    <div className={styles.card}>
                        <div className={cn(styles.cardSide, styles.cardSideFront)}>
                             <div className={cn(styles.cardPicture, styles.cardPicture1)}>
                                &nbsp;
                             </div>
                             <h4 className={styles.cardHeading}>
                                <span className={cn(styles.cardHeadingSpan, styles.cardHeadingSpan1)} >The sea explorer</span>
                             </h4>
                             <div className={styles.cardDetails}>
                                <ul>
                                    <li>3 day tours</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>Sleep in cozy hotels</li>
                                    <li>Difficulty: easy</li>
                                </ul>
                             </div>
                        </div>    
                        <div className={cn(styles.cardSide, styles.cardSideBack, styles.cardSideBack1)}>
                             <div className={styles.cardCta}>
                                <div className={styles.cardPriceBox}>
                                    <p className={styles.cardPriceOnly}>Only</p>
                                    <p className={styles.cardPriceValue}>$297</p>
                                </div>
                                <a href="#popup" className="btn btn--white">Book now!</a>
                             </div>
                        </div>                      
                    </div>
                </div>

                <div className="col-1-of-3">
                    <div className={styles.card}>
                    <div className={cn(styles.cardSide, styles.cardSideFront)}>
                             <div className={cn(styles.cardPicture, styles.cardPicture2)}>
                                &nbsp;
                             </div>
                             <h4 className={styles.cardHeading}>
                                <span className={cn(styles.cardHeadingSpan, styles.cardHeadingSpan2)} >The forest hiker</span>
                             </h4>
                             <div className={styles.cardDetails}>
                                <ul>
                                    <li>7 day tours</li>
                                    <li>Up to 40 people</li>
                                    <li>6 tour guides</li>
                                    <li>Sleep in provided tents</li>
                                    <li>Difficulty: medium</li>
                                </ul>
                             </div>
                        </div>    
                        <div className={cn(styles.cardSide, styles.cardSideBack, styles.cardSideBack2)}>
                             <div className={styles.cardCta}>
                                <div className={styles.cardPriceBox}>
                                    <p className={styles.cardPriceOnly}>Only</p>
                                    <p className={styles.cardPriceValue}>$497</p>
                                </div>
                                <a href="#popup" className="btn btn--white">Book now!</a>
                             </div>
                        </div>      
                    </div>
                </div>

                <div className="col-1-of-3">
                    <div className={styles.card}>
                    <div className={cn(styles.cardSide, styles.cardSideFront)}>
                             <div className={cn(styles.cardPicture, styles.cardPicture3)}>
                                &nbsp;
                             </div>
                             <h4 className={styles.cardHeading}>
                                <span className={cn(styles.cardHeadingSpan, styles.cardHeadingSpan3)} >The snow adventurer</span>
                             </h4>
                             <div className={styles.cardDetails}>
                                <ul>
                                    <li>5 day tours</li>
                                    <li>Up to 15 people</li>
                                    <li>3 tour guides</li>
                                    <li>Sleep in provided tents</li>
                                    <li>Difficulty: hard</li>
                                </ul>
                             </div>
                        </div>    
                        <div className={cn(styles.cardSide, styles.cardSideBack, styles.cardSideBack3)}>
                             <div className={styles.cardCta}>
                                <div className={styles.cardPriceBox}>
                                    <p className={styles.cardPriceOnly}>Only</p>
                                    <p className={styles.cardPriceValue}>$897</p>
                                </div>
                                <a href="#popup" className="btn btn--white">Book now!</a>
                             </div>
                        </div>      
                    </div>
                </div>
            </div>
            <div className="u-center-text u-margin-top-huge">
                <a href="#" className="btn btn--green">Discover all tours</a>
            </div> 
        </section>
    )
}

export default Tours;