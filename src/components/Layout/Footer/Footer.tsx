import React from 'react'

import styles from './Footer.module.scss';

import logoGreenSmall1X from '../../../img/logo-green-small-1x.png';
import logoGreenSmall2X from '../../../img/logo-green-small-2x.png';
import logoGreen1X from '../../../img/logo-green-1x.png';
import logoGreen2X from '../../../img/logo-green-2x.png';

function Footer (){
    return (
       <footer className={styles.footer}>
           <div className={styles.footerLogoBox}>
               <picture className={styles.footerLogo}>
                    <source srcSet={`${logoGreenSmall1X} 1x, ${logoGreenSmall2X} 2x`}  media="(max-width: 37.5em)" />
                    <img srcSet={`${logoGreen1X} 1x, ${logoGreen2X} 2x`} alt="Full logo"  src={logoGreen2X}/>
               </picture>
             </div>
           <div className="row">
               <div className="col-1-of-2">
                   <div className={styles.footerNavigation}>
                       <ul className={styles.footerList} >
                           <li className={styles.footerItem}><a href="#" className={styles.footerLink}>Company</a></li>
                           <li className={styles.footerItem}><a href="#" className={styles.footerLink}>Contact us</a></li>
                           <li className={styles.footerItem}><a href="#" className={styles.footerLink}>Carrers</a></li>
                           <li className={styles.footerItem}><a href="#" className={styles.footerLink}>Privacy policy</a></li>
                           <li className={styles.footerItem}><a href="#" className={styles.footerLink}>Terms</a></li>
                       </ul>
                   </div>
               </div>
               <div className="col-1-of-2">
                   <p className={styles.footerCopyright} >
                        Built my <a href="#" className={styles.footerLink}>Abdelhafed souidi</a> for his travel website <a href="#" className={styles.footerLink}>travel as you like</a>. Copyright &copy; by abdellatif souidi; you are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas Schmedtmann, is of course highly appreciated!
                   </p>
               </div>
           </div>
       </footer>
    )
}

export default Footer;