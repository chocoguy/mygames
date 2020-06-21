const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

// @route GET api/games
// @desc Gets all games
// @access Public
router.get('/', (req, res) => {
    Game.find()
    .sort({ date: -1 })
    .then(games => res.json(games))
});

//@route POST api/games
//@desc Create a post
//@access Public
router.post('/', (req, res) => {
    const newGame = new Game({
        name: req.body.name,
        players: req.body.players,
        rating: req.body.rating,
        year: req.body.year,
        platform: req.body.platform,
        desc: req.body.desc,
        link: req.body.link
    });

    newGame.save().then(game => res.json(game));
});

//@route DELETE api/games
//@desc DELETE A GAME
//@access Public
router.delete('/:id', (req, res) => {
    Game.findById(req.params.id)
    .then(game => game.remove()).then(() => res.json({success: true})
    )
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router