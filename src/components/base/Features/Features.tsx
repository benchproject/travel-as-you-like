import React from 'react'
import cn from 'classnames'

import styles from './Features.module.scss'

function Features () {
    return (
        <section className={styles.features}>          
            <div className="row">
                <div className="col-1-of-4">
                    <div className={styles.featureBox}>
                        <i className={cn(styles.featureBoxIcon,"icon-basic-world")}></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                        <p className={styles.featureBoxText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum, nostrum voluptas soluta illo iste cum.
                        </p>
                    </div>
                </div>

                <div className="col-1-of-4">
                    <div className={styles.featureBox}>
                        <i className={cn(styles.featureBoxIcon,"icon-basic-compass")}></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                        <p className={styles.featureBoxText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum, nostrum voluptas soluta illo iste cum.
                        </p>
                    </div>
                </div>

                <div className="col-1-of-4">
                    <div className={styles.featureBox}>
                        <i className={cn(styles.featureBoxIcon,"icon-basic-map")}></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                        <p className={styles.featureBoxText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum, nostrum voluptas soluta illo iste cum.
                        </p>
                    </div>
                </div>

                <div className="col-1-of-4">
                    <div className={styles.featureBox}>
                        <i className={cn(styles.featureBoxIcon,"icon-basic-heart")}></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                        <p className={styles.featureBoxText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum, nostrum voluptas soluta illo iste cum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;