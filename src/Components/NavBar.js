import React from 'react'
import styles from './Styles/Nav.module.css'
import { Link } from 'react-router-dom'
import { TiThMenuOutline } from "react-icons/ti";
import { IconContext } from "react-icons";
function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Link to='/'><img src="./images/logo.png" className={styles.navimg} alt="logo" /></Link>
           
            
            <ul className={styles.ul}>
                
                <Link to='/Clients'>
                    <li>Clients</li>
                </Link>
                <Link to='/Works'>
                    <li>Works</li>
                </Link>
                <Link to='/Services'>
                    <li>Services</li>
                </Link>
                <Link to='/Team'>
                    <li>Team</li>
                </Link>
                <Link to='/ContactUs'>
                    <li>Contact Us</li>
                </Link>
                <Link to='/AboutUs'>
                    <li>About Us</li>
                </Link>
                <Link to='/Awards'>
                    <li>Awards</li>
                 </Link>
              
            </ul>
        </nav>
    )
}

export default NavBar
