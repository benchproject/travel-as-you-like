import React from 'react'
import cn from 'classnames'

import Features from '../../base/Features'
import styles from './Main.module.scss'

import nat1 from '../../../img/nat-1-large.jpg'
import nat2 from '../../../img/nat-2-large.jpg'
import nat3 from '../../../img/nat-3-large.jpg'

function Main() {
    return (
        <main>
            <section className={styles.sectionAbout}>
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className={styles.headingSecondary}>
                        Exciting tours for adventurous people
                    </h2>
                </div>  

                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                        <p className={styles.paragraph}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nihil porro non necessitatibus? Saepe culpa, quos reiciendis eos, eligendi id fuga
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">Live adventure like you never have before</h3>
                        <p className={styles.paragraph}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi tenetur laborum amet adipisci. Cum nesciunt delectus ab vitae eius ut quam ad non
                        </p>

                        <a href="#" className={styles.btnText}>Learn more &rarr;</a>
                    </div>

                    <div className="col-1-of-2">
                        <div className={styles.composition}>
                            <img src={nat1} alt="Photo1" className={cn(styles.compositionPhoto, styles.compositionPhotoP1)} />
                            <img src={nat2} alt="Photo2" className={cn(styles.compositionPhoto, styles.compositionPhotoP2)} />
                            <img src={nat3} alt="Photo3" className={cn(styles.compositionPhoto, styles.compositionPhotoP3)} />
                        </div>
                    </div>
                </div>
            </section>
            <Features/>
        </main>
    )
}

export default Main;