function forLoop(a) {
  for (var i = 1; i < 26; i++) {
    if (i === 1) {
      a.push("I am 1 strange loop.");
    } else {
      a.push(`I am ${i} strange loops.`);
    }
  }
}

function whileLoop(n) {
  while (n >= 0) {
    console.log(n);
    n = n-1;
  }
  console.log("done");
}

function doWhileLoop(a) {
  
}