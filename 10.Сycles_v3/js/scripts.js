'use strict';
const num = +prompt('Введи число');
let div = num;
if (isNaN(num)) {
    alert('Введи число!');
}else if(num <= 0) {
    alert(NaN);
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            div = i;
            break;
        }
    }
    alert(`Наименьший делитель числа "${num}" = ${div}`);
}