import React from 'react';
import {Button, Grid, Row, Col, Image} from 'react-bootstrap';

var Home = React.createClass({
  /**
     * Creates a poster element for a movie containing its image, name,
     * 	description, etc.
     * @param  {Object} movie
     * @return {<Col>}       a React element
     */
  posterForMovie: function(movie) {
    let movieImage = `img/posters/${movie.image}`;

    let videoButton;

    if (movie.video) {
        videoButton = <Button bsStyle="danger">Watch</Button>
    }

    return <Col key={movie.name} xs={6} md={3}>
        <a href={movie.video} target="_blank" className="thumbnail movie-poster">
          <img src={movieImage} alt={movie.name} />
          <div className="caption">
            <div className="movie-details">
              <h4>{movie.name}</h4>
              <p className="hidden-xs">{movie.description}</p>
              {videoButton}
            </div>
          </div>
      </a>
    </Col>;
  },

  render: function() {
    // Different states of movies: recently watched, currently popular, new
    // arrivals, etc.
    const categories = {
      POPULAR: "popular",
      RECENT: "recent",
      NEW_ARRIVAL: "new"
    };

    let movies = [
      {
        name: "The Pfellowship of the Ring",
        description: `A meek Quadling and seven companions set out on a journey to destroy the
            One Ring and the Dark Lord Adams.`,
        category: categories.POPULAR,
        image: "pfellowship-of-the-ring.png"
      }, {
        name: "Pfinding Nemo",
        description: `After his son is captured in the Charles River Reef and taken to Mather House, a
            timid clownfish sets out on a journey to bring him Pfohome.`,
        category: categories.POPULAR,
        image: "pfinding-nemo.png"
      }, {
        name: "Pforrest Gump",
        description: `Pforrest Gump, while not intelligent, has accidentally been present at many
            historic moments, but his true love, Pfoho, eludes him.`,
        category: categories.POPULAR,
        image: "pforrest-gump.png"
      }, {
        name: "Skypfall",
        description: `Bond's loyalty to PF is tested when her past comes back to haunt her. Whilst
            PfI6 comes under attack, 007 must track down and destroy the threat, no matter how
            personal the cost.`,
        category: categories.POPULAR,
        image: "skypfall.png"
      }, {
        name: "Star Wars: The Pforz Awakens",
        description: `Three decades after the defeat of the Quadrangle Empire, a new threat arises. The
            River Order attempts to rule the College and only a ragtag group of heroes can stop them,
            along with the help of the Pfresistance.`,
        category: categories.NEW_ARRIVAL,
        image: "the-pforz-awakens.png"
      }, {
        name: "Back to the Pfuture",
        description: `A young man is accidentally sent thirty years into the past in a time-traveling
            Quad Shuttle invented by his friend, Dr. Carl Pforzheimer, and must make sure his
            college-age parents unite in order to save his own existence.`,
        category: categories.POPULAR,
        image: "back-to-the-pfuture.png"
      }, {
        name: "Pfrozen",
        description: `When the newly crowned Queen Elsa accidentally uses her power to turn things into
            ice to curse the Quad in infinite winter, her sister, Anna, teams up with a Pfoho man,
            his playful polar bear, and a snowman to change the weather condition.`,
        category: categories.RECENT,
        image: "pfrozen.jpg",
        video: "https://www.youtube.com/watch?v=uKPrkR1wkfA"
      }
    ];

    /**
     * Given a list of movies and a category, reutrns posters of movies in
     * that category.
     */
    let postersByCategory = (movies, category) => movies
      .filter(movie => movie.category == category)
      .map(this.posterForMovie);

    let posters = {
      popular: postersByCategory(movies, categories.POPULAR),
      recent: postersByCategory(movies, categories.RECENT),
      newArrivals: postersByCategory(movies, categories.NEW_ARRIVAL)
    };

    let wrapInGrid = (posters) => <Grid>
      <Row>
        {posters}
      </Row>
    </Grid>;

    return (
      <div>
        <h4>New Releases</h4>
        {wrapInGrid(posters.newArrivals)}

        <h4>Popular on Netpflix</h4>
        {wrapInGrid(posters.popular)}

        <h4>Recently Viewed</h4>
        {wrapInGrid(posters.recent)}

      </div>
    );
  }
});

module.exports = Home;
