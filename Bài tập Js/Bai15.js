const arr = Array.from({ length: Math.floor(Math.random() * 10) + 1 }, () => Math.floor(Math.random() * 46) + 5);
console.log("Mang:", arr);
const max = Math.max(...arr);
console.log("Phan tu lon nhat:", max);
