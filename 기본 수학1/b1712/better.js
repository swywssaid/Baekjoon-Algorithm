const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: "/dev/stdin"
  .toString()
  .trim()
  .split("\n");
input = input[0].split(" ").map((x) => Number(x));
function solution(input) {
  let answer =
    input[1] < input[2] ? Math.floor(input[0] / (input[2] - input[1])) + 1 : -1;
  console.log(answer);
}
solution(input);
