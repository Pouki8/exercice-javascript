console.log("Bonjour");
const a = "Hello";
const b = "World !";
console.log(a);
console.log(a + " " + b);
const notes = [13, 15, 12, 18, [1, 2, 3, 4]];
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 24,
    job: "Informaticien",
    [b]: 23
};


// Calcul du nombre d'heures par an
const NombreSecondeHeure = 3600;
const HeureParJour = 24;
const NombreJourParAn = 365;

function NombreSecondeParAn() {
    let SecondeParAn = NombreSecondeHeure * HeureParJour * NombreJourParAn;
    return SecondeParAn;
}
console.log("Nombre de seconde par heure = " + NombreSecondeHeure);
console.log(NombreSecondeParAn() + " seconde par an.");


// ************************************************************************************************
// Calcul du panier addition

// Fonction pour calculer le coût du panier
function CalculerPanier() {
    // Accéder aux valeurs numériques des articles
    const prixArticle1 = parseFloat(document.querySelector(".article1").value);
    const prixArticle2 = parseFloat(document.querySelector(".article2").value);

    // Calculer le prix total du panier
    const prixTotal = prixArticle1 + prixArticle2;
    // Mettre à jour l'élément HTML avec le résultat calculé
    document.querySelector(".result").value = prixTotal.toFixed(2);
}

// Ajouter un gestionnaire d'événements pour le bouton "Calculer"
document.querySelector(".addition").addEventListener("click", CalculerPanier);


// *******************************************************************************************
// Soustraction
function CalculerProduitRestant() {
    const produitInitial = parseInt(document.querySelector(".stockInitial").value);
    const produitVendu = parseInt(document.querySelector(".produitVendu").value);
    const resultat = produitInitial - produitVendu;
    document.querySelector(".soustraire").value = resultat.toFixed(0);
}

document.querySelector(".soustraction").addEventListener("click", CalculerProduitRestant);

// ********************************************************************************************
// Multiplication
function MontantTotalProduit() {
    const nombreProduit = parseFloat(document.querySelector(".prixProduit").value);
    const montantProduit = parseFloat(document.querySelector(".nombreDeProduit").value);
    const resultat = nombreProduit * montantProduit;
    document.querySelector(".multiplier").value = resultat.toFixed(2);
}
document.querySelector(".multiplication").addEventListener("click", MontantTotalProduit);

// ***********************************************************************************************
// conversion
function ConversionFrancs() {
    const euros = parseFloat(document.querySelector(".montantEuros").value);
    const resultat = euros * 6.55957;
    document.querySelector(".montantFrancs").value = resultat.toFixed(2);
}


document.querySelector(".conversion").addEventListener("click", ConversionFrancs);

// ****************************************************************************************
// convertisseur de devise
function convertirDevise() {
    // Obtenir le montant en euros et le taux de change depuis les éléments HTML
    const montantEuros = parseFloat(document.getElementById("montantEuros").value);
    const tauxChange = parseFloat(document.getElementById("tauxChange").value);

    // Calculer le montant équivalent dans l'autre devise
    const montantDevise = montantEuros * tauxChange;

    // Afficher le montant équivalent sur la page HTML
    document.querySelector(".montantDevise").textContent = montantDevise.toFixed(2);
}
// *****************************************************************************************
// Pair ou impair
function verifierPairImpair() {
    // Obtenir le nombre à partir de l'élément HTML
    var nombre = document.querySelector(".nombrePairOuPas").value;

    // Vérifier si le nombre est pair ou impair
    var resultat = (nombre % 2 === 0) ? "pair" : "impair";

    // Afficher le résultat sur la page HTML
    document.querySelector(".pairOuImpair").textContent = "Le nombre " + nombre + " est " + resultat + ".";
}

// *******************************************************************************************
// Bonjour, FirstName and LastName
function AfficherName() {
    const firstName = document.querySelector(".prenom").value;
    const lastName = document.querySelector(".nom").value;
    const reponse = "Bonjour, " + firstName + " " + lastName;
    document.querySelector(".nameLastname").textContent = reponse;
}



// ************************************************************************
// Tableaux
let snakeBoard = [
    ["🔴", "🟩", "🟩", "🟩"],
    ["", "", "", "🟩"],
    ["", "", "", "🟩"],
    ["", "", "", "🟩"]
]
snakeBoard[2][1] = "🔴";
console.log(snakeBoard);

let fruits = [
    "papaye",
    "framboise",
    "noix de coco",
    "banane",
    "raisin",
    "mangue",
    "cerise",
    "pomme",
];
let removedElement = fruits.splice(3, 1);
console.log(fruits);

// ****************************************************************
// Condition pour voir si un utilisateur est majeur
function isAdult(age) {
    if (age >= 18) {
        return ("Majeur");
    } else {
        return ("Mineur");
    }
}
console.log(isAdult(19));
