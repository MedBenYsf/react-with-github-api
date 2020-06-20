import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/partials/Navbar';
import Users from './components/users/Users';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="container mt-2">
					<Switch>
						<Route exact path="/users" component={Users} />
						<Route exact component={Users} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
