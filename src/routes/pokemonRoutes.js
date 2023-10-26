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

pokemonRoutes.get("/:id", async (req, res) => {
  await pokemon.findPokemonById(req, res);
});

pokemonRoutes.delete("/delete/:id", async (req, res) => {
  await pokemon.delete(req, res);
});

pokemonRoutes.put("/update/:id", async (req, res) => {
  await pokemon.update(req, res);
});

module.exports = pokemonRoutes;
