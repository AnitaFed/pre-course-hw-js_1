let passport = {
    name: "Petr",
    surname: "Petrov",
};

// Создаем копию объекта passport
let myPassport = Object.assign({}, passport);

// Меняем имя в копии объекта
myPassport.name = "Ivan";

// Выводим значения имен в консоли
console.log("Оригинальный passport:", passport);
console.log("Мой passport:", myPassport);