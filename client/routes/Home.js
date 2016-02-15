var React = require('react');
import { Button, Grid, Row, Col, Image } from 'react-bootstrap';

var Home = React.createClass({
	render: function() {

		let movies = [
			{ name: "pfellowship-of-the-ring.png" },
			{ name: "pfinding-nemo.png" },
			{ name: "pforrest-gump.png" },
			{ name: "skypfall.png" },
			{ name: "the-pforz-awakens.png" }
		];

		let movieImages = movies.map(movie => {
			let movieImage = `img/posters/${movie.name}`;
			return <Col key={movie.name} xs={6} md={3} >
				<Image src={movieImage} responsive />
			</Col>;
		});

		return (
			<div>
				<h4>Popular on Netpflix</h4>

				<Grid>
					<Row>
						{movieImages}
					</Row>
				</Grid>
			</div>
		);
	}
});

module.exports = Home;
