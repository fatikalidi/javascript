// ## 03 - Even

// - Créez une fonction `checkIfEven` qui reçoit un paramètre `num`
// - Dans la fonction, à l'aide d'une condition, affichez "even" si
//  `num` est pair, "odd" si il est impair
// - Appelez votre fonction plusieurs fois avec des chiffres 
// différents comme argument pour vérifier les résultats

// Astuce : pensez au modulo !

function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

checkIfEven(7);
checkIfEven(10);
checkIfEven(12);
checkIfEven(23);

