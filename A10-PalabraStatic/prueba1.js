const foo = [1, 2, 3];
const [n] = foo;
console.log(n);

var a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length);

class TaxCalculator {
  static calculate(total) {
    return total * 0.05;
  }
}

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log("I");
setTimeout(() => {
  console.log("love");
}, 0);
console.log("JavaScript!");

const dessert = { type: "pie" };
dessert.type = "pudding";

const seconds = dessert;
seconds.type = "fruit";

const x = 6 % 2;
const y = x ? "One" : "Two";
console.log(y);

[3] == [3];
3 != "3";
3 == "3";
