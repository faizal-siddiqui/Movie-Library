import React, { useEffect } from "react";
import styles from "./Movies.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getMovies } from "../../Redux/movies.actions";
import { useDispatch } from "react-redux";

const Movies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //* calling the getMovie to get all the movie in the mounting phase
    dispatch(getMovies("Language=English", toast));
  }, []);
  return <div>Movies</div>;
};

export default Movies;
