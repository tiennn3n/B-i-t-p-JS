function PassW(password) {
    const check = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{}]).{8,}$/;
    return check.test(password);
}

console.log(PassW("MinhT002!"));
console.log(PassW("tienminh"));
