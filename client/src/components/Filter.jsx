import React from "react";
import { useDispatch } from "react-redux";

import {
  returnBackup,
} from "../redux/actions";

const Filter = (props) => {
  const dispatch = useDispatch();

  return (
    <li
      onClick={async () => {
        props.setCurrentPage(1);
        dispatch(returnBackup());
      }}
    >
      {props.name}
    </li>
  );
};

export default Filter;