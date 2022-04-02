'use strict';
//1
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
console.log('----------------------');

//2
for ( let i = 100; i >= 1; i--) {
    console.log(i);
}
console.log('----------------------');

//3
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log('----------------------');

//4
const arr = [1, 2, 3, 4, 5];
let sum = null;
for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
}
console.log('Сумма чисел массива = ' + sum);
console.log('----------------------');

//5
sum = null;
for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i]**2;
}
console.log('Сумма квадратов чисел массива = ' + sum);