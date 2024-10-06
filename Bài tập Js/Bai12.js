function arr(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(arr(arr1, arr2));
