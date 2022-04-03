'use strict';
const num = +prompt('Введи число');
let simpleNum = `${true} (простое)`;
if (isNaN(num) || num <= 1) {
    alert('Введи число больше единицы!')
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            simpleNum = `${false} (составное)`;
            break;
        }
    }
    alert(`Число "${num}" //${simpleNum}`);
}