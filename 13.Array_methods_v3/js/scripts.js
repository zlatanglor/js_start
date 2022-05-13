'use strict'
const arr = [1, 'a', false, 0, 'c', 5, 7, [2, 4, 6], 7, 6, 1, 5];
console.log(arr);
function callback(item, index, array) {
    item = array[index];
    if (Array.isArray(item)) {
        return true;
    }
}

console.log('---indexOf()---')
console.log(arr.indexOf(7));
function indexOf(arr, item, from) {
    if (!Array.isArray(arr) || arr.length <= from) {
        return -1
    }
    let i = 0;
    if (typeof from === 'number') {
        i = from < 0 ? arr.length + from : from;
    }
    for (i; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}
console.log(indexOf(arr, 7));

console.log('---lastIndexOf()---');
console.log(arr.lastIndexOf(7));

function lastIndexOf(arr, item, from) {
    if (!Array.isArray(arr)) {
        return -1
    }
    let i = arr.length - 1;
    if (typeof from === 'number') {
        i = from < 0 ? arr.length + from : from;
    }
    for (i; i >= 0; i--) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

console.log(lastIndexOf(arr, 7));

console.log('---find()---');
let findArr = arr.find(item => Array.isArray(item));
console.log(findArr);

function find(arr, callback) {
    for(let index = 0; index < arr.length; index++) {
        if(callback(arr[index], index, arr)) {
            return arr[index];
        }
    }
}

console.log(find(arr, callback));

console.log('---findIndex()---');
findArr = arr.findIndex(item => Array.isArray(item));
console.log(findArr);

function findIndex(arr, callback) {
    for(let index = 0; index < arr.length; index++) {
        if(callback(arr[index], index, arr)) {
            return index;
        }
    }
    return -1;
}

console.log(findIndex(arr, callback));

console.log('---includes()---');
console.log(arr.includes(0, 4));

function includes(arr,searchElement, fromIndex = 0) {
    if (!Array.isArray(arr) || arr.length <= fromIndex) {
        return false;
    }
    let i = 0;
    if (typeof fromIndex === 'number') {
        i = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    }
    for (i; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return true;
        }
    }
    return false;
}

console.log(includes(arr, 0, 4));

console.log('---every()---');
console.log(arr.every(item => Array.isArray(item)));

function every(arr,callback) {
    for(let index = 0; index < arr.length; index++) {
        if(!callback(arr[index], index, arr)) {
            return false;
        }
    }
    return true;
}

console.log(every(arr, callback));

console.log('---some()---');
console.log(arr.some(item => Array.isArray(item)));

function some(arr,callback) {
    for(let index = 0; index < arr.length; index++) {
        if(callback(arr[index], index, arr)) {
            return true;
        }
    }
    return false;
}

console.log(some(arr, callback));