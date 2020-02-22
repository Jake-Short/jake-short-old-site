import React from 'react';
import styles from './PlannerAppPage.module.css';

// Import components
import NavigationBar from '../../../Components/NavigationBar/NavigationBar';
import ScrollAnimation from 'react-animate-on-scroll';

// Import images
//import AppStoreBadge from '../../../Assets/PageAssets/PlannerAppPage/AppStoreBadge.svg';

export default class PlannerAppPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={styles.mainContentContainer}>
                    <NavigationBar onPortfolioClick={() => this.props.history.push("/")} />

                    <div className={styles.headerContainer}>
                        <p className={styles.headerText}>Tiny Planner</p>
                        <p className={styles.headerSubText}>iOS App</p>

{/*
                        <div className={styles.linksRow}>
                            <a className={styles.iconWrapper} href="https://github.com/Jake-Short" target="_blank" rel="noopener noreferrer">
                                <img className={styles.appStoreBadge} style={{ height: '45px' }} src={AppStoreBadge}  alt="App store" />
                            </a>
                        </div>
*/}
                    </div>

                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animatePreScroll={false}>
                        <div className={styles.whatIsItContainer}>
                            <p className={styles.whatIsItHeader}>What Is It?</p>

                            <p className={styles.whatIsItBody}>Tiny Planner is an simple, minimalistic planner app focusing on ease of use and a minimalistic 
                            design. Many apps out there have an overwhelming number of features, causing a confusing user experience. With this app, I wanted 
                            to change that, and make it simple and easy to use. I also focused on a minimal design, while maintaining a good amount of visual 
                            flair.</p>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animatePreScroll={false}>
                        <div className={styles.contactBox}>
                            <p className={styles.contactHeader}>Contact me for help at:</p>

                            <a href="mailto:apphelp@jakeshort.dev" className={styles.contactEmail}>apphelp@jakeshort.dev</a>
                        </div>
                    </ScrollAnimation>

                </div>
            </React.Fragment>
        )
    }
}