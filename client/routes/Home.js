import React from 'react';
import {Button, Grid, Row, Col, Image, Well, Label} from 'react-bootstrap';

import FontAwesome from '../components/FontAwesome';

/**
 * A movie poster containing its image, name, description, etc.
 * Props:
 * 	movie {Object}     a movie object
 */
let MoviePoster = React.createClass({
    /**
       * Creates a poster element for a movie containing its image, name,
       * 	description, etc.
       * @return {<Col>}       a React element
     */
    render: function() {
        let movie = this.props.movie;

        let movieImage = `img/posters/${movie.image}`;

        let videoButton;
        if (movie.video) {
            let size = movie.featured ? "large" : "";
            videoButton = <Button bsStyle="danger" bsSize={size} block href={movie.video} target="_blank">
                <FontAwesome icon="play"></FontAwesome> &nbsp;
                Watch
            </Button>
        }

        if (movie.featured) {
            return <Col key={movie.name} xs={12} md={12}>
              <Well>
                <Grid fluid>
                  <Row>
                    <Col xs={12} sm={3}>
                      <img src={movieImage} alt={movie.name} className="img-responsive centered" responsive/>
                    </Col>
                    <Col xs={12} sm={9}>
                      <div className="">
                        <h3>{movie.name}</h3>

                        <h5>
                            <span className="text-danger">
                                <FontAwesome icon="star"></FontAwesome>
                                <FontAwesome icon="star"></FontAwesome>
                                <FontAwesome icon="star"></FontAwesome>
                                <FontAwesome icon="star"></FontAwesome>
                                <FontAwesome icon="star"></FontAwesome>
                            </span>
                            &nbsp; &nbsp;
                            <Label>{movie.year}</Label>
                        </h5>

                        <p className="lead">{movie.description}</p>
                        {videoButton}
                      </div>
                    </Col>
                  </Row>
                </Grid>
              </Well>
            </Col>;
        }
        else {
            // use a standard small poster
            return <Col key={movie.name} xs={6} md={3}>
                <div className="thumbnail movie-poster">
                  <img src={movieImage} alt={movie.name} />
                  <div className="caption">
                    <div className="movie-details">
                      <h4>{movie.name}</h4>
                      <p className="hidden-xs white-text">{movie.description}</p>
                      {videoButton}
                    </div>
                  </div>
              </div>
            </Col>;
        }
    }
})

var Home = React.createClass({
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
        name: "Star Wars: The Pforz Awakens",
        description: `Three decades after the defeat of the Quadrangle Empire, a new threat arises. The
                  River Order attempts to rule the College and only a ragtag group of heroes can stop them,
                  along with the help of the Pfresistance.`,
        category: categories.NEW_ARRIVAL,
        image: "the-pforz-awakens.png",
        year: 2016,
        featured: true
      }, {
        name: "The Pfellowship of the Ring",
        description: `A meek Quadling and seven blockmates set out on a journey to destroy the
                One Ring and the Dark Lord Adams.`,
        category: categories.POPULAR,
        image: "pfellowship-of-the-ring.png",
        featured: false
      }, {
        name: "Pfinding Nemo",
        description: `After his son is captured in the Charles River Reef and taken to Mather House, a
                timid clownfish sets out on a journey to bring him Pfohome.`,
        category: categories.POPULAR,
        image: "pfinding-nemo.png",
        featured: false
      }, {
        name: "Back to the Pfuture",
        description: `A young man is accidentally sent thirty years into the past in a time-traveling
                Quad Shuttle invented by his friend, Dr. Carl Pforzheimer, and must make sure his
                college-age parents unite in order to save his own existence.`,
        category: categories.POPULAR,
        image: "back-to-the-pfuture.png",
        featured: false
      }, {
        name: "Skypfall",
        description: `Bond's loyalty to PF is tested when her past comes back to haunt her. Whilst
                PfI6 comes under attack, 007 must track down and destroy the threat, no matter how
                personal the cost.`,
        category: categories.POPULAR,
        image: "skypfall.png",
        featured: false
      }, {
        name: "Pfrozen",
        description: `When the newly crowned Queen Elsa accidentally uses her power to turn things into
                ice to curse the Quad in infinite winter, her sister, Anna, teams up with a Pfoho man,
                his playful polar bear, and a snowman to change the weather condition.`,
        category: categories.RECENT,
        image: "pfrozen.png",
        video: "https://www.youtube.com/watch?v=uKPrkR1wkfA",
        year: 2014,
        featured: true
      }
    ];

    // {
    //   name: "Pforrest Gump",
    //   description: `Pforrest Gump, while not intelligent, has accidentally been present at many
    //       historic moments, but his true love, Pfoho, eludes him.`,
    //   category: categories.POPULAR,
    //   image: "pforrest-gump.png"
    // },

    /**
     * Given a list of movies and a category, reutrns posters of movies in
     * that category.
     */
    let postersByCategory = (movies, category) => movies
      .filter(movie => movie.category == category)
      .map(movie => <MoviePoster movie={movie} />);

    let posters = {
      popular: postersByCategory(movies, categories.POPULAR),
      recent: postersByCategory(movies, categories.RECENT),
      newArrivals: postersByCategory(movies, categories.NEW_ARRIVAL)
    };

    let wrapInGrid = (posters) => <Grid fluid>
      <Row>
        {posters}
      </Row>
    </Grid>;

    return (
      <div>
        <h3>New Releases</h3>
        {wrapInGrid(posters.newArrivals)}

        <h3>Popular on Netpflix</h3>
        {wrapInGrid(posters.popular)}

        <h3>Recently Viewed</h3>
        {wrapInGrid(posters.recent)}

      </div>
    );
  }
});

module.exports = Home;
