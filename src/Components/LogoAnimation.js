import React from 'react'
import styles from './Styles/LogoAnimation.module.css'
import {Link} from 'react-router-dom'
function LogoAnimation() {
    return (
        <div className={styles.logoanimation}>
            <div class={styles.pulse}>
            <img src="./images/phone.png" className={styles.phone} alt="" />
            </div>
           <Link to='/AboutUs'> <h5 className={styles.h3}>Learn more</h5></Link>
            </div>
        
    )
}

export default LogoAnimation
