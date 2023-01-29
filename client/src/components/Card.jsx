import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "../styles/Card.module.css"

const Card = (props) => {
    const [activo, setActivo] = useState(false);
    const imgDefault = "https://imgbin.com/png/kYWnVadK/question-mark-png";
    const dispatch = useDispatch();
    console.log(props);
    return (
        <div className={styles.div}>
            <div className={styles.divRating}>
                <img
                    className={styles.icon}
                    src="https://www.pngkey.com/maxpic/u2e6t4a9i1q8o0q8/"
                    alt=""
                    />
                <p className={styles.ratingValue}>{props.rating}</p>
            </div>
            <Link to={`/videogames/${props.id}`}>
                <img
                    src={props.img ? props.img : imgDefault}
                    onMouseEnter={() => setActivo((current) => !current)}
                    onMouseLeave={() => setActivo((current) => !current)}
                    alt=""
                    className={activo ? styles.imgHover : styles.img}
                />
            </Link>
            <p className={styles.genre}>{props.genres.join(", ")}</p>
            <Link className={styles.Link} to={`/videogames/${props.id}`}>
                <p className={styles.name}>{props.name}</p>
            </Link>
        </div>
    );
}

export default Card;