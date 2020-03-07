import React from 'react';
import styles from './BlogPostPage.module.css';

// Import components
import NavigationBar from '../../../Components/NavigationBar/NavigationBar';

export default class BlogPostPage extends React.Component {
    render() {
        let BlogPost = null;

        try {
            BlogPost = require('../BlogPosts/' + this.props.match.params.id + '/BlogPost').default;
        } catch {
            this.props.history.push('/blog');
        }

        return (
            <React.Fragment>
                <div className={styles.mainContentContainer}>
                    <NavigationBar onPortfolioClick={this.scrollToMyWork} />

                    {/** Show blog post here */}
                    <div className={styles.blogPostContainer}>
                        {BlogPost ?
                        <BlogPost /> : null}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}