const assertEqual = require('../assertEqual');
const tail = require('../tail');

let result = tail(["Hello", "Lighthouse", "Labs", "Bootcamp"]);
assertEqual(result.length, 3);
assertEqual(result[2], "Bootcamp");
assertEqual(result[1], "Labs");


let words = ["Bootcamp", "Lighthouse", "Labs", "Javascript"];
tail(words);
assertEqual(words.length, 4);