import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';

import {Navbar, Nav, NavItem} from 'react-bootstrap';

var Header = React.createClass({
	render: function() {
		return (
			<Navbar inverse>
		      <Navbar.Header>
		        <Navbar.Brand>
		          <a href="/">
					  <img alt="Netpflix" src="img/netpflix-small.png" className="brand-img" />
		          </a>
		        </Navbar.Brand>
		        <Navbar.Toggle />
		      </Navbar.Header>
		      <Navbar.Collapse>
		        <Nav pullLeft>
		          <NavItem eventKey={1} href="#" className="active">Browse</NavItem>
		        </Nav>
				<Nav pullRight>
					<NavItem eventKey={2} href="http://pfoho.harvard.edu">Home</NavItem>
				</Nav>
		      </Navbar.Collapse>
		    </Navbar>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				<div className="container">
					<Router.RouteHandler/>
				</div>
			</div>
		);
	}
});

let pages = {
	Home: require('../routes/Home'),
	About: require('../routes/About')
};

let routes = (
	<Router.Route name="app" path="/" handler={App}>
		<Router.Route name="home" path="/" handler={pages.Home}/>
		<Router.Route name="about" path="/about" handler={pages.About}/>
		<Router.DefaultRoute handler={pages.Home}/>
	</Router.Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
	ReactDOM.render(<Handler/>, document.body);
});
