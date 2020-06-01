const assertEqual = require('../assertEqual');
const head = require('../head')


assertEqual(head([17]), 17);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");