Array.prototype.last = function () {
    const arr = this;
    if (arr[arr.length - 1] != null) {
        return arr[arr.length - 1];
    } else return -1;
};

const arr = [0, 0, 0];
console.log(arr.last());
