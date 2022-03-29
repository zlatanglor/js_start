'use strict';
let numOrStr = prompt('input number or string');
console.log(numOrStr);

//Задание 1
if (numOrStr === null || numOrStr.trim() === '' || isNaN(+numOrStr)) {
    console.log('Ты не прав');
} else console.log('OK!');

//Задание 2
switch (numOrStr && numOrStr.trim() && isNaN(+numOrStr)) {
    case null:
        console.log('вы отменили');
        break;
    case '':
        console.log('Empty String');
        break;
    case isNaN():
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!')
}