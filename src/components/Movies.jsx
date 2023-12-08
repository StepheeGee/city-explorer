import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Movies = ({ movies }) => {
  return (
    <div className="movies-container">
      <h2 className="movie-results">Top 20 {movies[0]?.city} Movies</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {movies.map((movie, index) => (
          <Col key={index}>
            <Card className="card text-white bg-dark mb-3" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={movie.image_url} alt={movie.title} className="movie-img" />
              <Card.Body className="movie-details">
                <Card.Title>{movie.title}</Card.Title>
                {/* <Card.Text>{movie.overview}</Card.Text> */}
                <ListGroup>
                  <ListGroup.Item>Released on: {movie.released_on}</ListGroup.Item>
                  <ListGroup.Item>Popularity: {movie.popularity}</ListGroup.Item>
                  <ListGroup.Item>Total votes: {movie.total_votes}</ListGroup.Item>
                  <ListGroup.Item>Average votes: {movie.average_votes}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Movies;
