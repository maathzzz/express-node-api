const routes = require("express").Router();

const userRoutes = require("./userRoutes");
const loginRoutes = require("./loginRoute");
const pokemonRoutes = require("./pokemonRoutes");


routes.use("/", loginRoutes);
routes.use("/users", userRoutes);
routes.use("/pokemons", pokemonRoutes);

module.exports = routes;
