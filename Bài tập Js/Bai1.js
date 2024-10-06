let str = "Toi ten la Tien";
setInterval(() => {console.log(str = str.slice(-1) + str.slice(0, -1));}, 500);
