var React = require('react');
import {
  Button,
  Grid,
  Row,
  Col,
  Image,
  Thumbnail
} from 'react-bootstrap';

var Home = React.createClass({
  render: function() {

    let movies = [
      {
        name: "The Pfellowship of the Ring",
        description: "A meek Quadling and seven companions set out on a journey to destroy the One Ring and the Dark Lord Adams.",
        image: "pfellowship-of-the-ring.png"
      }, {
        name: "Pfinding Nemo",
        description: "",
        image: "pfinding-nemo.png"
      }, {
        name: "Pforrest Gump",
        description: "",
        image: "pforrest-gump.png"
      }, {
        name: "Skypfall",
        description: "",
        image: "skypfall.png"
      }, {
        name: "Star Wars: The Pforz Awakens",
        description: "",
        image: "the-pforz-awakens.png"
      }, {
        name: "Back to the Pfuture",
        description: "",
        image: "back-to-the-pfuture.png"
      }, {
        name: "Pfrozen",
        description: "",
        image: "pfrozen.jpg"
      }
    ];

    let movieImages = movies.map(movie => {
      let movieImage = `img/posters/${movie.image}`;
      return <Col key={movie.name} xs={6} md={3}>

        <Thumbnail src={movieImage} alt={movie.name} className="movie-poster">
          <div className="movie-details">
            <h4>{movie.name}</h4>
            <p>{movie.description}</p>
          </div>
        </Thumbnail>
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
