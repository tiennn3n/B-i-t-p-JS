function array(arr1, arr2) {
    return (
        arr1.length === arr2.length &&
        arr1.every((value, index) => value === arr2[index])
    );
}

console.log(array([2, 2, 3], [2, 2, 3]));
console.log(array([0, 2, 3], [1, 3, 4]));
