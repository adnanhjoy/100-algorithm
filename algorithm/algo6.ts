// Rectangle Pattern 

const row = 5;
const col = 4;
let start = "";

for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= col; j++) {
    start += "*";
  }
  start += "\n"
}

console.log(start);