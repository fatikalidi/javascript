// ## 06 - Time

// - Créez une fonction `format` qui reçoit un paramètre `num` qui représente des secondes
// - Faites en sorte que la fonction retourne un format `heures : minutes : secondes`
// - Appelez votre fonction avec l'argument `3700` et vérifiez que vous obtenez `1:1:40`

// Méthode 1 : avec modulo *****************************************
function format(num) {
    // 124 secondes => 2m et 4s
    // je sais que 1m = 60s
    /*
    console.log(Math.floor(num / 3600)); // heures
    console.log(num % 3600) // minutes et les secondes
    console.log(Math.floor(num % 3600 / 60));
    console.log(num % 3600 % 60);
    */

    var hours = Math.floor(num / 3600);
    var restHours = num % 3600;
    var minutes = Math.floor(restHours / 60);
    var secondes = restHours % 60;
    console.log(`${hours} : ${minutes} : ${secondes}`);
}

format(3700);

// Méthode 2 : maths simple **********************************************
function adamaFormat(num) {
    var hours = Math.floor(num / 3600);
    var rest = num - hours * 3600;
    var minutes = Math.floor(rest / 60);
    var seconds = rest - minutes * 60;
    console.log(`${hours} : ${minutes} : ${seconds}`);
}

adamaFormat(3700);


// Méthode 3 : sans maths => boucle & conditions ******************************
function formatWithoutMaths(num) {
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    for (var i = 0; i < num; i++) {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        if (hours === 24) {
            days++;
            hours = 0;
        }
    }
    console.log(`${hours} : ${minutes} : ${seconds}`);
}

formatWithoutMaths(3700);
