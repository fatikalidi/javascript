//  03 - Map Names

// - 1) Créez une variable `longNames` contenant la valeur suivante :
// [
// 	{
// 		firstName: "Jane",
// 		lastName: "Doe"
// 	},
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}
// ]

// - 2) Créez une variable `shortNames` qui appellera la méthode `.map()` pour contenir une version compacte de `longNames` :
// Résultat attendu :
// [
// 	{
// 		name: "Jane Doe"
// 	},
// 	{
// 		name: "John Smith"
// 	}
// ]

// - 3) Affichez les valeurs de `shortNames` dans la console


var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];


var shortNames = longNames.map(
    function(e) {
        return {
            name: `${e.firstName} ${e.lastName}`
        };
    }

);

console.log("longName :", longNames);
console.log("shortName :", shortNames);

// const map1 = array1.map(x => x * 2);
