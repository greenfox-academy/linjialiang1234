'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

var todoText = " - Buy milk\n";
var begin = "My todo:\n";
var second = " - Download games\n";
var third = "     - Diablo";
var result = begin.concat(todoText).concat(second).concat(third);
console.log(result);