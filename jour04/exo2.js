// ## 02 - Combine

// - Créez une variable `cat2` qui reprend la structure de cat : 
// mettez d'autres valeurs pour chaque clé

// - Créez une variable `cats` qui contient un tableau contenant 
// les variables `cat` et `cat2`
// - Affichez la valeur de `age` de `cat` dans la console
// - Affichez la valeur de `isCute` de `cat2` dans la console

var cat = {
    name: "Garfield",
    age: 3,
    isCute: true
};

var cat2 = {
    name: "Felix",
    age: 20,
    isCute: false
};

console.log("cat :", cat);
console.log("cat2 :", cat2);
var cats = [cat, cat2];
console.log("cats :", cats);
console.log("age de cat :", cat.age, cats[0].age);
console.log("isCute de cat2 :", cat2.isCute, cats[1].isCute);
