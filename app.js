const PORT = 3030;
const express = require('express');
const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use("/", mainRoutes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status || 500);
    res.render('error');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
