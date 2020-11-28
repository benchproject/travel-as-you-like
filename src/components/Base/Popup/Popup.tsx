import React from 'react'

import styles from './Popup.module.scss'

import nat8 from '../../../img/nat-8.jpg'
import nat9 from '../../../img/nat-9.jpg'

function Popup () {
    return (
        <div className={styles.popup} id="popup">
            <div className={styles.popupContent}>
                <div className={styles.popupLeft}>
                    <img src={nat8} alt="Tour photo" className={styles.popupImg} />
                    <img src={nat9} alt="Tour photo" className={styles.popupImg}/>
                </div>

                <div className={styles.popupRight}>
                    <a href="#section-tours" className={styles.popupClose}>&times;</a>
                    <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
                    <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                    <p className={styles.popupText}>Lorem,esciunt consectetur maxime quos a commodi reiciendis facilis pariatur obcaecati, adipisci facere accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, reiciendis ipsa. Excepturi, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ratione adipisci ipsum totam, odit similique corrupti cumque ad rem. Voluptates quia doloremque libero unde! Sint numquam facere laborum temporibus voluptatem! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro exercitationem sequi, eaque delectus laboriosam dolorem enim voluptates, laudantium consectetur voluptate reprehenderit sint ea fugit! Enim minima inventore ratione eos quibusdam? harum doloribus beatae ut asperiores esse corrupti id blanditiis eius dolores necessitatibus consectetur ducimus magnam suscipit eum maiores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis explicabo nisi ab debitis ducimus. Dolorem exercitationem consequuntur ipsum hic vero ut sunt, nihil cumque laboriosam aperiam animi odio nam itaque?</p>
                    <a href="#" className="btn btn--green">Book now</a>
                </div>
            </div>
        </div>
    )
}

export default Popup;