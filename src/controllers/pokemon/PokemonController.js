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

  async findPokemonById(req, res) {
    try {
      const { id } = req.params;
      const pokemon = await Pokemon.findById(id);
      return res.status(200).json(pokemon);
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

      if (pokemon.FindOne({ name })) {
        return res.status(400).send({ error: "Pokemon already exists" });
      }

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

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, types, abilities, weaknesses } = req.body;

      const pokemon = await Pokemon.findByIdAndUpdate(id, {
        name: name,
        types: types,
        abilities: abilities,
        weaknesses: weaknesses,
      });

      return res.status(200).json(pokemon);
    } catch (error) {
      return res.status(500).send({
        error: "Update Failed",
        message: error,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Pokemon.findByIdAndDelete(id);
      return res.status(200).json("Pokemon deleted");
    } catch (error) {
      return res.status(500).send({
        error: "Deletion Failed",
        message: error,
      });
    }
  }
}

module.exports = PokemonController;
