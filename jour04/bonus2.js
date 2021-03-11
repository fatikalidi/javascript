//  ⭐ Bonus II - Jeu de dé

// - Créez une fonction `launchDice` qui reçoit un paramètre `numberOfDice`
// - La fonction va lancer aléatoirement `numberOfDice` dés et retourner leur somme
// - Appelez la fonction deux fois avec pour parametre 5, une fois pour le `joueur1` et `joueur2`
// - Afficher le joueur gagnant (celui ayant le plus grand score)


function launchDice(numberOfDice) {
    var min = 1;
    var max = 6;
    var sum = 0;
    for (var i = 0; i < numberOfDice; i++) {
        var dice = Math.floor(Math.random() * (max - min + 1) + min);
        sum += dice;
    }
    return sum;
}

var joueur1 = launchDice(5);
var joueur2 = launchDice(5);
if (joueur1 > joueur2) {
    console.log("Joueur 1 a gagné")
} else if (joueur1 < joueur2) {
    console.log("Joueur 2 a gagné")
} else {
    console.log("Egalité");
}