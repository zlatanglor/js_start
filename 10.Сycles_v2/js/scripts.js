'use strict';
const num = +prompt('Введи число');
let simpleNum = `${true} (простое)`;
if (isNaN(num) || num <= 0) {
    alert('Введи положительное число!')
} else if (num === 1) {
    alert('Число 1 — не является ни простым, ни составным числом, так как у него только один делитель — 1. Именно этим оно отличается от всех остальных натуральных чисел.')
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            simpleNum = `${false} (составное)`;
            break;
        }
    }
    alert(`Число "${num}" //${simpleNum}`);
}