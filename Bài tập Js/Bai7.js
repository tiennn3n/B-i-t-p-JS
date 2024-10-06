function Sosanh(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return obj1 === obj2; 
    }    
    const k1 = Object.keys(obj1);
    const k2 = Object.keys(obj2);

    if (k1.length !== k2.length) {
        return false;
    }

    for (let key of k1) {
        if (!k2.includes(key) || !Sosanh(obj1[key], obj2[key])) {
            return false;
        }     
    }


    return true; 
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 3, b: { c: 4 } };
console.log(Sosanh(obj1, obj2));
