'use strict';
const arr = [10, 2, 5, -1, -2, -3, 8, 11];
const arr1 = [-8];
// const arr = [];

function sortArr (arr) {
    const posArr = [];
    if (arr.length === 0) {
        alert('У тебя пустой массив(')
    }
    for (let i = 0; i < arr.length; i++) {
        if (Math.sign(arr[i]) === 1) {
            posArr.push(arr[i]);
        }
    }
    if (posArr.length > 0) {
        return posArr;
    } else {
        return null;
    }
}
sortArr(arr);