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

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(a) {
  do {
    a.shift();
  } while (array.lenght > 0 && maybeTrue())
}