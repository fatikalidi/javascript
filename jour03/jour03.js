// 01 - Array
console.log("--- exo 1 ---");
var fruits = ["mango", "lemon", "blueberry"];
console.log("(.log) fruits", fruits);
console.table(fruits);

// 02 - Access 
console.log("--- exo 2 ---");
var ingredients = ["eggs", "milk", "butter"];
console.log("(.log) ingredients", ingredients);
console.log("index de \"butter\" :", ingredients.indexOf("butter"));

// 03 - Add & Remove
console.log("--- exo 3 ---");
var objects = ["pen", "book", "lamp"];
objects.unshift("chair");
console.log("1 - ajout de 'chair' au début :", objects);
objects.pop();
console.log("2 - enlèvement de 'lamp' :", objects);
objects.push("chair")
console.log("3 - ajout de 'laptop' à la fin :", objects);
objects.shift("chair")
console.log("4 - enlèvement de 'chair' :", objects);

// 04 - Order
console.log("--- exo 4 ---");
var numbers = [4, 10, 8, 12, 6];
numbers.reverse();
console.log("numbers inversé", numbers);
numbers.sort();
console.log("numbers ordonné", numbers);

// 05 - Boucle
console.log("--- exo 5 ---");
var total = 0;
var limit = 10;

for (var i = 0; i <= limit; i++) {  
    total+=i
}
console.log("total =", total);

// 06 - Reverse
console.log("--- exo 6 ---");

var sentence = "Hello Konexio !";
var dissociation = sentence.split("");
var revers = [];
// console.log(sentence.split().reverse());

for (var i = 0; i <= dissociation.length; i++) {
    console.log(revers.unshift(dissociation[i]));
}
console.log(sentence);
console.log(revers);
console.log(revers.join(""));


// 07 - Bonus I
console.log("--- Bonus I ---");

for (i = 0; i <= 100; i++) {
    if (i % 15 === 0) {
    // if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 7 === 0) {
      console.log("");
    } else {
      console.log(i);
    }
  }
  
// 08 - Bonus II
console.log("--- Bonus II ---");

total = 0;
limit = 10;
i = 0;
while (i <= limit) {
  total = total + i;
  i++;
}
console.log(total);


// 09 - Bonus III
console.log("--- Bonus III ---");
var promo = ["a", "b", "c", "d"];
var min = 0;
var max = promo.length - 1;
var random = Math.floor(Math.random() * (max - min + 1));
console.log(promo[random]);


// Bonus IV
console.log("--- Bonus IV ---");

var arr = [];
var min = 0;
var max = 100;
for (i = 0; i < 20; i++) {
  var random = Math.floor(Math.random() * (max - min + 1));
  arr.push(random);
}

var arrayMax = arr[0];
for (i = 1; i < 20; i++) {
    if (arr[i] > arrayMax) {
        arrayMax = arr[i];
    }
}
console.log(arrayMax);

