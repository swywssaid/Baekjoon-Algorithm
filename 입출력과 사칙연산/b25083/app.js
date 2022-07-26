const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");

function solution() {
  console.log(`         ,r'"7
r\`-_   ,'  ,/
 \\. ". L_r'
   \`~\\/
      |
      |
`);

  // console.log(
  //   "         ,r'\"7\nr`-_   ,'  ,/\n \\. \". L_r'\n   `~\\/\n      |\n      |"
  // );
}
solution();
