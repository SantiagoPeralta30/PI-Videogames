import React from "react";
import { useDispatch } from "react-redux";
import { getVideoGameByName } from "../redux/actions";
import { useState } from "react";
import styles from "../styles/SearchBar.module.css";

const Searchbar = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getVideoGameByName(name));
    props.setCurrentPage(1);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        placeholder="Search by name..."
        type="text"
        onChange={handleChange}
        value={name}
      />
      <input className={styles.invisible} type="submit" />
    </form>
  );
};

export default Searchbar;