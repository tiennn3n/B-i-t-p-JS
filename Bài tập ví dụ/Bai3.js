const obj1 = { vd1: 'Hai', vd2: 'Hung' };
const obj2 = { vd3: 'Hau', vd4: 'Hoang'};
const obj3 = { vd5: 'Khan', vd6: 'Tu' };

const objn = { ...obj1, ...obj2, ...obj3 };

console.log(objn);
