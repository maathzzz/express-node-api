const { Router } = require("express");
const PokemonController = require("../controllers/pokemon/PokemonController");

const pokemonRoutes = Router();
const pokemon = new PokemonController();

pokemonRoutes.get("/", async (req, res) => {
  await pokemon.find(req, res);
});

pokemonRoutes.post("/register", async (req, res) => {
  await pokemon.register(req, res);
});

module.exports = pokemonRoutes;
