import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css';

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scaleY: 0,

            isOverHoverContent: false
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={styles.mainContentContainer}>
                    <div className={styles.navigationBarContainer}>
                        <div className={styles.rightLinksContainer}>
                            <Link to="/" className={styles.linkText}>HOME</Link>

                            <p className={styles.linkText} /**onMouseEnter={() => this.setState({ scaleY: 1 })} onMouseLeave={() =>  this.setState({ scaleY: 0 })}*/ onClick={this.props.onPortfolioClick}>PORTFOLIO</p>
                        </div>
                    </div>

                    {/**
                    <div className={styles.hoverContent}
                    onMouseEnter={() => this.setState({ isOverHoverContent: true })}
                    onMouseLeave={() => this.setState({ isOverHoverContent: false })}
                    style={{ transform: `scaleX(${this.state.isOverHoverContent === false ? this.state.scaleY : 1})` }}>
                        <div className={styles.innerContent}>
                            <p>Hello!</p>
                        </div>
                    </div>
                    */}
                </div>
            </React.Fragment>
        )
    }
}