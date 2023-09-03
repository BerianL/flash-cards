const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

router.use((req, res, next) => {
    req.name = req.cookies.username;
    req.newTheme = req.body.theme || req.cookies.theme;
    next();
});
router.post('/changetheme', (req, res) => {
    // Access 'newTheme' from the 'req' object
    const newTheme = req.newTheme;
    if (newTheme) {
        res.cookie("theme", newTheme);
    }
});

router.get('/', (req, res) => {
    if (!req.name) {
        return res.redirect('/hello'); // Add 'return' here
    }
    res.render('index', { name: req.name });
});


router.get('/hello', (req, res) => {
    if (!req.name) {
        return res.render('hello');
    }
    res.redirect('/');
});

router.post('/hello', (req, res) => {
    res.cookie("username", req.body.username);
    res.redirect("/");
});

router.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});

module.exports = router;
