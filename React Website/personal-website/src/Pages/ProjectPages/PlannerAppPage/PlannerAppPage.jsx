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
            param: ""
        }
    }

    componentWillMount() {
        let param = this.props.match.params.parameter;
        if(param === 'privacy') {
            this.setState({ param: param })
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.param !== 'privacy' ?
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
                :
                <div className={styles.mainContentContainer}>
                    <NavigationBar onPortfolioClick={() => this.props.history.push("/")} />

                    <div className={styles.headerContainer}>
                        <p className={styles.headerText}>Tiny Planner</p>
                        <p className={styles.headerSubText}>Privacy Policy</p>
                    </div>

                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <div className={styles.privacyPolicyContainer}>

                            <div className={styles.privacyPolicyRowContainer}>
                                <p className={styles.privacyPolicySectionHeader}>SUMMARY</p>

                                <p className={styles.privacyPolicySectionSubHeader}>
                                    Your privacy is important to us. We only collect data that is relevant to operating and improving our 
                                    services. You can read a detailed and transparent description of the data we collect, and the usage of 
                                    that information below.
                                </p>
                            </div>

                            <div className={styles.privacyPolicyRowContainer}>
                                <p className={styles.privacyPolicySectionHeader}>OVERVIEW</p>
                                <p className={styles.privacyPolicySectionSubHeader}>This privacy policy was last updated on&nbsp;
                                <span style={{fontWeight: 600}}>February 21, 2020</span>.</p>

                                <div className={styles.privacyPolicyBody}>This Privacy Policy describes how Tiny Planner collects and uses 
                                your personal information. Throughout this Privacy Policy, the terms&nbsp;
                                <span style={{fontWeight: 600}}>We, Our and Us&nbsp;</span>will be used to refer to Tiny Planner, the entity
                                that collects and processes your information.

                                <br /><br />
                                By using our services, you consent to the use of your personal information, as outlined in this Privacy Policy.
                                If you would like to revoke consent, please contact us to have your account deleted.
                                </div>
                            </div>

                            <div className={styles.privacyPolicyRowContainer}>
                                <p className={styles.privacyPolicySectionHeader}>INFORMATION WE COLLECT</p>

                                <div className={styles.privacyPolicyBody}>
                                    <ol className={styles.ol}>
                                        
                                        <li className={styles.li}>
                                            <span className={styles.liBold}>Usage and device information.</span>

                                            <ol className={styles.ol} style={{ paddingLeft: '30px' }}>
                                                <li className={styles.li}>
                                                    <span className={styles.liBold}>Device information.</span>&nbsp;
                                                    We may collect information about your device, including information such as details  
                                                    about the platform you are using, IP address, and other relevant information. 
                                                    We may also collect analytical data relating to your device.
                                                </li>

                                                <li className={styles.li}>
                                                    <span className={styles.liBold}>Usage information.</span>&nbsp;
                                                    We may collect information about your usage of our services, such as how you interact 
                                                    with our service, what elements of our service you use, and other relevant information.
                                                    We may also collect analytical data relating to your usage.
                                                </li>
                                            </ol>
                                        </li>

                                    </ol>
                                </div>
                            </div>

                            <div className={styles.privacyPolicyRowContainer}>
                                <p className={styles.privacyPolicySectionHeader}>HOW WE COLLECT THIS INFORMATION</p>

                                <div className={styles.privacyPolicyBody}>When you use our services, contact us, purchase a product
                                from us (including through in-app purchases and/or any other payment methods), or through any other interaction
                                with us, we may collect data from you.</div>
                            </div>

                            <div className={styles.privacyPolicyRowContainer}>
                                <p className={styles.privacyPolicySectionHeader}>USAGE OF INFORMATION</p>

                                <div className={styles.privacyPolicyBody}>
                                    <ol className={styles.ol}>
                                        
                                        <li className={styles.li}>
                                            <span className={styles.liBold}>Improving our services.</span>&nbsp;
                                            We may use your information to create, improve, and manage our products, services, and advertising.
                                        </li>

                                    </ol>
                                </div>
                            </div>

                            <div className={styles.privacyPolicyRowContainer}>
                                <p className={styles.privacyPolicySectionHeader}>THIRD PARTIES</p>

                                <div className={styles.privacyPolicyBody}>
                                    We do not share your data with any third parties. However, data may be collected by the platform on which 
                                    you use the app, including Apple and/or Google.
                                </div>
                            </div>

                            <div className={styles.privacyPolicyRowContainer}>
                                <p className={styles.privacyPolicySectionHeader}>PROTECTION OF INFORMATION</p>

                                <div className={styles.privacyPolicyBody}>
                                    Your personal information is only accessible by a limited number of people who have special 
                                    access to the databases containing such information.
                                </div>
                            </div>

                        </div>
                    </ScrollAnimation>
                </div>
                }
            </React.Fragment>
        )
    }
}





/** NEW PRIVACY POLICY, FOR INTEGRATION OF FIREBASE BACKEND */
/**
<div className={styles.privacyPolicyContainer}>

                        <div className={styles.privacyPolicyRowContainer}>
                            <p className={styles.privacyPolicySectionHeader}>SUMMARY</p>

                            <p className={styles.privacyPolicySectionSubHeader}>
                                Your privacy is important to us. We only collect data that is relevant to operating and improving our 
                                services. You can read a detailed and transparent description of the data we collect, and the usage of 
                                that information below.
                            </p>
                        </div>

                        <div className={styles.privacyPolicyRowContainer}>
                            <p className={styles.privacyPolicySectionHeader}>OVERVIEW</p>
                            <p className={styles.privacyPolicySectionSubHeader}>This privacy policy was last updated on&nbsp;
                            <span style={{fontWeight: 600}}>February 21, 2020</span>.</p>

                            <div className={styles.privacyPolicyBody}>This Privacy Policy describes how Tiny Planner collects and uses 
                            your personal information. Throughout this Privacy Policy, the terms&nbsp;
                            <span style={{fontWeight: 600}}>We, Our and Us&nbsp;</span>will be used to refer to Tiny Planner, the entity
                            that collects and processes your information.

                            <br /><br />
                            By using our services, you consent to the use of your personal information, as outlined in this Privacy Policy.
                            If you would like to revoke consent, please contact us to have your account deleted.
                            </div>
                        </div>

                        <div className={styles.privacyPolicyRowContainer}>
                            <p className={styles.privacyPolicySectionHeader}>INFORMATION WE COLLECT</p>

                            <div className={styles.privacyPolicyBody}>
                                <ol className={styles.ol}>
                                    
                                    <li className={styles.li}>
                                        <span className={styles.liBold}>Usage and device information.</span>

                                        <ol className={styles.ol} style={{ paddingLeft: '30px' }}>
                                            <li className={styles.li}>
                                                <span className={styles.liBold}>Device information.</span>&nbsp;
                                                We may collect information about your device, including information such as details  
                                                about the platform you are using, IP address, and other relevant information. 
                                                We may also collect analytical data relating to your device.
                                            </li>

                                            <li className={styles.li}>
                                                <span className={styles.liBold}>Usage information.</span>&nbsp;
                                                We may collect information about your usage of our services, such as how you interact 
                                                with our service, what elements of our service you use, and other relevant information.
                                                We may also collect analytical data relating to your usage.
                                            </li>
                                        </ol>
                                    </li>

                                </ol>
                            </div>
                        </div>

                        <div className={styles.privacyPolicyRowContainer}>
                            <p className={styles.privacyPolicySectionHeader}>HOW WE COLLECT THIS INFORMATION</p>

                            <div className={styles.privacyPolicyBody}>When you use our services, contact us, purchase a product
                            from us (including through in-app purchases and/or any other payment methods), or through any other interaction
                            with us, we may collect data from you.</div>
                        </div>

                        <div className={styles.privacyPolicyRowContainer}>
                            <p className={styles.privacyPolicySectionHeader}>USAGE OF INFORMATION</p>

                            <div className={styles.privacyPolicyBody}>
                                <ol className={styles.ol}>
                                    
                                    <li className={styles.li}>
                                        <span className={styles.liBold}>Improving our services.</span>&nbsp;
                                        We may use your information to create, improve, and manage our products, services, and advertising.
                                    </li>

                                    <li className={styles.li}>
                                        <span className={styles.liBold}>Sending emails.</span>&nbsp;
                                        We may send you important information about our products and services, such as 
                                        updates to our terms and conditions and privacy policy. We may also send emails about 
                                        purchases that you make. If you contact us, we may respond to you through the email 
                                        address you provide.
                                    </li>

                                    <li className={styles.li}>
                                        <span className={styles.liBold}>Processing your payments.</span>&nbsp;
                                        We may use your information to process payments, such as  your 
                                        subscriptions.
                                    </li>

                                </ol>
                            </div>
                        </div>

                        <div className={styles.privacyPolicyRowContainer}>
                            <p className={styles.privacyPolicySectionHeader}>THIRD PARTIES</p>

                            <div className={styles.privacyPolicyBody}>
                                <ol className={styles.ol}>
                                    
                                    <li className={styles.li}>
                                        <span className={styles.liBold}>Google.</span>&nbsp;
                                        <ol className={styles.ol} style={{ paddingLeft: '30px' }}>
                                            <li className={styles.li}>
                                                <span className={styles.liBold}>Firebase Authentication.</span>&nbsp;
                                                To create and manage your login information, we use Firebase Authentication.
                                            </li>

                                            <li className={styles.li}>
                                                <span className={styles.liBold}>Firebase Firestore.</span>&nbsp;
                                                To store your personal information, along with non-personal information, we use 
                                                Firebase Firestore.
                                            </li>

                                            <li className={styles.li}>
                                                <span className={styles.liBold}>Google Analytics.</span>&nbsp;
                                                We use Google Analytics to track analytical data about 
                                                our users. You can read about how Google uses data here: <a style={{ color: 'rgba(255, 255, 255, 0.5)' }} target="_blank" rel="noopener noreferrer" href='https://www.google.com/policies/privacy/partners/'>https://www.google.com/policies/privacy/partners/</a>
                                            </li>

                                            <li className={styles.li}>
                                                <span className={styles.liBold}>SendGrid.</span>&nbsp;
                                                We use SendGrid to send emails to you, as outlined in the Usage of Information 
                                                section above.
                                            </li>
                                        </ol>
                                    </li>

                                </ol>
                            </div>
                        </div>

                        <div className={styles.privacyPolicyRowContainer}>
                            <p className={styles.privacyPolicySectionHeader}>PROTECTION OF INFORMATION</p>

                            <div className={styles.privacyPolicyBody}>
                                Your personal information is only accessible by a limited number of people who have special 
                                access to the databases containing such information. In addition to this, our website is 
                                protected with Secure Socket Layer (SSL) encryption.
                            </div>
                        </div>

                    </div>
*/