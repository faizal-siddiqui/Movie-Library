import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <h1>logo</h1>
      <input
        type="text"
        name="title"
        placeholder="Search movies here"
      />
    </header>
  );
};

export default Navbar;
