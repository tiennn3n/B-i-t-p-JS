let arr = Array.from({ length: Math.floor(Math.random() * 10) + 1 }, () => ({ stt: Math.floor(Math.random() * 100) }));

console.log("Mang ban dau:", arr);

arr.sort((a, b) => b.stt - a.stt);
console.log("Mang giam dan:", arr);
