const mongoose = require("mongoose");

const Produit = require("./models/produit")

//mongoose gère automatiquement les connexions avec les bases de données
mongoose.connect("mongodb+srv://slsylvainlabranche:Montmorency@sylvain.rrmqgpc.mongodb.net/?retryWrites=true&w=majority"
).then(() => {
    console.log("Connexion à la base de données réussie")
}).catch(() =>{
    console.log("Erreur lors de la connexion");
});

const creerProduit = async (requete, reponse, next) =>{
    const nouveauProduit = new Produit({
        nom: requete.body.nom,
        prix: requete.body.prix
    });
    //La méthode save est fournie  par mongoose lors de la création d'un schéma.
    //Enregistre automatiquement le Produit dans la table correspondante produits.
    const resultat = await nouveauProduit.save();

    reponse.json(resultat);
}

const getProduits = async (requete, reponse, next) =>{
    //mongoose fournit aussi une méthode de recherche
    const produits = await Produit.find().exec();

    reponse.json(produits);
}


exports.creerProduit = creerProduit;
exports.getProduits = getProduits;