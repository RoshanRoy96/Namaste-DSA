let s = ["r", "o", "s", "h", "a", "n"];
let len = s.length;
let halfLen = Math.floor(len / 2);

function reverseString(s) {
  for (let i = 0; i < halfLen; i++) {
    let temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }
  console.log(s);
}

reverseString(s);