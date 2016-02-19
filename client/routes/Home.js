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
        description: "After his son is captured in the Charles River Reef and taken to Mather House, a timid clownfish sets out on a journey to bring him Pfohome.",
        image: "pfinding-nemo.png"
      }, {
        name: "Pforrest Gump",
        description: "Pforrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Pfoho, eludes him.",
        image: "pforrest-gump.png"
      }, {
        name: "Skypfall",
        description: "Bond's loyalty to PF is tested when her past comes back to haunt her. Whilst PfI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.",
        image: "skypfall.png"
      }, {
        name: "Star Wars: The Pforz Awakens",
        description: "Three decades after the defeat of the Quadrangle Empire, a new threat arises. The River Order attempts to rule the College and only a ragtag group of heroes can stop them, along with the help of the Pfresistance.",
        image: "the-pforz-awakens.png"
      }, {
        name: "Back to the Pfuture",
        description: "A young man is accidentally sent thirty years into the past in a time-traveling Quad Shuttle invented by his friend, Dr. Carl Pforzheimer, and must make sure his college-age parents unite in order to save his own existence.",
        image: "back-to-the-pfuture.png"
      }, {
        name: "Pfrozen",
        description: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse the Quad in infinite winter, her sister, Anna, teams up with a Pfoho man, his playful polar bear, and a snowman to change the weather condition.",
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
