// Print the following pattern?

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
// 1 0 1 0 1 0

let n = 6;
for (let i = 0; i < n; i++) {
  let x = 1;
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
