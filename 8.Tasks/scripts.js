'use strict';
//Task#1
Boolean(Number('10')) + 1; // 2 ( Number('10') = 10; Boolean(10) = true; true + 1 = 1 + 1 = 2 )
'sub ' + Number(false); // 'sub 0' ( Number(false) = 0; 'sub ' + 0 = 'sub 0' )
16  *  '      91    '; // 1456 ( '      91    ' преобразуется в число 91 )
true - 70; // -69 ( true = 1; 1 - 70 = 69 )
Number(1 + String(1)) + 1; // 12 ( String(1) = '1'; Number(1 + '1')=Number('11')=11; 11 + 1=12 )

//Task#2
const convertToSec  = 60 * 60;
const userRequest = +prompt('Конвертация часов в секунды');
const sum = convertToSec * userRequest;
userRequest > 0 ? alert(`${sum} секунд`) : alert('Неверное значение');

//Task#3
let num = 1;
num += 12; // num = num + 12;
num -= 14; //num = num - 14;
num *= 5; //num = num * 5;
num /= 7; //num = num / 7;
++num; // num = num + 1;
--num; //num = num - 1;
alert(num);