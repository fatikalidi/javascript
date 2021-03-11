// ## 06 - Cakes

// - 1) Créez une variable `cakes` contenant la valeur suivante :
// [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]
// - 2) À l'aide des méthodes `.filter()` et `.map()`, vous donnerez le statut "sold out !"
//  aux gâteaux au chocolat
// - 3) Ces deux gâteaux doivent être stockés dans une nouvelle variable, affichez-la dans
//  la console

var cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]


var soldOut = cakes.filter(
    function(elem) {
        return elem.flavor === "chocolate";
    }
).map(
    function(elem) {
        elem.status = "Sold out !";
        return elem;
    }
);

console.log(soldOut);