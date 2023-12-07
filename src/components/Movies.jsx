import React from 'react';

const Movies = ({ movies }) => {
  return (
    <div className="movies-container">
      <h2>Movies for {movies[0]?.city}</h2>
      <div className="movies-list">
        {movies.map((movie, index) => (
          <div key={index} className="movie-item">
            <img src={movie.image_url} alt={movie.title} />
            <div className="movie-details">
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              <p>Released on: {movie.released_on}</p>
              <p>Popularity: {movie.popularity}</p>
              <p>Total votes: {movie.total_votes}</p>
              <p>Average votes: {movie.average_votes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
