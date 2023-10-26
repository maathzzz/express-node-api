const routes = require("express").Router();
const userRoutes = require("./userRoutes");
const pokemonRoutes = require("./pokemonRoutes");

routes.use("/users", userRoutes);
routes.use("/pokemons", pokemonRoutes);

module.exports = routes;
