const compose = function (functions) {
    return function (x) {
        let total = functions.length > 0 ? functions[functions.length - 1](x) : x;
        for (let i = functions.length - 2; i >= 0; i--) {
            const newVal = functions[i](total);
            total = newVal;
        }
        return total;
    };
};

const fn = compose([]);
console.log(fn(42));
