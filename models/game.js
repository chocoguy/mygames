const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    players:{
        type: String,
        required: true
    },   
    rating: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    platform: {
        type: Array,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

module.exports = Game = mongoose.model('game', GameSchema)