const express = require('express');
const router = express.Router();
const { data } = require ('../data/flashCardData.json');
const cookieParser = require("cookie-parser");
const { cards } = data;

router.use(cookieParser());


router.get('/', (req, res) => {
    const totalCards = cards.length;
    const randomCard = Math.floor(Math.random() * totalCards);
    res.redirect(`/cards/${randomCard}?side=question`);

});

router.get('/:id', (req, res, next) => {
    const { side } = req.query;
    const { id } = req.params;

    if (!side) {
        return res.redirect(`/cards/${id}?side=question`);
    }
    const name = req.cookies.username;

// Check if side is not 'question' or 'answer'
    if (side !== 'question' && side !== 'answer') {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
        return;
    }

    const text = cards[id][side];
    const { hint } = cards[id];
    const totalCards = cards.length;
    const randomCard = Math.floor(Math.random() * totalCards);
    const templateData = { id, text, randomCard, name };

    if (side === 'question') {
        templateData.hint = hint;
        templateData.changeSide = 'answer';
    } else if (side === 'answer') {
        templateData.changeSide = 'question';
    }

    res.render('card', templateData);
});





module.exports = router;