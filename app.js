const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log(
  "We need a tackle at 6, but Brock Bowers Malik Nabers or Rome Odunze would work too"
);
