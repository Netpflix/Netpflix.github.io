import React from 'react';
import Router from 'react-router';

var Header = React.createClass({
	render: function() {
		return (
			<div className="page-header">
				<h1>Netpflix</h1>
			</div>
		);
	}
});

var PageNav = React.createClass({
	render: function() {
		return (
			<div className="nav">
				<Router.Link to="home">Home</Router.Link>
				&nbsp; | &nbsp;
				<Router.Link to="about">About</Router.Link>
			</div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="container">
				<Header />
				<PageNav />
				<Router.RouteHandler/>
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
	React.render(<Handler/>, document.body);
});
