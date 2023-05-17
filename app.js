// const amount = 9;

// if (amount < 10) {
//   console.log("small");
// } else {
//   console.log("large");
// }

// console.log("its my first app");

// console.log(__dirname);
// console.log(__filename);

// setInterval(() => {
//   console.log("hello world");
// }, 1000);

// const path = require("path");

// console.log(path.sep);

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
