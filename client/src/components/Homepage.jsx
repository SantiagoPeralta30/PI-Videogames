import { Link } from "react-router-dom";
import styles from "../styles/Homepage.module.css";

function Homepage() {
  return (
    <body className={styles.body}>
      <div className={styles.div}>
        <div className={styles.div2}>
          <h1 className={styles.h1}>Videogames PI</h1>
          <p className={styles.p}>
            This is a simple application, here you can explore, create or
            filter videogames and get details from them.
          </p>
          <Link to="/home">
            <button className={styles.button}>Let's start</button>
          </Link>
          <Link to="/about">
            <button className={styles.button}>About</button>
          </Link>
          <p className={styles.p2}>Developed by: Santiago Peralta</p>
          
        </div>
      </div>
      </body>
  );
}

export default Homepage;