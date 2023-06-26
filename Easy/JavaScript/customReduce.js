const reduce = function (nums, fn, init = 0) {
    let acc = init;
    nums.forEach((num) => (acc = fn(acc, num)));
    return acc;
};

console.log(
    reduce(
        [1, 2, 3, 4],
        function sum(accum, curr) {
            return accum + curr * curr;
        },
        100
    )
);
