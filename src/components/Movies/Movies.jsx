import React, { useEffect } from "react";
import styles from "./Movies.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getMovies } from "../../Redux/movies.actions";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const Movies = () => {
  const dispatch = useDispatch();

  //* accessing movies from redux state
  const { movies } = useSelector((state) => state);

  useEffect(() => {
    //* calling the getMovie to get all the movie in the mounting phase
    dispatch(getMovies("", toast));
  }, []);

  return (
    <div className={styles.movies}>
      <div className={styles.movieContainer}>
        {/* Mapping all the movies */}
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
