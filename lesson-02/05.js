let passport = {
    name: "Petr",
    surname: "Petrov",
};

let myPassport = {...passport};

myPassport.name = "Ivan";

console.log("Оригинальный passport:", passport);
console.log("Мой passport:", myPassport);