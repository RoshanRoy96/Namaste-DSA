// Print the following pattern?

// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1

let n = 5;
let x = 1;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + x;
    if (x == 1) {
      x = 0;
    } else {
      x = 1;
    }
  }
  console.log(row);
}
