'use strict';
//1
let arr = ['a', 'b', 'c', 'd'];
console.log(`${arr[0]} + ${arr[1]}, ${arr[2]} + ${arr[arr.length-1]}`);

//2
arr = [2, 5, 3, 9];
let result = arr[0] * arr[1] + arr[2] * arr[3];
console.log(result);

//3
arr = [[1, 2, 3], [4, 5, 6], [7,8,9]];
console.log(arr[1][0]);

//4
const obj =  {
    js:['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
    };
console.log(obj.js[0]);

//5
arr = [];
let arrItem = 'x';
for (let i = 0; i < 10; i++) {
    arr.push(arrItem);
    arrItem += 'x';
}
console.log(arr);

//6
arr = [];
arrItem = null;
for (let i = 1; i < 10; i++) {
    arrItem = '';
    for (let index = 1; index <= i; index++) {
        arrItem += i;
    }
    arr.push(arrItem);
}
console.log(arr);

//7
function arrayFill(value, length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(value);
    }
    return arr;
}
console.log(arrayFill('y', 7));

//8
arr = [4, 1, 7, 2];
result = null;
for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (result > 10) {
        result = i + 1;
        break;
    }
}
console.log(result);

//9
arr = [1, 2, 3, 4, 5];
function reverse(arr) {
    const reverseArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}
console.log(reverse(arr));

//10
arr = [[1, 2, 3], [4, 5], [6]];
result = null;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        result += arr[i][j];
    }
}
console.log(result);

//11
arr =  [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
result = null;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let x = 0; x < arr[i][j].length; x++) {
            result += arr[i][j][x];
        }
    }
}
console.log(result);