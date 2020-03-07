import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage';
import PostsListPage from './Pages/BlogPagesContainer/PostsListPage/PostsListPage';
import BlogPostPage from './Pages/BlogPagesContainer/BlogPostPage/BlogPostPage';

import PlannerAppPage from './Pages/ProjectPages/PlannerAppPage/PlannerAppPage';

export default function App() {
    return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/plannerapp/:parameter" component={PlannerAppPage} />
				<Route exact path="/plannerapp" component={PlannerAppPage} />

				<Route exact path="/blog" component={PostsListPage} />
				<Route exact path="/blog/post/:id" component={BlogPostPage} />
			</Switch>
		</Router>
    );
}