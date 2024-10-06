function CheckVal(obj) {
    return Object.values(obj).some(value => value === null || value === undefined || Number.isNaN(value));
}

const obj = { a: 2, b: 8, c: null };
console.log(CheckVal(obj));
