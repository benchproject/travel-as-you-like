import React from 'react'

import nat1 from '../../img/nat-1-large.jpg'
import nat2 from '../../img/nat-2-large.jpg'
import nat3 from '../../img/nat-3-large.jpg'

function Main() {
    return (
        <main>
            <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                Exciting tours for adventurous people
                </h2>
            </div>  

            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nihil porro non necessitatibus? Saepe culpa, quos reiciendis eos, eligendi id fuga
                    </p>

                    <h3 className="heading-tertiary u-margin-bottom-small">Live adventure like you never have before</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi tenetur laborum amet adipisci. Cum nesciunt delectus ab vitae eius ut quam ad non
                    </p>

                    <a href="#" className="btn-text">Learn more &rarr;</a>
                </div>

                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={nat1} alt="Photo1" className="composition__photo composition__photo--p1"/>
                        <img src={nat2} alt="Photo2" className="composition__photo composition__photo--p2"/>
                        <img src={nat3} alt="Photo3" className="composition__photo composition__photo--p3"/>
                    </div>
                </div>
            </div>
            </section>
        </main>
    )
}

export default Main;