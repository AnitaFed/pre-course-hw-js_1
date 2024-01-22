let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    married: true,
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarried2 = { ...passportMarried};
passportMarried2.married = true;

console.log(passportMarried);
console.log(passportMarried2);