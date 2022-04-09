'use strict';
let str = prompt('Любое слово');
const strLength = +prompt('Длина строки');
const strSymbol = prompt('Введи 1 символ');
const boolean = confirm('Нажми любую кнопку');

function padString (string, lenght, symbol, boolean = true ) {
    if (string === null || string !==string.trim() || !isNaN(+string)) {
        str = 'Явно какая-то ошибка при вводе слова';
        return str;
    } else if(lenght === 0 || isNaN(lenght)) {
        str = 'Число введи';
        return str;
    } else if (symbol === null || symbol.length !== 1 || symbol.trim() === '') {
        str = 'Введи 1 символ';
        return str;
    }
    if (lenght > string.length) {
        for (let i = string.length; i < lenght; i++) {
            if (boolean === true) {
                str += symbol;
            } else if (boolean === false) {
                str = symbol + str;
            }
        }
        return str;
    } else if (lenght < string.length) {
        for (let i = string.length; i >= lenght; i--) {
            str = string.substr(0, i);
        }
        return str;
    }
}
padString(str, strLength, strSymbol, boolean);

console.log(str);
alert(str);

// if (strLength > str.length) {
//     for (let i = str.length; i < strLength; i++) {
//         if (boolean === true) {
//             str += strSymbol;
//         } else if (boolean === false) {
//             str = strSymbol + str;
//         }
//     }
// } else if (strLength < str.length) {
//     for (let i = str.length; i >= strLength; i--) {
//         str = str.substr(0, i);
//     }
// }
