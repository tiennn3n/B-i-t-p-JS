let text = "xin chào mọi người";
let outtext = text.split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
console.log(outtext);
