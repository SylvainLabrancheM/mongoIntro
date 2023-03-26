const express = require('express');
const bodyParser = require('body-parser');
const mongo = require("./mongo")
const mongoose = require("./mongoose")


const app = express();

app.use(bodyParser.json());

app.post('/produits', mongoose.creerProduit);

app.get('/produits', mongoose.getProduits);

app.listen(3000);