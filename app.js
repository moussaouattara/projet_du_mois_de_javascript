const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engime', 'pug');

app.use(bodyParser.urlencoded({extended: false}));

const shopRoutes = require('./routes/shop');
app.use('/', shopRoutes);
const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Serveur lancé sur le port ${port}.`);
});

