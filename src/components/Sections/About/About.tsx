import React from 'react'
import cn from 'classnames'

import styles from './About.module.scss'


import nat1 from '../../../img/nat-1.jpg'
import nat2 from '../../../img/nat-2.jpg'
import nat3 from '../../../img/nat-3.jpg'
import nat1Large from '../../../img/nat-1-large.jpg'
import nat2Large from '../../../img/nat-2-large.jpg'
import nat3Large from '../../../img/nat-3-large.jpg'


function About () {
    return (
        <section className={styles.sectionAbout}>
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
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

                <a href="#" className="btn-text">Learn more &rarr;</a>
            </div>

            <div className="col-1-of-2">
                <div className={styles.composition}>

                    <img srcSet={`${nat1} 300w, ${nat1Large} 1000w`} 
                         sizes="(max-width: 37.5em) 20vw, (max-width: 56.25em) 30vw, 300px"
                         alt="Photo1" className={cn(styles.compositionPhoto, styles.compositionPhotoP1)} 
                         src={nat1Large}/>
                    
                    <img srcSet={`${nat2} 300w, ${nat2Large} 1000w`} 
                         sizes="(max-width: 37.5em) 20vw, (max-width: 56.25em) 30vw, 300px"
                         alt="Photo2" className={cn(styles.compositionPhoto, styles.compositionPhotoP2)} 
                         src={nat2Large}/>

                    <img srcSet={`${nat3} 300w, ${nat3Large} 1000w`} 
                         sizes="(max-width: 37.5em) 20vw, (max-width: 56.25em) 30vw, 300px"
                         alt="Photo3" className={cn(styles.compositionPhoto, styles.compositionPhotoP3)} 
                         src={nat3Large}/>


                    {/* <img src={nat1Large} alt="Photo1" className={cn(styles.compositionPhoto, styles.compositionPhotoP1)} />
                    <img src={nat2Large} alt="Photo2" className={cn(styles.compositionPhoto, styles.compositionPhotoP2)} />
                    <img src={nat3Large} alt="Photo3" className={cn(styles.compositionPhoto, styles.compositionPhotoP3)} /> */}
                </div>
            </div>
        </div>
    </section>
    )
}

export default About;