import React from 'react'
import AboutUs from './AboutUs'
import Clients from './Clients'
import Services from './Services'
import Team from './Team'
import Works from './Works'
import ContactUs from './ContactUs'
import NavBar from './NavBar'
import Home from './Home'
import Footer from './Footer'
import Awards from './Awards'
import styles from './Styles/Main.module.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 

function Main() {
    return (
        <Router>
            <div className={styles.main}>
                
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Clients" component={Clients} />
                    <Route path="/Works" component={Works} />
                    <Route path="/Services" component={Services} />
                    <Route path="/Team" component={Team} />
                    <Route path="/AboutUs" component={AboutUs} />
                    <Route path="/ContactUs" component={ContactUs} />
                    <Route path="/Awards" component={Awards} />
                </Switch>
                <Footer />
                
                
            </div>
        </Router>
    )
}


export default Main
