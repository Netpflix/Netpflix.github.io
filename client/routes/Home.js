var React = require('react');
import { Button } from 'react-bootstrap';

var Home = React.createClass({
	render: function() {
		return (
			<p>
				Home Page
				<Button bsStyle="primary">Test</Button>
			</p>
		);
	}
});

module.exports = Home;
