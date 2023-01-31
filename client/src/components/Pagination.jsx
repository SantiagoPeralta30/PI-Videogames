import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Pagination.module.css";
import Games from "./Games";

const Pagination = ({ totalItems, shownCurrentPage, page }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);


  // useEffect(() => {
  //   //cargar los elementos de la base de datos
  //   fetch('http://localhost:3001/videogames')
  //     .then(res => res.json())
  //     .then(data => {
  //       setItems(data);
  //     });
  // }, []);

  let videogames = useSelector((state) => state.videogames); 
  let videogamesF = useSelector((state) => state.filterbygenre); 

  // setItems(videogames);

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function handlePreviousPage() {
    setCurrentPage(currentPage - 1);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = ""
  if(videogamesF?.length > 0) {
    currentItems = videogamesF.slice(indexOfFirstItem, indexOfLastItem);
  } else {
    currentItems = videogames.slice(indexOfFirstItem, indexOfLastItem);
   } 
  console.log(currentItems);
  return (
    <div>
      {/* {currentItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.description}</p>
          {/* <img src={item.background_image} alt="" /> */}
        {/* </div>
      ))} */} <Games videogames={currentItems} />
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={styles.leftArrow}
      ></button>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalItems}
        className={styles.rightArrow}
      ></button>
    </div>
  );
};
export default Pagination;