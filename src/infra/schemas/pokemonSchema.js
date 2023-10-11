// const mongoose = require('../database');
const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: String,
    type: Array,
    abilites: Array || String,
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;