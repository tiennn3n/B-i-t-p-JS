let nowTime = new Date();
console.log(new Date(nowTime.getFullYear(), nowTime.getMonth() + 1, 0).getDate() - nowTime.getDate());
