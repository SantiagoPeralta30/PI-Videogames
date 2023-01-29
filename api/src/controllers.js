const { Model } = require("sequelize");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame, Genre } = require("./db");

//creando las funciones 

//funcion para obtener una lista de juegos

const findVideoGames = async () => {
  const call = await axios
    .get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=100`)
    .then((response) => response.data)
    .then((response) => response.results);
  const call2 = await axios
    .get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2&page_size=100`)
    .then((response) => response.data)
    .then((response) => response.results);
  const call3 = await axios
    .get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3&page_size=100`)
    .then((response) => response.data)
    .then((response) => response.results);
  let array = [];
  call.forEach((juego) =>
    array.push({
      id: juego.id,
      name: juego.name,
      rating: juego.rating,
      background_image: juego.background_image,
      genres: juego.genres.map((genero) => genero.name),
      platforms: juego.platforms.map((plataforma) => plataforma.platform.name),
    })
  );
  call2.forEach((juego) =>
    array.push({
      id: juego.id,
      name: juego.name,
      rating: juego.rating,
      background_image: juego.background_image,
      genres: juego.genres.map((genero) => genero.name),
      platforms: juego.platforms.map((plataforma) => plataforma.platform.name),
    })
  );
  call3.forEach((juego) =>
    array.push({
      id: juego.id,
      name: juego.name,
      rating: juego.rating,
      background_image: juego.background_image,
      genres: juego.genres.map((genero) => genero.name),
      platforms: juego.platforms.map((plataforma) => plataforma.platform.name),
    })
  );
  // console.log("$/&1123321");
  // console.log(array);
  return array;
};

//

const findVideoGamesByName = async (call) => {
  let array = [];
  for (let i = 0; i < 15; i++) {
    let juego = call[i];
    array.push({
      id: juego.id,
      name: juego.name,
      rating: juego.rating,
      background_image: juego.background_image,
      genres: juego.genres.map((genero) => genero.name),
    });
  }
  return array;
};

const loadGenres = async () => {
  try {
    const call = await axios
      .get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
      .then((response) => response.data)
      .then((response) => response.results);
      let unGenero = [];
    call.forEach((generos) => {
      unGenero.push(generos.name)
    });
    console.log(unGenero);
    unGenero.forEach((generos) => {
      Genre.findOrCreate({ where: { name: generos } })
  })
    // const promises = genresFromApi.map(async (genre) => {
    //   await Genre.findOrCreate({ where: { name: genre.name } });
    // });
    // await Promise.all(promises);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = {
  findVideoGames,
  findVideoGamesByName,
  loadGenres,
};