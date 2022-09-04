const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n");
input = input[0];

function solution() {
  console.log(input);
}

solution();
