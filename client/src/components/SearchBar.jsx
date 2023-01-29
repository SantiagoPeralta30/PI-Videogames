import React from "react";
import { useDispatch } from "react-redux";
import { getVideoGameByName } from "../redux/actions";
import { useState } from "react";

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
        placeholder="Search by name..."
        type="text"
        onChange={handleChange}
        value={name}
      />
      <input type="submit" />
    </form>
  );
};

export default Searchbar;