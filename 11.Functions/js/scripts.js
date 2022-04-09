'use strict';
const num = +prompt('Введи число');
const numExponent = +prompt('Введи степень');
let sum = null;

function mathPow (num, numExponent = 1) {
        if (isNaN(num) || isNaN(numExponent)) {
                sum = 'some error';
                return sum;
        } else {
                sum = num ** numExponent;
                return sum;
        }
}

mathPow(num, numExponent);
alert(sum);