'use strict';
let sum = null;

function mainFunction (callback) {
    const num = +prompt('Введи число');
    const numExponent = +prompt('Введи степень');
    if (isNaN(num) || isNaN(numExponent)) {
        sum = 'some error';
        alert(sum);
        return sum;
    } else {
        callback(num, numExponent);
    }
}

function exponentiation(num, numExponent) {
    sum = num ** numExponent;
    alert(`${num} в степени ${numExponent} = ${sum}`);
    return sum;
}
mainFunction(exponentiation);

function multiplay(num, numExponent) {
    sum = num * numExponent;
    alert(`${num} * ${numExponent} = ${sum}`);
    return sum;
}
mainFunction(multiplay);

function division(num, numExponent) {
    sum = num / numExponent;
    alert(`${num} / ${numExponent} = ${sum}`);
    return sum;
}
mainFunction(division);

function modulo(num, numExponent) {
    sum = num % numExponent;
    alert(`${num} % ${numExponent} = ${sum}`);
    return sum;
}
mainFunction(modulo);