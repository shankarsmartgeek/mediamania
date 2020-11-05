import React from 'react'
import styles from './Styles/Intro.module.css'
import {Link} from 'react-router-dom'
function Intro() {
    return (
        <div className={styles.intro}>
            <div className={styles.content}>
            <h3 className={styles.h3}><bold>We help brands set a new standard</bold><br/></h3><p className={styles.p}>Your next giant leap leans on more than metrics, channels, and platforms alone. It requires a pitch-perfect mix of strategic precision, deeply human thinking, and creative prowess.

Archetype is a global agency working across the field to build brands that attract, brands that offer a unique position and brands that effect real change in the world.</p>
            </div>
            <Link to="/Services"><p className={styles.p1}><strong>What we do </strong></p></Link>
            </div>
    )
}

export default Intro
