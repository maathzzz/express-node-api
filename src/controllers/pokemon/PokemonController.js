const Pokemon = require("../../infra/schemas/pokemonSchema");

class PokemonController {
  async find(req, res) {
    try {
      const pokemons = await Pokemon.find();
      return res.status(200).json(pokemons);
    } catch (error) {
      return res.status(500).send({
        error: "Find Failed",
        message: error,
      });
    }
  }

  async register(req, res) {
    try {
      const { name, types, abilities, weaknesses } = req.body;
      const pokemon = await Pokemon.create({
        name,
        types,
        abilities,
        weaknesses,
      });
      return res.status(201).json(pokemon);
    } catch (error) {
      return res.status(500).send({
        error: "Registration Failed",
        message: error,
      });
    }
  }
}

module.exports = PokemonController;
