import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css';

export default class NavigationBar extends React.Component {
    render() {
        return (
            <div className={styles.navigationBarContainer}>
                <div className={styles.rightLinksContainer}>
                    <Link to="/" className={styles.linkText}>HOME</Link>

                    <p className={styles.linkText} onClick={this.props.onPortfolioClick}>PORTFOLIO</p>
                </div>
            </div>
        )
    }
}