import React from 'react'
import LogoAnimation from './LogoAnimation'
import styles from './Styles/Home.module.css'
import Intro from './Intro'
function Main() {
    return (
        <div className={styles.home}>
            <LogoAnimation />
            <Intro />
        </div>
    )
}

export default Main
