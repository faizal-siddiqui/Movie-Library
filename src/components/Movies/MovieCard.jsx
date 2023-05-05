import React from "react";
import styles from "./MovieCard.module.css";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { Flex } from "../StyledComponents/styles";
const MovieCard = ({ movie }) => {
  return (
    <div className={styles.movieCard}>
      <Flex>
        <div>
          <FiEdit />
        </div>
        <div>
          <MdOutlineDelete />
        </div>
      </Flex>
      <img
        src={movie.Poster}
        alt={movie.Title}
      />
      <div className={styles.description}>
        <h2>{movie.Title}</h2>
        <p>{movie.Genre}</p>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
