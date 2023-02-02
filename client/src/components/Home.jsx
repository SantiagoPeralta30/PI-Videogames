import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Filters from "./Filters";
import Searchbar from "./SearchBar";
import { getAllVideogames } from "../redux/actions";
import styles from "../styles/Home.module.css";

const Home = () => {
  const  videogames = useSelector((state) => state.videogames);// Me traigo los videojuegos del estado global
  const genres = useSelector((state) => state.genres);
  //Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);

  const indexOfLastItem = currentPage * postsPerPage;
  const indexOfFirstItem = indexOfLastItem - postsPerPage;
  const currentItems = videogames.slice(indexOfFirstItem, indexOfLastItem);
  console.log(videogames)
  console.log(genres);
  const dispatch = useDispatch();

  //Media query
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 800px)").matches
  );
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(max-width: 800px)")
      .addEventListener("change", (e) => setMatches(e.matches));
      dispatch(getAllVideogames());
  }, [dispatch]);
  
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return (  
    <div className={styles.body}>
      <div className={styles.div}>
        <div className={styles.div2}>
          <h3 className={styles.h3}>Videogames:</h3>
          <Pagination
            totalItems={videogames.length}
            ShownItemsPerPage={setPostsPerPage}
            shownCurrentPage={setCurrentPage}
            page={currentPage}
            onClickNext={handleNextPage}
            onClickPrevious={handlePreviousPage}
          />
        </div>
        <div className={styles.sidebar}>
          <Link to="/about">
            <button className={styles.about}>About</button>
          </Link>
          <Link to="/create">
            <button className={styles.create}>Create</button>
          </Link>
          <Searchbar setCurrentPage={setCurrentPage} />
          {matches && (
            <button
              className={styles.verFiltros}
              onClick={(e) => setMostrarFiltros((current) => !current)}
            >
              Filtros
            </button>
          )}
          {mostrarFiltros && (
            <Filters genres={genres} setCurrentPage={setCurrentPage} />
          )}
          {!matches && (
            <Filters genres={genres} setCurrentPage={setCurrentPage} />
          )}
        </div>
      </div>
    </div>  
  );
}

export default Home;