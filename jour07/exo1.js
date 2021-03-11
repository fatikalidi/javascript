// 01 - File System
var fs = require("fs");

fs.readFile("./exo1.txt", function(error, data) {
    console.log(data.toString());
})
