const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://slsylvainlabranche:Montmorency@sylvain.rrmqgpc.mongodb.net/?retryWrites=true&w=majority"

const creerProduit = async (requete, reponse, next) => {

    const nouveauProduit ={
        nom: requete.body.nom,
        prix: requete.body.prix
    };
    const client = new MongoClient(url);

    try{
        await client.connect();
        const db = client.db();
        const resultat = await db.collection("produits").insertOne(nouveauProduit);

    }catch (erreur){
        return reponse.json({message:"Impossible d'enregistrer le produit"});
    };


    client.close();
    reponse.json(nouveauProduit);
};

const getProduits = async (requete, reponse, next) => {
    const client = new MongoClient(url);
    let produits
    try{
        await client.connect();
        const db = client.db();
        produits = await db.collection("produits").find().toArray();

    }catch (erreur){
        return reponse.json("Impossible de trouver les produits");
    }

    client.close();
    reponse.json(produits);
};

exports.creerProduit = creerProduit;
exports.getProduits = getProduits;