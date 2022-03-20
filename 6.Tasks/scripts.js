'use strict';
// Task #1
let user = {};
user.name = 'Jonh';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);

// Task #2
const admin = {
    name: 'John'
};
admin.name = 'pete'; //Можно изменить значение ключа
console.log(admin);

// Task #3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
const sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);