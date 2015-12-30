var nums = process.argv.slice(2, process.argv.length);

var sum = nums.reduce(function(prev, curr) {
  return Number(prev) + Number(curr);
});

console.log(sum);
