import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage';
import PlannerAppPage from './Pages/ProjectPages/PlannerAppPage/PlannerAppPage';

export default function App() {
    return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/plannerapp" component={PlannerAppPage} />
			</Switch>
		</Router>
    );
}