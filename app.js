const express = require('express');
const bodyParser = require('body-parser');
const mongo = require("./mongo")


const app = express();

app.use(bodyParser.json());

app.post('/produits', mongo.creerProduit);

app.get('/produits', mongo.getProduits);

app.listen(3000);