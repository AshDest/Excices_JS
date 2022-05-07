/*
    Resolution d'exercice
*/

// declaration des variables
let trans = prompt("Quelle est la dépense pour le Transport? ");
let douane = prompt("Quel montant avez-vous payé à la douane? ");
let pa = prompt("Quel est le prix d'Achat de ta Marchandise? ");
let ben = prompt("Quel est le pourcentage de bénéfice voulez-vous pour cette marchandise? ");

// Casting des variables
trans = parseFloat(trans);
douane = parseFloat(douane);
pa = parseFloat(pa);
ben = parseInt(ben);

// Traitement
var pr = trans + douane + pa;
ben = (ben/100) * pr;
var pv = pr + ben;
document.write("Le prix de Vente de votre Marchandise est de : "+ pv);

//Fin de programme
