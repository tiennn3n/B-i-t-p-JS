function getVal(obj, value) {
    return Object.keys(obj).filter(key => obj[key] === value);
}
const obj = { a: 1, b: 2, c: 1, d: 3 };
console.log(getVal(obj, 1));
