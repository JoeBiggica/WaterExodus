import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Link, Switch } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Home from './pages/home';

import './scss/global.scss';

export default class App extends Component {

	render() {
		const header_props = {
			logo: {
				path: '/'
			},
			nav_items: [
				{
					name: 'About',
					path: '/#/about',
				},
				{
					name: 'Expertise',
					path: '/#/expertise',
				},
				{
					name: 'Contact Us',
					path: '/#/contact',
				}		
			],
			current_page: '/'+window.location.hash
		}

		return (
			<HashRouter>
				<div>
					<Switch>
						<Route path='/' exact component={Home} />
					</Switch>
					<Footer />
				</div>
			</HashRouter>
		)
	}
}

ReactDOM.render(
	<App />, document.getElementById('app-container')
);