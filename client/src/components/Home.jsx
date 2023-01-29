import Games from "./Games";
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

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = videogames.slice(firstPostIndex, lastPostIndex);
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
  
  return (  
    <div className={styles.body}>
      <div className={styles.div}>
        <div className={styles.div2}>
          <h3 className={styles.h3}>Videogames:</h3>
          <Games videogames={currentPosts} />
          <Pagination
            totalItems={videogames.length}
            ShownItemsPerPage={setPostsPerPage}
            shownCurrentPage={setCurrentPage}
            page={currentPage}
          />
        </div>
        <div className={styles.sidebar}>
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