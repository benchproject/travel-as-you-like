import React from 'react';

import styles from './Stories.module.scss';

import bgVideoMp4 from '../../../img/video.mp4';
import bgVideoWebm from '../../../img/video.webm';
import person1 from '../../../img/nat-8.jpg';
import person2 from '../../../img/nat-9.jpg';


function Stories () {
    return (
        <section className={styles.sectionStories}>
            <div className={styles.bgVideo}>
                <video className={styles.bgVideoContent} autoPlay muted loop>
                    <source src={bgVideoMp4} type="video/mp4" />
                    <source src={bgVideoWebm} type="video/webm" />
                    Your browser is not supported!
                </video>
            </div>
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    we make people genuinely happy
                </h2>
            </div> 

            <div className="row">
                <div className={styles.story}>
                    <figure className={styles.storyShape}>
                        <img src={person1} alt="Person on a tour" className={styles.storyImg}/>
                        <figcaption className={styles.storyCaption}>
                            Mary smith
                        </figcaption>
                    </figure>
                    <div className={styles.storyText}>
                        <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, libero ratione! Harum quaerat quod delectus, neque minima vitae saepe ab quas labore alias iste qui vero maxime architecto ipsam ullam.  neque minima vitae saepe ab quas labore alias iste qui vero maxime architecto ipsam ullam.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className={styles.story}>
                    <figure className={styles.storyShape}>
                        <img src={person2} alt="Person on a tour" className={styles.storyImg}/>
                        <figcaption className={styles.storyCaption}>
                            Jack wilson
                        </figcaption>
                    </figure>
                    <div className={styles.storyText}>
                        <h3 className="heading-tertiary u-margin-bottom-small">WOW !  my life is completley different now</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, libero ratione! Harum quaerat quod delectus, neque minima vitae saepe ab quas labore alias iste qui vero maxime architecto ipsam ullam.  neque minima vitae saepe ab quas labore alias iste qui vero maxime architecto ipsam ullam.</p>
                    </div>
                </div>
            </div>

            <div className="u-center-text u-margin-top-huge">
                <a href="#" className="btn-text">Read all stories &rarr;</a>
            </div> 
        </section>
    )
}

export default Stories;