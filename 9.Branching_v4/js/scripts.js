'use strict';
//1
const x = 7;
const y = 10;
x > y ? console.log('X больше Y') : console.log('X НЕ больше Y');

//2
const num = prompt('Введите число');
if (num === null || isNaN(+num) || num.trim() === '') {
    alert('Упс');
} else if (num %2 === 0) {
    alert(`Число ${num} четное`);
} else {
    alert(`Число ${num} НЕ четное`);
}

//3
const int = prompt('Введите целое число');
const sign = Math.sign(+int) === 1 || Math.sign(+int) === 0 ? 'положительное' : 'отрицательное';
if (int === null || isNaN(+int) || int.trim() === '') {
    alert('Число введи!');
}else if (Number.isInteger(+int)) {
    const stringLength = int[0] === '-' ? int.length - 1 : int.length;
    alert(`Число "${int}" - ${sign}, содержит ${stringLength} символ(а)`);
}else {
    alert('Нужно число без точки!');
}

//4
const a = +prompt('Введи первое число');
const b = +prompt('Введи второе число');
const c = +prompt('Введи третье число');
if (a > b && a > c) {
    alert(`Число ${a} - самое большое`);
} else if (b > a && b > c) {
    alert(`Число ${b} - самое большое`);
} else if (c > a && c > b) {
    alert(`Число ${c} - самое большое`);
} else if (a === b || a === c || b === c) {
    alert('Числа равны');
} else {
    alert('Ты сделал что то не так)');
}

//5
const a1 = +prompt('Сторона треугольника A');
const b1 = +prompt('Сторона треугольника B');
const c1 = +prompt('Сторона треугольника C');
if (a1 + b1 > c1 && a1 + c1 > b1 && b1 +c1 > a1){
    alert('Треугольник сущестует');
} else {
    alert('Треугольник НЕ сущестует');
}