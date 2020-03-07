import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PostsListPage.module.css';
import Highlight from 'react-highlighter';

// Import components
import NavigationBar from '../../../Components/NavigationBar/NavigationBar';

// Import blog posts
import { FeaturedItems } from '../BlogPosts/PostsData';

export default class PostsListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBarValue: '',
        }
    }

    updateSearch(e) {
        this.setState({ searchBarValue: e.target.value });
    }

    render() {
        var featuredItems = FeaturedItems.map((item, index) => {
            return (
                <Link key={index} to={'/blog/post/' + item.postFileName} style={{ textDecoration: 'none' }}>
                    <div className={styles.postCard}>
                        <img src={require('../BlogThumbnails/' + item.thumbnailFileName)} className={styles.postCardThumbnail} alt="Thumbnail" />

                        <p className={styles.postCardTitle}>{item.title}</p>
                        <p className={styles.postCardDescription}>{item.description}</p>
                    </div>
                </Link>
            )
        });

        var filteredItemsArray = FeaturedItems.filter((item) => {
            if(item.title.toLowerCase().includes(this.state.searchBarValue.toLowerCase()) || item.tags.find(a => a.toLowerCase().includes(this.state.searchBarValue.toLowerCase()) )) {
                return true;
            }
            else {
                return false;
            }
        })

        var filteredItems = filteredItemsArray.map((item, index) => {
            return (
                <Link key={index} to={'/blog/post/' + item.postFileName} className={styles.postCardLink}>
                    <div className={styles.postCard}>
                        <img src={require('../BlogThumbnails/' + item.thumbnailFileName)} className={styles.postCardThumbnail} alt="Thumbnail" />

                        <Highlight className={styles.postCardTitle} matchElement="mark" matchStyle={{ background: 'rgba(255, 255, 255, 0.2)', color: '#ffffff' }} search={this.state.searchBarValue}>{item.title}</Highlight>
                        <p className={styles.postCardDescription}>{item.description}</p>
                    </div>
                </Link>
            )
        })

        return (
            <React.Fragment>
                <div className={styles.mainContentContainer}>
                    <NavigationBar onPortfolioClick={this.scrollToMyWork} />

                    {/** Show all posts here */}
                    <div className={styles.postCardsContainer}>
                        <input type="text" placeholder="Search blog posts..." className={styles.searchBar} value={this.state.searchBarValue} onChange={(e) => this.updateSearch(e)} />

                        <div className={styles.postCardsContainerInner}>

                            {this.state.searchBarValue.length > 0 ? filteredItems : featuredItems}
                            {this.state.searchBarValue.length > 0 && filteredItemsArray.length < 1 ? <p className={styles.noResultsText}>No results for '{this.state.searchBarValue}'.</p> : null}

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}