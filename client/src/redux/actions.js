import axios from "axios";

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_ALL_GENRES = "GET_ALL_GENRES";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const GET_VIDEOGAME_BY_NAME = "GET_VIDEOGAME_BY_NAME";
export const GET_VIDEOGAME_BY_ID = "GET_VIDEOGAME_BY_ID";
export const GET_ALL_FROM_DB = "GET_ALL_FROM_DB";
export const POST_VIDEOGAME = "POST_VIDEOGAME";
export const APPLY_FILTERS = "APPLY_FILTERS";
export const DELETE_VIDEOGAME = "DELETE";
export const RESET_VIDEOGAME = "RESET_VIDEOGAME";
export const RETURN_BACKUP = "RETURN_BACKUP";
export const SORT_DESCENDENT = "SORT_DESCENDENT";
export const SORT_ASCENDENT = "SORT_ASCENDENT";
export const RATING_ASCENDENT = "RATING_ASCENDENT";
export const RATING_DESCENDENT = "RATING_DESCENDENT";


export const getAllVideogames = () => (dispatch) => {
    return fetch(`http://localhost:3001/videogames`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_ALL_VIDEOGAMES, payload: data }));
};

export const getAllGenres = () => (dispatch) => {
    return fetch(`http://localhost:3001/genres`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_ALL_GENRES, payload: data }));
};

export const filterByGenre = (genero) => {
    return { type: FILTER_BY_GENRE, payload: genero };
};

export const getVideogames = () => {
    return { type: GET_VIDEOGAMES };
  };

export const getVideoGameByName = (name) => (dispatch) => {
    return fetch(`http://localhost:3001/videogames?name=${name}`)
      .then((response) => response.json())
    .then((data) => dispatch({ type: GET_VIDEOGAME_BY_NAME, payload: data }));
};

export const getVideoGameById = (id) => (dispatch) => {
    return fetch(`http://localhost:3001/videogames/${id}`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_VIDEOGAME_BY_ID, payload: data }));
  };

export const getAllFromDb = () => (dispatch) => {
    return fetch(`http://localhost:3001/videogamesDb`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_ALL_FROM_DB, payload: data }));
  };
    
export const getPlatforms = () => {
    return { type: GET_PLATFORMS };
  };
    
export const postVideogame = (objeto) => (dispatch) => {
    return axios
    .post(`http://localhost:3001/videogames`, objeto)
    .then((data) => dispatch({ type: POST_VIDEOGAME, payload: data }))
    .catch((error) => console.log(error));
  };

export const deleteVideoGame = (id) => (dispatch) => {
    return axios
    .delete(`http://localhost:3001/${id}`)
    .then((data) => dispatch({ type: DELETE_VIDEOGAME, payload: data }));
  };
    
export const resetVideogame = () => {
    return {
        type: RESET_VIDEOGAME,
      };
  };

export const returnBackup = () => {
    return { type: RETURN_BACKUP };
  };

export const sortDescendent = () => {
    return { type: SORT_DESCENDENT };
  };

export const sortAscendent = () => {
    return { type: SORT_ASCENDENT };
  };

export const ratingDescendent = () => {
    return { type: RATING_DESCENDENT };
  };

export const ratingAscendent = () => {
    return { type: RATING_ASCENDENT };
  };