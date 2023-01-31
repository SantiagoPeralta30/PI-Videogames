import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllVideogames } from "../redux/actions";
import styles from "../styles/Games.module.css";

const Games = (props) => {
  return (
    <div className={styles.body}>
      {!props.videogames.error && props.videogames.length ? (
        props.videogames.map((juego) => {
          return (
            <Card
              name={juego.name}
              genres={juego.genres}
              img={juego.background_image}
              rating={juego.rating}
              id={juego.id}
              key={juego.id}
            />
          );
        })
      ) : (
        <h4 className={styles.h4}>Loading...</h4>
      )}
      {props.videogames.error && <h4>Games not found</h4>}
    </div>
  );
};

export default Games;