import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getVideoGameById, resetVideogame } from "../redux/actions";
import { Link } from "react-router-dom";

const Detail = (props) => {
    const dispatch = useDispatch();

    const { id } = props.match.params;
    useEffect(() => {
        dispatch(getVideoGameById(id));
      }, [dispatch, id]);
    
      const videogame = useSelector((state) => state.videogame);
    
      return (
        <div>
          <div>
            {Object.keys(videogame).length > 0 ? (
              <>
                <div>
                  <Link to="/home">
                    <button
                      onClick={() => dispatch(resetVideogame())}
                    ></button>
                  </Link>
                  <img src={videogame.background_image} alt=""/>
                  <div >
                    <h3>{videogame.name}</h3>
    
                    <span>{videogame.released}</span>
    
                    <span>
                      {videogame.platforms.join(", ")}
                    </span>
                    <span>
                      {videogame.genres.join(", ")}
                    </span>
                  </div>
                </div>
                <p>{videogame.description}</p>
              </>
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
      );
    };


export default Detail;