import React from 'react';
import cn from 'classnames'

import styles from './Book.module.scss';

function Book () {
    return (
        <section className={styles.sectionBook}>
            <div className="row">
                <div className={styles.book}>
                    <div className={styles.bookForm}>
                        <form action="#" className={styles.form}>
                            <div className="u-margin-bottom-medium">
                                <h2 className="heading-secondary">
                                    Start booking now
                                </h2>
                            </div> 

                            <div className={styles.formGroup}>
                                <input type="text" className={styles.formInput} placeholder="Full Name" id="name" required/>
                                <label htmlFor="name" className={styles.formLabel}>Full name</label>
                            </div>

                            <div className={styles.formGroup}>
                                <input type="email" className={styles.formInput} placeholder="Email address" id="email" required/>
                                <label htmlFor="email" className={styles.formLabel}>Email address</label>
                            </div>

                            <div className={cn(styles.formGroup, "u-margin-bottom-medium")}>
                                <div className={styles.formRadioGroup}>
                                    <input type="radio" className={styles.formRadioInput} id="small" name="size" />
                                    <label htmlFor="small" className={styles.formRadioLabel}>
                                        <span className={styles.formRadioButton}></span>
                                        Small tour group
                                    </label>
                                </div>

                                <div className={styles.formRadioGroup}>
                                    <input type="radio" className={styles.formRadioInput} id="large" name="size"/>
                                    <label htmlFor="large" className={styles.formRadioLabel}>
                                        <span className={styles.formRadioButton}></span>
                                        Large tour group
                                    </label>
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <button className="btn btn--green">Next step &rarr;</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Book;