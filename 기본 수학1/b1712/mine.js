const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: "/dev/stdin"
  .toString()
  .split("\n");
input = input[0].split(" ").map((x) => Number(x));
function solution(input) {
  for (let i = 1; ; i++) {
    if (input[0] + input[1] * i < input[2] * i) {
      return console.log(i);
    }
  }
}

solution(input);
