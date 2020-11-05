import React from 'react'
import { IconContext } from "react-icons";
import styles from './Styles/Footer.module.css'
import { TiSocialFacebookCircular, TiSocialInstagram, TiMail } from "react-icons/ti";
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.info}>
                <ul className={styles.ul}>
                    <Link to='/ContactUs'>
                        <li>Contact</li></Link>
                    <Link to='/Services'>
                        <li>Services</li></Link>
                    <Link to='/AboutUs'>
                    <li>About Us</li></Link>
                    <li></li>
                    <li></li>
                </ul>
                <div className={styles.copyright}>
                    <p>© 2021 Media Mania Limited. All rights reserved.</p>
                </div>
            </div>
            <div className={styles.socialIcons}>
                <ul className={styles.ulicons}>
                    
                   <IconContext.Provider value={{ color: "white-smoke", className: "global-class-name", size:"2em"}}>
                        
                            
                        <li><a rel='noreferrer noopener' href='https://www.facebook.com/mediamaniapr' className={styles.a} target="_blank"><TiSocialFacebookCircular /></a></li>
                        <li><a rel='noreferrer noopener' href='mailto:mediamania4pr@gmail.com' className={styles.a} target="_blank"><TiMail /></a></li>
                        <li><a rel='noreferrer noopener' href='https://www.instagram.com/mediamania_pr/' className={styles.a} target="_blank"><TiSocialInstagram /></a></li>
                   
                    </IconContext.Provider>
                    
                </ul>
            </div>
        </div>
    )
}

export default Footer
