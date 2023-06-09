var createCounter = function (x) {
    let privateCounter = x - 1;
    return function () {
        return (privateCounter += 1);
    };
};

const counter = createCounter(20);
console.log("🚀 ~ file: counter.js:10 ~ counter:", counter());
console.log("🚀 ~ file: counter.js:10 ~ counter:", counter());
console.log("🚀 ~ file: counter.js:10 ~ counter:", counter());
