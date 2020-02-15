import React from 'react';
import styles from './HomePage.module.css';

// Import components
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import ScrollAnimation from 'react-animate-on-scroll';
import Masonry from 'react-masonry-component';

// Import images
import PlannerApp from '../../Assets/PageAssets/HomePage/PlannerApp.png';
import ClientechWebsite from '../../Assets/PageAssets/HomePage/ClientechWebsite.png';
import BitRocketApp from '../../Assets/PageAssets/HomePage/BitRocketApp.png';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
        }

        this.myWorkRef = React.createRef();
        this.scrollToMyWork = this.scrollToMyWork.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    scrollToMyWork() {
        window.scrollTo(0, this.myWorkRef.current.offsetTop - 100);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            <React.Fragment>
                <div className={styles.mainContentContainer}>
                    <NavigationBar onPortfolioClick={this.scrollToMyWork} />

                    <div className={styles.headerContainer}>
                        <p className={styles.headerText}>Jake Short</p>
                        <p className={styles.headerSubText}>UI Designer & Programmer</p>

                        <div className={styles.linksRow}>
                            <a className={styles.iconWrapper} href="https://github.com/Jake-Short" target="_blank" rel="noopener noreferrer">
                                <ion-icon name="logo-github"></ion-icon>
                            </a>

                            <a className={styles.iconWrapper} href="https://instagram.com/JakeShort127" target="_blank" rel="noopener noreferrer">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>

                            <a className={styles.iconWrapper} href="https://twitter.com/JakeShort127" target="_blank" rel="noopener noreferrer">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>

                            <a className={styles.iconWrapper} href="https://dribbble.com/jakeshort" target="_blank" rel="noopener noreferrer">
                                <ion-icon name="logo-dribbble"></ion-icon>
                            </a>
                        </div>
                    </div>

                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={250} animatePreScroll={false}>
                        <div className={styles.whatIDoBox}>
                            <p className={styles.whatIDoHeader}>
                                What I Do
                            </p>

                            <div className={styles.whatIDoDivider}></div>

                            <div className={styles.whatIDoContent}>

                                <div className={styles.whatIDoCard}>
                                    <div className={styles.whatIDoIcon} style={{ background: 'rgba(9, 132, 227, 0.4)' }}>
                                        <ion-icon name="logo-react" style={{ color: 'rgba(9, 132, 227, 1.0)' }}></ion-icon>
                                    </div>

                                    <p className={styles.whatIDoText}>ReactJS</p>

                                    <p className={styles.whatIDoSubText}>I have built many react sites, and am comfortable with front end development
                                    using ReactJS.</p>
                                </div>

                                <div className={styles.whatIDoCard}>
                                    <div className={styles.whatIDoIcon} style={{ background: 'rgba(162, 155, 254, 0.4)' }}>
                                        <ion-icon name="logo-apple" style={{ color: 'rgba(162, 155, 254, 1.0)' }}></ion-icon>
                                    </div>

                                    <p className={styles.whatIDoText}>iOS</p>

                                    <p className={styles.whatIDoSubText}>I have developed multiple iOS applications, and I am familiar
                                    with the design specifications for iOS.</p>
                                </div>

                                <div className={styles.whatIDoCard}>
                                    <div className={styles.whatIDoIcon} style={{ background: 'rgba(240, 147, 43, 0.4)' }}>
                                        <ion-icon name="logo-firebase" style={{ color: 'rgba(240, 147, 43, 1.0)' }}></ion-icon>
                                    </div>

                                    <p className={styles.whatIDoText}>Firebase</p>

                                    <p className={styles.whatIDoSubText}>I am proficient in integrating backends using Google's Firebase 
                                    platform.</p>
                                </div>

                                <div className={styles.whatIDoCard}>
                                    <div className={styles.whatIDoIcon} style={{ background: 'rgba(231, 76, 60, 0.4)' }}>
                                        <ion-icon name="logo-html5" style={{ color: 'rgba(231, 76, 60, 1.0)' }}></ion-icon>
                                    </div>

                                    <p className={styles.whatIDoText}>HTML 5</p>

                                    <p className={styles.whatIDoSubText}>I am able to utilize HTML and the capabilities of HTML 5 to develop
                                    outstanding websites.</p>
                                </div>

                                <div className={styles.whatIDoCard}>
                                    <div className={styles.whatIDoIcon} style={{ background: 'rgba(241, 196, 15, 0.4)' }}>
                                        <ion-icon name="logo-css3" style={{ color: 'rgba(241, 196, 15, 1.0)' }}></ion-icon>
                                    </div>

                                    <p className={styles.whatIDoText}>CSS</p>

                                    <p className={styles.whatIDoSubText}>I can leverage the capabilities of CSS to style websites in a sophisticated,
                                    elegant style.</p>
                                </div>

                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={200}>
                        <div className={styles.whoAmIContainer}>
                            <p className={styles.whoAmIHeader}>Who Am I?</p>

                            <p className={styles.whoAmIBody}>I am a 16 year old developer from Seattle, Washington. I am passionate about developing wonderful user 
                            experiences and incredible UI design in all of my projects. Recently, I have been getting deeper into mobile application development. I 
                            have been developing apps using React Native, and have started getting into web development using ReactJS. I am excited to further my design 
                            and development skills by continuing to program applications and websites that are fun and challenging to create, and provide a rich user 
                            experience.</p>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <div ref={this.myWorkRef} className={styles.myWorkContainer}>
                            <p className={styles.myWorkHeader}>
                                My Work
                            </p>

                                {this.state.width > 480 ?
                                <Masonry className={styles.myWorkContent}>
                                    <ScrollAnimation className={styles.myWorkTile} style={{ width: '20%' }} animateIn="fadeIn" animateOut="fadeOut" delay={250}>
                                        <img src={PlannerApp} className={styles.myWorkImage} alt="Planner application" />

                                        <div className={styles.hoverContent}>
                                            <p className={styles.hoverContentHeader}>Planner</p>
                                            <p className={styles.hoverContentSubHeader}>iOS (coming soon)</p>

                                            <div className={styles.hoverContentDivider}></div>

                                            <p className={styles.hoverContentBody}>Mobile application developed using React Native. Features cloud syncing with Firebase, 
                                            elegant and simple UI, and an easy to use experience.</p>
                                        </div>
                                    </ScrollAnimation>

                                    <ScrollAnimation className={styles.myWorkTile} style={{ width: '35%' }} animateIn="fadeIn" animateOut="fadeOut" delay={500}>
                                        <img src={ClientechWebsite} className={styles.myWorkImage} alt="Clientech website" />

                                        <a className={styles.hoverContentLink} href="https://clientech.net" target="_blank" rel="noreferrer noopener">
                                            <div className={styles.hoverContent}>
                                                <p className={styles.hoverContentHeader}>Clientech</p>
                                                <p className={styles.hoverContentSubHeader}>Web, iOS</p>

                                                <div className={styles.hoverContentDivider}></div>

                                                <p className={styles.hoverContentBody}>Website and mobile application developed using ReactJS and React Native. Integrates multiple 
                                                backend features using Firebase.</p>
                                            </div>
                                        </a>
                                    </ScrollAnimation>

                                    <ScrollAnimation className={styles.myWorkTile} style={{ width: '25%' }} animateIn="fadeIn" animateOut="fadeOut" delay={750}>
                                        <img src={BitRocketApp} className={styles.myWorkImage} alt="Bit rocket app" />

                                        <a className={styles.hoverContentLink} href="https://apps.apple.com/us/app/bit-rocket-retro-space-game/id1451779564" target="_blank" rel="noreferrer noopener">
                                            <div className={styles.hoverContent}>
                                                <p className={styles.hoverContentHeader}>Bit Rocket</p>
                                                <p className={styles.hoverContentSubHeader}>iOS</p>

                                                <div className={styles.hoverContentDivider}></div>

                                                <p className={styles.hoverContentBody}>A pixel graphics, 2D game developed in Unity and C#. Integrates Unity Ads.</p>
                                            </div>
                                        </a>
                                    </ScrollAnimation>
                                </Masonry>
                                :
                                <div className={styles.myWorkContent}>
                                    <ScrollAnimation className={styles.myWorkTile} style={{ width: '50%' }} animateIn="fadeIn" animateOut="fadeOut" delay={250}>
                                        <img src={PlannerApp} className={styles.myWorkImage} alt="Planner application" />

                                        <div className={styles.hoverContent}>
                                            <p className={styles.hoverContentHeader}>Planner</p>
                                            <p className={styles.hoverContentSubHeader}>iOS (coming soon)</p>

                                            <div className={styles.hoverContentDivider}></div>

                                            <p className={styles.hoverContentBody}>Mobile application developed using React Native. Features cloud syncing with Firebase, 
                                            elegant and simple UI, and an easy to use experience.</p>
                                        </div>
                                    </ScrollAnimation>

                                    <ScrollAnimation className={styles.myWorkTile} style={{ width: '50%' }} animateIn="fadeIn" animateOut="fadeOut" delay={250}>
                                        <img src={ClientechWebsite} className={styles.myWorkImage} alt="Clientech website" />

                                        <a className={styles.hoverContentLink} href="https://clientech.net" target="_blank" rel="noreferrer noopener">
                                            <div className={styles.hoverContent}>
                                                <p className={styles.hoverContentHeader}>Clientech</p>
                                                <p className={styles.hoverContentSubHeader}>Web, iOS</p>

                                                <div className={styles.hoverContentDivider}></div>

                                                <p className={styles.hoverContentBody}>Website and mobile application developed using ReactJS and React Native. Integrates multiple 
                                                backend features using Firebase.</p>
                                            </div>
                                        </a>
                                    </ScrollAnimation>

                                    <ScrollAnimation className={styles.myWorkTile} style={{ width: '50%' }} animateIn="fadeIn" animateOut="fadeOut" delay={250}>
                                        <img src={BitRocketApp} className={styles.myWorkImage} alt="Bit rocket app" />

                                        <a className={styles.hoverContentLink} href="https://apps.apple.com/us/app/bit-rocket-retro-space-game/id1451779564" target="_blank" rel="noreferrer noopener">
                                            <div className={styles.hoverContent}>
                                                <p className={styles.hoverContentHeader}>Bit Rocket</p>
                                                <p className={styles.hoverContentSubHeader}>iOS</p>

                                                <div className={styles.hoverContentDivider}></div>

                                                <p className={styles.hoverContentBody}>A pixel graphics, 2D game developed in Unity and C#. Integrates Unity Ads.</p>
                                            </div>
                                        </a>
                                    </ScrollAnimation>
                                </div>
                                }
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <div className={styles.contactBox}>
                            <p className={styles.contactHeader}>Let's talk about any projects, ideas, or questions:</p>

                            <a href="mailto:contact@jakeshort.dev" className={styles.contactEmail}>contact@jakeshort.dev</a>
                        </div>
                    </ScrollAnimation>

                </div>
            </React.Fragment>
        )
    }
}