'use strict';
let a = +prompt();
const b = +prompt();
const num = +prompt('Введите число от 1 до 4');
let result = null;

a === 0 ? console.log('Верно') : console.log('неВерно');
a > 0 ? console.log('Верно') : console.log('неВерно');
a < 0 ? console.log('Верно') : console.log('неВерно');
a >= 0 ? console.log('Верно') : console.log('неВерно');
a <= 0 ? console.log('Верно') : console.log('неВерно');
a !== 0 ? console.log('Верно') : console.log('неВерно');
a === 'test' ? console.log('Верно') : console.log('неВерно');
a === '1' ? console.log('Верно') : console.log('неВерно');
a > 0 && a < 5 ? console.log('Верно') : console.log('неВерно');

switch (a) {
    case 0:
    case 2:
        a += 7;
        alert(a);
        break;
    default:
        a /= 10;
        alert(a);
}

a <= 1 && b >= 6 ? alert( a + b ) : alert( a - b );
a > 2 && a < 11 || b >= 6 && b < 14 ? alert('Верно') : alert('неВерно');

switch (num) {
    case 1:
        result = 'Winter';
        alert(result);
        break;
    case 2:
        result = 'Spring';
        alert(result);
        break;
    case 3:
        result = 'Summer';
        alert(result);
        break;
    case 4:
        result = 'Autumn';
        alert(result);
        break;
    default:
        alert('Не верное значение');
}