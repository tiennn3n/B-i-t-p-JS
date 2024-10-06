let text = "aaaBB";
console.log(text.replace(/./g, t => text.match(/[A-Z]/g)?.length > text.match(/[a-z]/g)?.length ? t.toUpperCase() : t.toLowerCase()));
