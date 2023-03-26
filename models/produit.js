const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema({
    nom: {type: String, required: true},
    prix: {type: Number, required: true}
});

//Par défaut, un schéma Produit sera placé dans la table produits
module.exports = mongoose.model("Produit", produitSchema);
