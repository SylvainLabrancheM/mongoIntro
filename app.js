const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

app.post('/produits');

app.get('/produits');

app.listen(3000);