// const mongoose = require('../database');
const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    abilities: {
        type: Array || String,
    }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;