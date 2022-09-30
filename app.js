//hw below:
const arr2 = [1, 2, 3, 4, 5];

const doubler = (numsArr) => numsArr.map((num) => num * 2);

function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

const squareThenFilterEvens = (numsArr) => numsArr.map((num) => num * num).filter((squaredNum) => squaredNum % 2 === 0);

//implicit returns

const add = (x, y) => {
  return x + y;
};

[2, 3, 6, 78, 99, 104, 23].reduce(function (max, currNum) {
  return Math.max(max, currNum);
});

[2, 3, 6, 78, 99, 104, 23].reduce((max, currNum) => {
  return Math.max(max, currNum);
});

// [1, 2, 3, 4, 5].forEach((n) => {
//   console.log(n * 10);
// });

// [1, 2, 3, 4, 5].forEach((n) => {
//   console.log(n * 10);
// });

const supBro = () => {
  console.log(`sup BRO!`);
};

[1, 2, 3, 4, 5, 6].filter((num) => num % 2 === 0);

const double = (n) => n * 2;

// [1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
//   if (num % 2 == 0) {
//     return `even`;
//   }
//   return `odd`;
// });

[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (n % 2 === 0 ? `even` : `odd`));
// implict return requires 1 expression (not if this else that, that's 2)

const dailyRainTotals = [
  [1.2, 0.35, 2.2],
  [3.2, 4.0, 0.2],
  [3.0, 1.4, 11],
];

// dailyRainTotals.map((dailySubtotal) => {
//   return dailySubtotal.reduce((accum, next) => {
//     return accum + next;
//   });
// });

dailyRainTotals.map((dailySubtotal) => dailySubtotal.reduce((accum, next) => accum + next));

// remove semi colons from implicit returns, remove curly braces
// as long as expression is technically one line, can remove leave out return statements, semi colons, curly braces

// const makeMath = (num) => {
//   return { square: num * num, double: num * 2 };
// };

//to output an object literal need to wrap in (), otherwise js thinks {} is a function/code block

//explicit return means you explicitly call return

// const dog = {
//   name: `Harper`,
//   woof: function () {
//     return `${this.name} says woof`;
//   },
// };

const dog = {
  name: `Harper`,
  eat: function () {
    console.log(this);
    return `${this.name} eats dog food`;
  },

  woof: () => {
    console.log(this);
    return `${this.name} says woof`;
  },
};

// const doubler = (arr) => arr.map((num) => num * 2);

dailyRainTotals.map((dailySubtotal) => dailySubtotal.reduce((accum, next) => accum + next));
const makeMath = (num) => ({ square: num * num, double: num * 2 });

// function double2(arr) {
//   return arr.map(function (val) {
//     return val * 2;
//   });
// }

// const arr2 = [1, 2, 3, 4, 5];

// const doubler = (numsArr) => numsArr.map((num) => num * 2);

// function squareAndFindEvens(numbers) {
//   var squares = numbers.map(function (num) {
//     return num ** 2;
//   });
//   var evens = squares.filter(function (square) {
//     return square % 2 === 0;
//   });
//   return evens;
// }

// const squareThenFilterEvens = (numsArr) => numsArr.map((num) => num * num).filter((squaredNum) => squaredNum % 2 === 0);
