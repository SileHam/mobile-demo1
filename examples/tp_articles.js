const articles = [
  { id: 1, nom: "PC",      categorie: "Info",
    prix: 6500, stock: 5,  actif: true },
  { id: 2, nom: "Souris",  categorie: "Info",
    prix: 120,  stock: 20, actif: true },
  { id: 3, nom: "Clavier", categorie: "Info",
    prix: 250,  stock: 0,  actif: true },
  { id: 4, nom: "Ecran",   categorie: "Info",
    prix: 1800, stock: 3,  actif: false },
  { id: 5, nom: "Chaise",  categorie: "Mobilier",
    prix: 900, stock: 8, actif: true },
  { id: 6, nom: "Bureau",  categorie: "Mobilier",
    prix: 1500, stock: 2, actif: true },
  { id: 7, nom: "Casque",  categorie: "Info",
    prix: 350, stock: 0, actif: false },
  { id: 8, nom: "Lampe",   categorie: "Mobilier",
    prix: 180, stock: 12, actif: true }
];


const disponibles = articles.filter(a => a.actif && a.stock > 0);

const infoAbordables = articles.filter(a => a.actif && a.categorie === "Info" && a.prix <= 500);

const ruptures = articles.filter(a => a.stock === 0);

console.table(disponibles);
console.table(infoAbordables);
console.table(ruptures);



function chercherArticle(id) {
  return articles.find(a => a.id === id);
}

const resultat = chercherArticle(5);

if (resultat) {
  console.log(resultat.nom, resultat.prix, "MAD");
} else {
  console.log("Article introuvable");
}

const resultat99 = chercherArticle(99);

if (resultat99) {
  console.log(resultat99.nom, resultat99.prix, "MAD");
} else {
  console.log("Article introuvable");
}


const catalogue = articles.map(article => {
  const prixTTC = article.prix * 1.20;
  let statutStock;

    if (article.stock === 0) {
    statutStock = "Rupture";
  } else if (article.stock <= 3) {
    statutStock = "Stock faible";
  } else {
    statutStock = "Disponible";
  }
  return { ...article, prixTTC, statutStock };
});

console.table(catalogue);



const quantiteTotale = articles.reduce((somme, a) => somme + a.stock, 0);

const valeurStockHT = articles.reduce((somme, a) => somme + a.prix * a.stock, 0);

console.log("Quantité totale :", quantiteTotale);
console.log("Valeur du stock HT :", valeurStockHT, "MAD");

